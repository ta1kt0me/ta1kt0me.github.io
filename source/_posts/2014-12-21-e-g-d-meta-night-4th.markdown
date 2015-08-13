---
layout: post
title: "MetaNight 第4回を開催しました"
date: 2014-12-21 18:25:54 +0900
comments: true
sharing: true
published: true
categories: [ruby]
---

イベント概要については、<a href="{{ root_url }}{% post_url 2014-11-02-about-meta-night %}">About MetaNight</a>をご覧ください。

[MetaNight](http://e-g-d.doorkeeper.jp/)という[Metaprogramming Ruby 2](http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22)の読書会の第４回目を開催しました。

<a href="http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N9I0RMQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00N9I0RMQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<!-- more -->

# 活動内容

Part 1 Chapter2 の Inside the Object ModelからThe Truth About Classesの前までやりました。  
読みながらの意見とかはこちらに載せてあります。  
https://trello.com/b/djxLBmZ8/metanight-4th

# 感想

PUBLIC HOUSEに行きました。

## inside the object model

Billがさらっと書いた図がこの部分で言いたいことを全てを象徴しています。オブジェクトとクラス、インスタンス変数とメソッドの関係についてです。  
今回の内容でRubyにおけるオブジェクトとクラスの役割分担や関係性が少しずつ見えてきました。図で視覚的に理解するというのは非常に大事ですね。  

立場が変わると、言葉の意味が変わってくるという点も興味深かったです。  
クラスはオブジェクトが呼び出すことのできる`メソッド`を定義しているけれども、正確には、クラスはオブジェクトが呼び出すことのできる`インスタンスメソッド`を定義しています。クラスから見た`インスタンスメソッド`はオブジェクトから見た`メソッド`となります。  
[メソッドの差分を見てみた](https://trello.com/c/5nrd8XoA/36--)で試してみました。

```rb
obj = Object.new
Object.instance_methods - obj.methods
=> []
obj.methods - Object.instance_methods
=> []
```

となります。ちなみに、比較対象をObject.methodsにすると差分が出てきます。これについては後々出てくると思うのでちょっと置いておきます。

他にも`methods`や`instance_methods`のようなオブジェクトの中を参照するコードのことを`introspective code`と言っているようでしたが、これは一般的な用語なのかな？と疑問に感じたりしました。


## 英語

* Let’s wrap it all up

しっくりきたのは、`まとめましょう`。

* OO speak

OOはObject-Oriented 慣れないと？？ですね。

* spring into

湧き上がる、という表現に落ち着きました。ないところから自然と生まれる、というニュアンスなのかなぁ...  
「Instance variables just spring into existence when you assign them a value」というところで使われていた。お洒落な言い回し。

## その他

* クラス図っぽい図が出てきたことを皮切りに、UMLやBPMNについて
* object_idはメソッドだった(どこかに持っているのかな？そういう疑問は[これ](http://www.amazon.co.jp/gp/product/4274050653/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4274050653&linkCode=as2&tag=pochan0919-22)を読んで解決しよう！)

第5回は1月にやります！

