---
layout: post
title: "ヘルパーメソッドでHaml::Helpersを使う"
date: 2014-10-03 03:16:51 +0900
comments: true
categories: [haml]
---

HAMLのViewのヘルパーメソッドどう書くのかという話です。  
[Module Haml::Helpers](http://haml.info/docs/yardoc/Haml/Helpers.html)を使います。

<!-- more -->
普通にタグを書く分には`haml_tag`を使います。  
```rb
module ApplicationHelper
  def alert_close_icon
    haml_tag(:button, class: 'close', type: 'button', 'data-dismiss' => 'alert', 'aria-hidden' => 'true') do
      haml_concat '&times;'
    end
  end
end
```