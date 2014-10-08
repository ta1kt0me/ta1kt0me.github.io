---
layout: post
title: "factorygirlの読み込みでエラー"
date: 2014-10-08 14:19:07 +0900
comments: true
categories: [ruby-on-rails]
---

パーフェクトRuby on Rails の7章のFactoryGirlを省略するところ(リスト7.12)で`uninitialized constant FactoryGirl (NameError)`が発生しました。  

<!-- more -->
`factory_girl_rails`を読み込んであげればおーけーです。

```rb spec/spec_helper.rb
require 'factory_girl_rails'

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
end
```