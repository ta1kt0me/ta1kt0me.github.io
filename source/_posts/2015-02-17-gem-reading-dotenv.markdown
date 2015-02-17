---
layout: post
title: "Gem Reading - dotenv"
date: 2015-02-16 17:27:40 +0900
comments: true
sharing: true
published: true
categories: [ruby, ruby-on-rails]
---

[dotenv](https://github.com/bkeepers/dotenv)というGemを知ったので覗いてみました。

<!-- more -->

# about dotevn

読む前にどんなものか簡単に確認。

## これなに？

環境変数 ENV をファイル管理できるGemです。[こちら](http://qiita.com/closer/items/f8d8ba00ae86d7051764)の記事が参考になりました。

## どう使うの？

```rb Gemfile
# 後でbundle install
gem 'dotenv'
```

デフォルトでは`.env`というファイルの中に、
```yml .env
HOGE=1
FUGA=2
```
と書いて、`.env`を読み込むための命令 `Dotenv.load` を実行すると、 `ENV['HOGE']` が `1` を返すようになります。環境変数をわざわざexportコマンドを使ったり、`.zshrc`といった設定ファイルに書かなくても使えるようになります。  
fixtureを見た感じ`=`じゃなくて、YAMLっぽく`:`も使えそう。  

# 読んでみる

## 2つのGem

このGemからは2つのGemを利用できます。  

```ruby Gemfile
source 'https://rubygems.org'
gemspec :name => 'dotenv'
gemspec :name => 'dotenv-rails'
```

gemspecファイルも2つあった。  
`dotenv`というGemはこの機能のベース部分。`dotenv-rails`というGemは、Railsを利用するときに、`dotenv`を自動で有効にしてくれるラッパーです。それと、このGemにはCLIのスクリプトも包含しています。

## dotenv.rb

ここが外部から呼び出すインターフェースのメソッド(load, load!, overload)を定義しています。`module Dotenv extend self`として、これらをmoduleの特異メソッドにしています。  
環境変数を定義するファイルをこのメソッドの引数として渡せばいいが、引数なしの場合は `.env` がデフォルト値となります。  

まだ分かっていないのですが、 `instrument` というメソッドは、 `Active Support Instrumentation` という機能を使っている。  この機能はRails限定。  

`reduce`が使われているんだけど、`inject` とどう使い分けするのかなって疑問に思ったら[こんな記事](http://magazine.rubyist.net/?0038-MapAndCollect#l4)がありました。smalltalkとlispの考え方の違いか〜...実際にはaliasだから使う人の好みが出そう。

## environment.rb

`Dotenv::Environment`は`Hash`の子クラス。`.env`内のkey,value情報を自身に格納して、`apply` or `apply!` を呼び出すことで`ENV`に設定している。`apply`メソッドの呼び出しは、`dotenv.rb`で行っている。`Dotenv::Environment`の`initialize`の一部として`.env`の読み込みとパースをやってる。

## parse.rb

大事なのは`call`メソッド。ここで`.env`の内容がパースされる。正規表現弱いんでこのあたりは宿題...orz  
`@@substitutions`というクラス変数があるんだけどここには`Substitutions`のnamespaceにあるクラスの配列が入ってる。`.env`のvalueに設定できるものとして、

1. コマンドの出力結果
2. 変数展開

がある。
1 は `Dotenv::Substitutions::Command`で処理し、2 は`Dotenv::Substitutions::Variable`で処理する。  あー、実際にはそうなるように値を設定しているのかな？  

Substitutions.constants のところでクラス名が定数だということがわかった。  

## rails.rb

デフォルトでは、`before_configuration`のときに、`.env`を読み込む。`dotenv`と違い、ファイル名は`.env.local`,`.env.#{Rails.env}`もデフォルトで読み込み対象となる。

それと、上述の`Active Support Instrumentation`をspringによるファイル変更時のENV再設定に利用しているっぽい。この通知の仕組み？をもうちょっと掘り下げてみようかな。

# 終わりに

英語が堪能は方は[こちら](http://blog.mah-lab.com/2014/08/15/dotenv/)が参考になるかも。全然内容が頭の中に入ってこなかったのでもっとリスニング練習しよう。

