---
layout: post
title: "RubyでUnixのSocketを利用したWebサーバーを作る"
date: 2014-09-05 19:08:20 +0900
comments: true
categories: [ruby]
---

積読消化シリーズです。  
[なるほどUnixプロセス ― Rubyで学ぶUnixの基礎](http://tatsu-zine.com/books/naruhounix)  
簡単なWebサーバーを作ります。  

* telnetでアクセスするWebサーバー
* ブラウザでアクセスするWebサーバー
* forkしたProcessでリクエストを処理するWebサーバー

# telnetでアクセスするWebサーバー

まずはtelnetでアクセスするためのシンプルなWebサーバーを用意します。  

```rb
#!/usr/bin/env ruby

require 'socket'

# 127.0.0.1(localhost)で8080ポートで立ち上げる
socket = TCPServer.open '127.0.0.1', 8080

loop {
  connection = socket.accept
  connection.puts 'Hello Readers!'
  connection.close
}
```
サーバーを起動し、ターミナルを立ち上げて、telnetでアクセスしてみます。

```sh
telnet 127.0.0.1 8080
=> Hello Readers!
```

ただし、このままだとブラウザで`http://127.0.0.1:8080`にアクセスできません。  
次はブラウザでアクセスできるように修正します。

# ブラウザでアクセスするWebサーバー

```rb
#!/usr/bin/env ruby

require 'socket'
require 'time'

socket = TCPServer.open '127.0.0.1', 8080

loop {
  connection = socket.accept
  # response headerを設定
  connection.puts ['HTTP/1.1 200 OK',
                   "Date: #{Time.now.httpdate}",
                   'Server: Ruby',
                   'Content-Type: text/html; charset=utf-8',
                   "Content-Length: #{response_body.length}\r\n\r\n"].join("\r\n")
  # response bodyを設定
  connection.puts 'Hello Readers!'
  connection.close
}
```
レスポンスのヘッダー情報を追加しました。  
ヘッダーとボディは改行`\r\n`で区切ります。  

これでブラウザでアクセスできるようになりました。

# forkしたProcessでリクエストを処理するWebサーバー

続いては、アクセスを子プロセスで処理するように変更します。

```rb
#!/usr/bin/env ruby                           
require 'socket'
require 'time'

socket = TCPServer.open '127.0.0.1', 8080

fork do
  # 子プロセスで処理
  loop {
    response_body = 'Hello Browser!'
    connection = socket.accept
    connection.puts ['HTTP/1.1 200 OK',
                   "Date: #{Time.now.httpdate}",
                   'Server: Ruby',
                   'Content-Type: text/html; charset=utf-8',
                   "Content-Length: #{response_body.length}\r\n\r\n"].join("\r\n")
    connection.puts response_body
    connection.close
  }
end

# 親プロセスの処理を待ちにする
Process.waitall
```

forkで子プロセスを生成し、リクエストを子プロセスで処理しています。  
親プロセスは待ち状態になっているので子プロセスからのなにかしらのシグナルを受け取るべきですが、そこはまた今度。

