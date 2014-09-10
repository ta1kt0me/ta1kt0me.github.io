---
layout: post
title: "Bootstrap3 with Rails4z"
date: 2014-09-10 01:40:22 +0900
comments: true
categories: [ruby-on-rails]
---

<a href="http://www.amazon.co.jp/gp/product/4774165166/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774165166&linkCode=as2&tag=pochan0919-22">パーフェクト Ruby on Rails</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=4774165166" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />を、第6章からやってます。

Bootstrapの導入をzipから展開したので、Gemで導入する方法を調査しました。

<!-- more -->

# twitter-bootstrap-rails gemを使う

[twitter-bootstrap-rails](https://rubygems.org/gems/twitter-bootstrap-rails)というGemを使うことで、テキスト同様の表示ができます。  
(後の手順で一部テキスト外の修正を行う必要があるかもしれません)

```sh
echo "gem 'twitter-bootstrap-rails', '>= 3.1.1'" >> Gemfile
bundle install --path vendor/bundle
bundle exec rails generate bootstrap:install static
```

`p.167 リスト6.3`の通り`app/views/layouts/application.html.erb`を修正すれば完了です。
