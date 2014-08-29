---
layout: post

title: Warning on navigation barnavigation bar
subtitle: "Xcode5.1の警告Navigation Barでの警告"
cover_image: blog-post-cover.jpg

excerpt: "警告：unsupported configuration plain style unsupported in a navigation item"

author:
  name: talkto_me
  twitter: talkto_me
  gplus: 112523552085244928159
---

storyboardでnavigation barの右側にbackとは異なるボタンを配置したら下の警告が出た。

> unsupported configuration plain style unsupported in a navigation item

Buttonではなく、Bar Button Itemを使うのが正しいんですね。

* 参考
  * [stackoverflowの回答欄](http://stackoverflow.com/questions/8531972/unsupported-configuration-plain-style-unsupported-in-a-navigation-item)
