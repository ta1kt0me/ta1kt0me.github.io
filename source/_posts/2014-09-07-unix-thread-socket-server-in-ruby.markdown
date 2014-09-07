---
layout: post
title: "RubyのThreadを利用したWebサーバーを作る"
date: 2014-09-07 03:15:15 +0900
comments: true
categories: [ruby]
---

積読消化シリーズの派生です。  
[なるほどUnixプロセス ― Rubyで学ぶUnixの基礎](http://tatsu-zine.com/books/naruhounix)  
processをforkして動くWebサーバーをThreadで試してみます。  

# Threadの簡単な使い方

まずはThreadの簡単な使い方です。  
一部違いはあるものの、書き方はProcessのfork処理と大きく差はありませんね。  


```rb
t1 = Thread.start {
   puts "スレッド1 id : #{Thread.current}"
   sleep 1
}

# t1が終わるまではメインスレッドが待ちになる
t1.join
puts "メインスレッド id : #{Thread.current}"
```

* Thread.start{...}とすると、新しいThreadを生成してブロックを実行します。  
* メインスレッドが終了すると、Threadも終了します。
* Thread#joinを実行すると、対象のThreadの処理が終了するまで待ちます。

ちなみに、Threadはメインスレッドと同じProcessで実行されます。  
そのため、`ps`でrubyのプロセスを確認すると一つしかありません。  

# Threadローカルな変数

処理プロセスが同じということは、Thread内の処理で変数は共有されることになりますね。  
Threadローカルにするためには、Thread.startの引数に渡します。  

```rb
access_count = 0
t1 = Thread.start(access_count) {|ac|
   puts "スレッド1 id : #{Thread.current} #{ac += 1}" => 1
   sleep 1
}
t1.join
puts "メインスレッド id : #{Thread.current} #{access_count += 1}" => 1
```

# 複数Threadを待ちたい

Thread#joinは特定のThreadを待ちます。  
Webサーバーの例では複数のProcessを管理していました。  
同様のことをThreadで実行するには、`ThreadsWait`を使います。  

```rb
require 'thwait'
worker_threads = []
5.times {
  worker_threads << Thread.start {
     puts "スレッド1 id : #{Thread.current} "
     sleep 1
  }
}
# ThreadsWait.all_waitsで全てのThreadの処理終了を待つ
ThreadsWait.all_waits(worker_threads)
puts "メインスレッド id : #{Thread.current} #{access_count += 1}" => 1
```

# 複数Threadでリクエストを処理するWebサーバー

それでは上記を踏まえて、複数Threadで処理するWebサーバーを書いてみます。

```rb
#!/usr/bin/env ruby

require 'socket'
require 'time'
require 'thwait'

socket = TCPServer.open '127.0.0.1', 8080

access_count = 0

worker_threads = []
5.times {
  # access_countはThreadローカルにする
  worker_threads << Thread.start(access_count){|ac|
    # threadの処理
    loop {
      response_body = "Hello Browser! #{ac += 1}"
      connection = socket.accept
      connection.puts ['HTTP/1.1 200 OK',
                     "Date: #{Time.now.httpdate}",
                     'Server: Ruby',
                     'Content-Type: text/html; charset=utf-8',
                     "Content-Length: #{response_body.length}\r\n\r\n"].join("\r\n")
      connection.puts response_body
      connection.close
    }
  }
}

# メインスレッドを待ちにする
ThreadsWait.all_waits(worker_threads)
```

実際のところ、`socket`を複数Threadで共有した場合どうなるか、とかは調査する必要がありますね。  
ただ、Threadで置き換えることもできたということで。  
これでも一応動きます。  
