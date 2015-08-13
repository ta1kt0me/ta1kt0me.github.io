---
layout: post
title: "MetaNight 第5回を開催しました"
date: 2015-02-12 13:46:20 +0900
comments: true
sharing: true
published: true
categories: [ruby]
---

イベント概要については、<a href="{{ root_url }}{% post_url 2014-11-02-about-meta-night %}">About MetaNight</a>をご覧ください。

[MetaNight](http://e-g-d.doorkeeper.jp/)という[Metaprogramming Ruby 2](http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22)の読書会の第５回目を開催しました。

<a href="http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N9I0RMQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00N9I0RMQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<!-- more -->

# 活動内容

フリーマンカフェで実施しました。  
Part 1 Chapter2 の The Truth About Classesから Constantの前までやりました。  
読みながらの意見とかはこちらに載せてあります。  
https://trello.com/b/6JT4fy3D/metanight-5th

# 感想

前回よりもかなり間が空いてしまった...(結局1月にできなかった...)  
Billの図のおかげで、Rubyにおけるクラスとオブジェクトの関係性がよりはっきりわかってきました。  
Billできるやつ。


## Classes themselves are nothing but objects

__Putting It All Together__ で表しているのですが、クラスはオブジェクトなんだよ、っていうことを語っています。そこが他の言語とは違うんだと。  
Classはobject_id持ってますし、変数に代入することもできます。実際にはClassへの参照を表現している定数(Class名)を変数に代入しています。ここは、次回のConstantのところに繋がってきますね。

ClassとModuleの関係の話も出てきました。２つは非常によく似ているけれど、使い分け方の基準として

* インスタンス化と継承を使いたいならClass
* どこでもincludeできるのがModule

と書いてありました。インスタンス化する必要があるかどうかが、おおきな分かれ目になるのかな。

## 英語

* Take a deep breath

文頭でよく見かける、一息ついて、という表現。takeの使い所ってよく分からないよね、って話が出ました。取るってニュアンスはわかるけれど、固定表現が多いのかな？

* get away with

やりすごす、とか、すますことができる、とか...?

* Chances are

多分、だろう、といった表現。なんでmaybeじゃないんだろう、特殊な意味が含まれてるのかな？  
微妙なニュアンスの違いがけっこう難しいです。

* A variable can reference a class

referenceって形容詞だから文法的に変じゃない？って話が挙がりました。結果として、動詞としても使えるようなので、少しずつだけど、言葉が変化している面白い例なんだなと感じました。

## その他

* meta_ruby = MetaRuby.newのとき、MetaRuby.instance_methods == meta_ruby.methods
* allocate メソッド、rails(ActiveRecord)だと再定義されてる
* Class.superclassはModule、Module.classはClass、Class.super....というループ

今回は初参加の方が多くて新鮮でした。人数増やしたりオンライン検討したりしたほうがいいのかなぁと思ったり。

第6回は2月末か、3月頭にやる。

