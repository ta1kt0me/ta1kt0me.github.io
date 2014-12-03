---
layout: post
title: "MetaNight 第3回を開催しました"
date: 2014-12-03 23:55:01 +0900
comments: true
categories: [ruby]
---

イベント概要については、<a href="{{ root_url }}{% post_url 2014-11-02-about-meta-night %}">About MetaNight</a>をご覧ください。

[MetaNight](http://e-g-d.doorkeeper.jp/events/16300)という[Metaprogramming Ruby 2](http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22)の読書会の第３回目を開催しました。

<a href="http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N9I0RMQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00N9I0RMQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<!-- more -->

# 活動内容

Part 1 Chapter 2のThe Problem with Open ClassesからChapter 2の終わりまでやりました。  
読みながらの意見とかはこちらに載せてあります。  
https://trello.com/b/5WFCQ2ER/metanight-3rd

# 感想

前回ダメだったフリーマンカフェに行きました。  

## a dark side of open class

オープンクラスのネガティブな側面が紹介されていました。  
Monkeypatchの例としてリファクタリングの過程で`Array#replace`というメソッドを用意すると、既存機能をoverrideしてしまってテストでこけたという内容です。  
テストのおかげでリファクタリングの不具合に気付かせておいてさりげなくテストいいぜアピールをしていますね。  

overrideは必ずしも悪いことではなくて、例えばRailsなんかでも、`require`メソッドをoverrideしていたりします。Railsは標準ライブラリのクラスにも様々なメソッドを追加して、あると便利！と思わせるものは多いです。

Billがさらっと、`grep(/regex/)`を使っていて、pipe感覚でメソッドチェインをできるのはRubyで書いていていいところだという気づきもありました。

それと`Array#replace`は実は破壊的らしい。Ruby Sliverのひっかけ問題によく出るので要注意らしい！

## 英語

* fire up irb

irbを起動する、というニュアンス。発火を表現するいい日本語ってありそうで見つからなかった。

* perplex

なぜconfuseではダメなのか。ニュアンスの違いが難しい。


* pique

駆り立てる。ネガティブな意味合いを持っている表現だけど、ここの場合だとどうなんだろう。

## その他

* エディターは何を使っているのか。４人全員バラバラだった
* スクラムというものについてかじりました
* tapはメソッドチェイン中にログ出力したいときに使いやすそう

第4回を12月中にできたらやりたいな。
