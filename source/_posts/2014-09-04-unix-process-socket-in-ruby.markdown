---
layout: post
title: "UnixのSocketをRubyで扱う"
date: 2014-09-04 03:20:37 +0900
comments: true
categories: [ruby]
---

積読消化シリーズです。  
[なるほどUnixプロセス ― Rubyで学ぶUnixの基礎](http://tatsu-zine.com/books/naruhounix)  
プロセス間通信を、昨日はpipe、今日はUnixソケットのところです。

# Rubyのプロセス間通信でメッセージ（データグラム）を使う

データの通信にストリームではなく、メッセージ（データグラム）を利用したい場合、UNIXソケットを使います。

## メッセージ

昨日の最後にも載せた記事に説明があります。  
メッセージを利用する場合は、１通信が１メッセージとなるため、データのデリミタが不要です。  
(close処理が不要になる)

[gatekeeperの日記： TCPとUDPの違い](http://slashdot.jp/journal/160355/TCPとUDPの違い)

> ところがデータグラム型ではメッセージ単位なのでメッセージの境界が保存されていて、
> 読み込みと書き込みは常にペアでなければいけない。

なお、パイプでは、メッセージは使えません。

## Unixソケット

Unixソケットは、ソケットを利用したプロセス間通信の方法の一つです。  
メッセージを利用するためにはパイプではなく、Unixソケットでないといけません。  
pipeではできなかったデータの双方向の通信ができます。

## サンプル 

```rb
require 'socket'

# :DGRAMはメッセージ（データグラム）の利用を宣言
child_socket, parent_socket = Socket.pair(:UNIX, :DGRAM, 0)
maxlen = 1000 # メッセージのMaxサイズ
fork do
  # 子プロセスで使用しないsocketを閉じる
  parent_socket.close
  # 対となるSocketからのメッセージの通知を待つ
  instruction = child_socket.recv(maxlen)
  # 対となるSocketへメッセージ送信
  child_socket.send("#{instruction} accomplished!", 0)  
end

# 親プロセスで使用しないsocketを閉じる
child_socket.close
# 対となるSocketへメッセージ送信
parent_socket.send("Heavy lifting", 0)
# 対となるSocketからのメッセージの通知を待って表示する
$stdout.puts parent_socket.recv(maxlen)
# =>Parent_Socket accomplished!
```

`child_socket`と`parent_socket`でそれぞれ、メッセージをやり取りしています。

