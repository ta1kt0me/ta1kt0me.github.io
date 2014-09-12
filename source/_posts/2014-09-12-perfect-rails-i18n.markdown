---
layout: post
title: "i18nの設定でdatetime_selectのエラー対応"
date: 2014-09-12 18:25:27 +0900
comments: true
categories: [ruby-on-rails]
---

<a href="http://www.amazon.co.jp/gp/product/4774165166/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774165166&linkCode=as2&tag=pochan0919-22">パーフェクト Ruby on Rails</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=4774165166" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />を、第6章からやってます。

日本語対応のi18nの設定でエラーが発生しました。  
補足ですが、私のRailsの環境は`4.1.5`です。  

```rb
ActionView::Template::Error (undefined method `map' for "translation missing: ja.date.order":String):
    27:   </div>
    28:   <div class="form-group">
    29:     <%= f.label :end_time %>
    30:     <%= f.datetime_select :end_time, start_year: now.year, end_year: now.year + 1 %>
    31:   </div>
    32:   <div class="form-group">
    33:     <%= f.label :content %>
  app/views/events/new.html.erb:30:in `block in _app_views_events_new_html_erb__622987462779560017_70179900721920'
  app/views/events/new.html.erb:5:in `_app_views_events_new_html_erb__622987462779560017_70179900721920'


  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.5/lib/action_dispatch/middleware/templates/rescues/_trace.html.erb (1.8ms)
  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.5/lib/action_dispatch/middleware/templates/rescues/_request_and_response.html.erb (1.5ms)
  Rendered vendor/bundle/ruby/2.1.0/gems/actionpack-4.1.5/lib/action_dispatch/middleware/templates/rescues/template_error.html.erb within rescues/layout (16.9ms)
```

<!-- more -->

# date.orderの指定

## 発生箇所

該当するソースコードはこちらです。  
ちなみに、i18nを無効化(`config.i18n.default_locale`を初期状態のようにコメントアウト)していると発生しません。

```
  <div class="form-group">
    <%= f.label :start_time %>
    <%= f.datetime_select :start_time, start_year: now.year, end_year: now.year + 1 %>
  </div>
```

エラーメッセージからすると、`ja.date.order`で翻訳に失敗しちゃったよテヘってなってるんで、ja.yml修正すれば良さそう。

## 解決策

2つあります。

[ここ](https://github.com/rails/rails/blob/a8eb6018318f65e34486da8d1860b3f0d774383d/guides/source/i18n.md#action-view-helper-methods)に書いてありますね。

> datetime_select also looks up the order option from date.order (unless you pass the option explicitly).

### ja.ymlに設定を追加

翻訳ファイルの修正です。

```yaml config/locals/ja.yml
ja:
  date:
    order: 
      - :year
      - :month
      - :day
```

なお、デフォルト(en)の場合は、activesupportの設定が適用されています。

### datetime_selectのoptionにorderを追加

datetime_selectに`order`というoptionを追加することで、ja.ymlの修正をしないで対応できます。   
優先順位は`ja.ymlで設定 < datetime_selectでoption指定`なので、必要があれば設定すればいいと思います。  

```
  <div class="form-group">
    <%= f.label :start_time %>
    <%= f.datetime_select :start_time, start_year: now.year, end_year: now.year + 1, order: [:year, :month, :day] %>
  </div>
```

