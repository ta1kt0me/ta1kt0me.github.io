---
layout: post
title: "Railsでbootswitchのテーマを適用したらActionView::Template::Error"
date: 2014-09-26 16:49:11 +0900
comments: true
categories: [ruby-on-rails]
---

bootswitch適用時に発生したActionView::Template::Errorの解消方法です。

<!-- more -->

# bootswatch適用

以下のようにbootswatchを適用しました。

```rb Gemfile
...
gem 'twitter-bootswatch-rails'
gem 'twitter-bootswatch-rails-helpers'
gem 'therubyracer'
```

今回はyetiを適用しています。  
テンプレートエンジンはslimを使っています。

```sh
bundle exec rails g bootswatch:install yeti
bundle exec rails g bootswatch:import yeti
bundle exec rails g bootswatch:layout yeti
mv app/views/layouts/yeti.html.slim app/views/layouts/application.html.slim
```

最後のmvでテンプレートファイルの入れ替えを行っています。  

# ActionView::Template::Errorエラー

ここで`rails s`すると、以下のエラーが発生しました。

```
ActionView::Template::Error (Asset filtered out and will not be served: add `Rails.application.config.assets.precompile += %w( yeti.css )` to `config/initializers/assets.rb` and restart your server):
     9:     / Le HTML5 shim, for IE6-8 support of HTML elements
    10:     /[if lt IE 9]
    11:       = javascript_include_tag "http://html5shim.googlecode.com/svn/trunk/html5.js"
    12:     = stylesheet_link_tag "yeti", :media => "all"
    13:     = yield(:page_stylesheet) if content_for?(:page_stylesheet)
    14: 
    15: 
  app/views/layouts/application.html.slim:12:in `_app_views_layouts_application_html_slim__3298097478580668215_70163995513140'


  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.6/lib/action_dispatch/middleware/templates/rescues/_trace.html.erb (1.0ms)
  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.6/lib/action_dispatch/middleware/templates/rescues/_request_and_response.html.erb (1.0ms)
  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.6/lib/action_dispatch/middleware/templates/rescues/template_error.html.erb within rescues/layout (15.5ms)
```

テンプレートファイルの12行目、ちょうどyetinテーマのcssのところですね。  
どうやら、呼び込みたいassetsファイルがちゃんとprecompileされていないらしい。  
追加したいなら、`config/initializers/assets.rb`にこんな感じに追加しろぼけってエラーメッセージ優しい。  

# エラー解消

そんなわけでこんな感じで修正。

```rb config/initializers/assets.rb
Rails.application.config.assets.precompile += %w( yeti.css yeti.js )
```

yeti.jsも同じエラーが出たのであわせて解消。  
これで`rails s`したらスタイル代わった。やった。


