---
layout: post
title: "UnixのパイプをRubyで扱う"
date: 2014-09-03 18:20:35 +0900
comments: true
categories: [ruby]
---

積読消化シリーズです。  
[なるほどUnixプロセス ― Rubyで学ぶUnixの基礎](http://tatsu-zine.com/books/naruhounix)  
UnixでのパイプをRubyで表すとどうなるか。

# Rubyで扱うパイプ

## パイプとは

パイプとは、「単方向のデータの流れ」です。  
パイプでは、２つのプロセス(A,B)で、ストリームを介して、一方通行に通信します。  
(ストリームは最後の方に補足します。データを溜めておく場所のイメージ)

## 単一プロセスでのパイプ
一つのプロセスでの、パイプを表現すると以下の通りです。

```rb
p IO.pipe #=> [#<IO:fd 7>, #<IO:fd 8>]
reader, writer = IO.pipe
# reader => #<IO:fd 7>
# writer => #<IO:fd 8>

writer.write("書き込みました。")
writer.close
puts reader.read # =>書き込みました。
```

reader(A)、writer(B)とした場合、`B => A`というデータの流れは可能ですが、`A => B`はできません。  
`writer.write`でストリームに情報を書き込みます。  
`reader.read`でストリームに書き込まれた情報を読み込みます。  

### メモ
* `reader.read`の前に、`writer.close`をする
  * `reader.read`は区切り文字が見つかるまでストリームを読み込み続けます
  * `writer.close`することで、ストリームへの書き込みが終了させ、区切り文字を設定します
* `writer.close`で閉じたストリームを更新することはできない

## 親子プロセスでのパイプ

```rb
reader, writer = IO.pipe
# reader => #<IO:fd 7>
# writer => #<IO:fd 8>

# forkにより子プロセスを生成
fork do
  reader.close
  10.times do
    writer.write "Another one bite the dust\n"
  end
end

writer.close
print reader.read
# => Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
# Another one bite the dust
```

親プロセス、子プロセスでは、それぞれ使用しないIOインスタンスをcloseしています。  
これは、子プロセスが親のファイルディクリプタを複製して利用するためです。  
ファイルディスクリプタというのは、ストリームの出入り口をイメージすると分かりやすいかもしれません。  
writerやreaderでwrite/readするためのデータの取り出し口ですね。  
* 親プロセスでは、write処理は行わないため、`writer.close`をします。  
* forkした子プロセスでは、read処理は行わないため、`reader.close`をします。  
これで、利用しないファイルディクリプタに影響を与えなくなります。

### 親子プロセス両方でreader.close
forkした子プロセスがwriteする前に、親プロセスで`reader.close`をすると、どうなるでしょうか。

```rb
reader, writer = IO.pipe

fork do
  reader.close
  10.times do
    writer.write "Another one bite the dust\n"
    # => `write': Broken pipe (Errno::EPIPE)が発生
  end
end

reader.close # この行を追加
writer.close
print reader.read
```

親子でreader.closeをすると、書き込んだ情報の出力先がなくなります。  
そのため、子プロセスで書き込みをするとエラーが発生します。


## 補足:ストリーム

スラッシュドットの以下の記事がイメージしやすかったです。
[gatekeeperの日記： TCPとUDPの違い](http://slashdot.jp/journal/160355/TCPとUDPの違い)

> ストリーム型というのは１個のデーターをためておく場所（ストリーム）があって、
> ストリームの性質としては最初に入れたデーターが最初に出てくる。（要はFIFOだな）
> ...
> それがどういうことになるかというと、ストリーム型では何回かに分けて書き込んだデーターを一気に読み込んだり、
> 一気に読み込んだり、 逆に一度に書き込んだデーターを細切れで読み出したりできる。
> つまり、読み書きの境界はストリームに入った時点で保存されない。

ストリームはデータを溜めておく場所で、明示的に終了したよって宣言しないと、データの区切りが分からないものなんですね。  
`close`することで、データの境界を設定します。  
それまでは好きなだけ`write`でデータを溜め込みます。  
しかし、`read`するためには、`close`でデータの区切りを宣言しないといけません。  
宣言しない限り`read`でのデータの読み込み処理は完了しないんですね。

