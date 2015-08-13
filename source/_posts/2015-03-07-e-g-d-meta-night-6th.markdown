---
layout: post
title: "MetaNight 第6回を開催しました"
date: 2015-03-07 01:02:02 +0900
comments: true
sharing: true
published: true
categories: [ruby]
---

イベント概要については、<a href="{{ root_url }}{% post_url 2014-11-02-about-meta-night %}">About MetaNight</a>をご覧ください。

[MetaNight](http://e-g-d.doorkeeper.jp/)という[Metaprogramming Ruby 2](http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22)の読書会の第６回目を開催しました。

<a href="http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N9I0RMQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00N9I0RMQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<!-- more -->

# 活動内容

Part 1 Chapter2 の `Constant` から `the rake example` の前までやりました。  
読みながらの意見とかはこちらに載せてあります。  
https://trello.com/b/OZ3llmtE/metanight-6th

# 感想

今回は初の一人会(いつも皆様ありがとうございます)だったので、同日あった別イベントに参加しつつ読み進めました。  
雑談メインになったので、そんなに進まなかった。

## Constant is like in a file system

定数の基本的な話です。同じ定数名だとしても、定義しているスコープが違えば、別物として扱います。そのため、仕組みとしてはファイルシステムを連想するとイメージしやすいです。例えば、別ディレクトリにあるファイルは、ファイル名が一緒でも別ファイルになります。定数も同様、同じ定数名でも、定義しているスコープが違えば参照する値は異なります。

* 定数の先頭は大文字
    + クラス名やモジュール名は定数である
* 定数を上書き可能だが、警告が発生

## 英語

* have to do with

関係がある

* go even further

さらに掘り下げる

## その他

* 酒弱いので、飲むと記憶力が薄まる
* Rubyは面白い
* 沖縄合宿行きたい

