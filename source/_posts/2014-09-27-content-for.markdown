---
layout: post
title: "ページ単位のjavascriptにcontent_forを使う"
date: 2014-09-27 04:14:07 +0900
comments: true
categories: ruby-on-rails
---

ページ単位で特定のjavascriptを実行させたい時に、content_forを使えばいいんだね、という結論でした。  

<!-- more -->

# javascriptをページごとのファイルに書けない理由

そもそもbootstrapで作成したコンテンツにこんな記載がありました。
hamlでyatiのテーマを適用しています。

```haml app/views/layouts/application.html.haml
/ ...ページ最下部
      = yield
/
  Javascripts
  \==================================================
/ Placed at the end of the document so the pages load faster
= javascript_include_tag "yeti"
= yield(:page_javascript) if content_for?(:page_javascript)
```

各ページのコンテンツは、`= yield`に埋め込まれます。  
しかし、`= javascript_include_tag "yeti"`という処理でJavascriptの定義を追加するため、各ページのhamlにjavascriptを書くとjQueryの処理が動きません。  
そこで、`= yield(:page_javascript) if content_for?(:page_javascript)`を利用します。

# content_forの使い方

各ページのhamlの下部でcontent_forを利用することにより、application.html.hamlの`= yield(:page_javascript) if...`のところに出力されます。

```haml app/views/tasks/new.html.haml
- content_for :page_javascript do
  :javascript
    jQuery('#datetimepicker').datetimepicker();

```

なので、ページごとのjavascriptは`content_for :page_javascript`を利用して書くようにしましょう。
