---
layout: post
title: "bootstrap3のモーダル表示（HAMLサンプル）"
date: 2014-09-29 19:50:21 +0900
comments: true
categories: [bootstrap]
---

bootstrap3でModalウインドウを表示するサンプルです。
サンプルはHAML形式です。

<!-- more -->
呼び出しのボタンで、`data-toggle="modal"`と`data-target="#表示するモーダルのid"`を指定します。  
Modalは下のdiv構成で組むことで表示できます。  
`#task-modal`は呼び出すModalで設定したものを指定します。

```haml
/ Modalの呼び出し元になるボタン
%button.btn.btn-info.btn-lg.btn-block{data: {toggle: 'modal', target: '#task-modal'}}
  Create Modal Task

...(略)

/ 表示するModal
%div.modal#task-modal
  %div.modal-dialog
    %div.modal-content
      %div.modal-header
        %button.close{type:'button', data: {dismiss: 'modal'}}
          X
        %h4.modal-title
          TITLE
      %div.modal-body
        %p
          BODY
      %div.modal-footer
        %button.btn.btn-primary{type: 'button'}
          Save
```
