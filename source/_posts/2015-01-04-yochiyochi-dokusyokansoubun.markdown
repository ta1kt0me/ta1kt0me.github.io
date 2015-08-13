---
layout: post
title: "冬休みの宿題"
date: 2015-01-04 21:07:32 +0900
comments: true
sharing: true
published: true
categories: [life ruby]
---

よちよち.rbで冬休みの宿題をやりました。

<!-- more -->

# Rails4でGoogle Map API連携アプリを開発する

宣言したのは[Rails4でGoogle Map API連携アプリを開発する](http://h5y1m1411.gitbooks.io/rails4-with-google-map-api/)という資料。  
ざっくりとした内容は下記の通り。

* scaffoldでtodoアプリを作り、Railsの基本的な機能や約束事を学ぶ
* scaffoldで住所と座標を登録するアプリを作り、Googleマップを画面に表示して、登録した座標にピンを刺す

yochiyochi.rbで覚えた内容を短時間で一通り復習できました。  
その他こんなところですね。  

* underscore.js便利。lodashというやつも使えそう。
* googleマップとの連携がこんなにも簡単だったなんて。今度Gemの中身見てみよう
* iphoneやipad用のfaviconの画像はいくつか用意しないといけない

アプリ用のGemを簡単に試したい時、モックを用意したい時なんかは使い勝手が良くてscaffoldいいなって思います。

# Rubyで作る奇妙なプログラミング言語

<a href="http://www.amazon.co.jp/gp/product/B00ICKLC2A/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00ICKLC2A&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00ICKLC2A&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00ICKLC2A" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

早いうちに消化を！と思って@katorieさんから借りた本を読みました。  
前半、というか付録以外は、摩訶不思議な言語をRubyで実装しよう！という内容だったのでやることは写経です。本はRuby1.8,1.9向けでしたが、2.2で問題なく動きました。  
作ってみた言語のサンプルコードです。  

```ruby  brainf_ck
++++++
[> ++++++++++ < -]
> +++++.
```

```ruby whitespace

           
    

                
    





```

無の境地ですね。

```ruby starry
            +               +  *       +     * .               +
               +  *          +     * .
```

キラキラしてます。

あと記号とか絵文字だけのbolic(絵文字が対応していないのでキャプチャで)

![bolic](http://i.gyazo.com/266f3ec1afff95237e93c12d2f125bf2.png)

言語のパターンとして、

* インタプリタ型
* 中間言語型
* トランスレーター

を試すことができます。  
ソースコードをほぼ全て丁寧に解説していて構文解析の入門というか、Rubyプログラミングの入門にはもってこいです(付録以外は)  
ParserやVMの基本的な仕組みや役割をRubyのソースコードで理解できます。  
紹介の仕方も興味深くて、構文の実装を一通り紹介しながら組み上げていくパターンと、解析部と実行部を並行して作り上げていくパターンがあって、実装の拡張の方法も垣間見れます。あと文章が面白い。    
唯一の難点は確認のためのプログラムを書くのがつらいこと。(上のやつですね)

構文ごとに解析と処理内容をコツコツ作っていけば言語はできるんですね。  
大事なのはシンタックスと意味論（見た目と中身）。  
データの持ち方のアプローチはいくつかあるみたいで、以下のようなやり方が示されていました。

* テープ(ハッシュ)を使う
* スタック(配列)を使う
* 木構造を使う

木構造のところは再帰プログラムになっているので、紙に書きながら「なるほどー」とかやってました。面白いですね。再帰と仲良くなることを目指そう。  

ちなみに付録でesoteric languageの闇を垣間見れます。付録と言いつつ一番面白いところなので心して読みましょう。著者の熱意を感じました(特にKEMURI)lambdaの丁寧な解説のところは基礎知識が必要だったので後で再チャレンジしたい。

そういえば、この本を読む前に「コーディングを支える技術」の前半を読んでおくと理解が早くなるかもしれません。  

## コーディングを支える技術

<a href="http://www.amazon.co.jp/gp/product/477415654X/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=477415654X&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=477415654X&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=477415654X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

5章ぐらいまでしか読めなかった。正月のだらけに負けました。  
一般的なプログラミング言語の基本的な構文がなぜ必要になったか歴史的経緯とか、言語間のちょっとした違いを交えながら、コーディングの知識を解説しています。  
残りは時間のあるときにさら〜っと読んでみよう。
