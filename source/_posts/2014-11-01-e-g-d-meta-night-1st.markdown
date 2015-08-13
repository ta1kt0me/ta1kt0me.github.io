---
layout: post
title: "MetaNight 第1回を開催しました"
date: 2014-11-01 01:42:36 +0900
comments: true
categories: [ruby, MetaNight]
---

[MetaNight](http://e-g-d.doorkeeper.jp/events/16300)という[Metaprogramming Ruby 2](http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22)の読書会の第１回目を開催しました。

<a href="http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N9I0RMQ&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=pochan0919-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=B00N9I0RMQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<!-- more -->

イベント概要については、<a href="{{ root_url }}{% post_url 2014-11-02-about-meta-night %}">About MetaNight</a>をご覧ください。

第一回目。このイベント自体は @tkymtk さんの発案による共同運営という形で開催しました。  
↓のコンセプトでやっているので気が向いたら遊びにきてください。  

## コンセプト

__英語の技術書を楽しく読む！__

技術書読むのって結構精神削られますよね...  
しかも英語とか...  

けど、英語、ちょっと読めるようになりたいしなぁ...  
と、くすぶっている方にはピッタリです。  
(自分がそんな感じ)

後、黙々と読むだけではなくって、話したいです。(超大事。雑談楽しい)  
英語か技術どっちか片方にで興味がある人がいたら話したいのでぜひ。  
一応公用語は日本語です。安心してください。

---

以下、本日の振り返り。  
写真とっておけばよかった...  

# 第1回

3名での開催でした。

## 進め方

情報共有にはTrelloを使いました。  
読みながら気になった点があればカードを作成し、共有時間に見直しました。  

時間的的には、4:6で共有もとい雑談時間の方がやや多め。  
今回は手探り感満載で２つの方法を試しました。  

### 1. 読む時間決めて、黙々と読む。

まずはこのやり方で始めました。  
時間を決めて参加者それぞれで読み進める。  
時間がきたら気になったところをそれぞれ話してく。  

### 2. どこまで読むか決めて、読み終わったら共有

1のやり方で進めると先に進みすぎたりした時に前の内容が抜け落ちたりするという提案があったので、この方法を試す事にしました。  
遅い人（僕です）のペースにあわせてもらって読み進めました。  
結果的に同じ範囲で気になる点を話し合えたので、こちらのスタイルの方で続ける事に。  

## 進捗・内容

`I. Metaprogramming Ruby のchapter1`が終わりました。  

映画オタクのBobは自分の作った映画データベースアプリに鼻高々でいた。  
しかし、そのプライドは経験豊富な同僚のBillによってものの一瞬で粉砕された。  
DBのテーブルやカラムに依存した17行のコードは、たったの2行のActiveRecord::Baseを拡張しただけのclass定義に成り代わり、しかもDBに依存しないコードに置き換えられたのだ。  
強力なメタ・プログラミングの威力に圧倒されたBobは、これから長くて短い一週間を過ごす事になる。  
しかし、恐れる事は無い。メタ・プログラミングはGuruのみが支配する黒魔術の世界ではないのだ。  
Bill同様、あなたも少しずつメタ・プログラミングの世界に魅了されていく事になるであろう。  

## 反省・感想

* 使った店がお洒落
* ハロウィンで客が少なかったおかげなのか、優雅なソファーでくつろげた
* 楽しくて延長して3時間やってしまった
* 実は2時間経ったら、店員からドリンク催促があったんです
* Noと言えない
* 一緒にやる人がいると、自分で読み流しているところに気がつける(2回目の超大事)
* 自分で書く時に前置詞の使い方が難しい
* そんな人たち向けにおすすめを紹介してもらった！ <a href="http://www.amazon.co.jp/gp/product/4890855270/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4890855270&linkCode=as2&tag=pochan0919-22">一億人の英文法 ――すべての日本人に贈る「話すため」の英文法（東進ブックス）</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=4890855270" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
* Trelloでの共有が便利
* カードのクローズとかのやり方は次回までの課題
* Hangoutも使えるようにしたい
* 英語の微妙なニュアンスを日本語で落とし込むのが難しい(知恵が欲しい)
* いきなりActiveRecordかよ
* 悟りを開ければGuru
* ダイヤルMってなんなんだろう
* 頻繁に使われるruntime
* yangとyin。英語じゃないじゃん、そりゃ辞書に無いわ。
* ghost townとmarket、C++とRuby
* introspection、stick、entrench、derive、at one's disposal、nagging、a bolt-on power feature、自分一人じゃニュアンス掴めなかった
* おすすめ！ http://gilesbowkett.blogspot.jp/2007/11/why-i-program-in-ruby-and-maybe-why-you.html
* 忘れないように、2週間間隔で開催できるといいな

# 最後に

見出しぐらい英語でかけるようになりたい  
今月中に第2回を開く

