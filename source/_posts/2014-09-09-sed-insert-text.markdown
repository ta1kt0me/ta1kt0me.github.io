---
layout: post
title: "sedで1行追加"
date: 2014-09-09 22:41:12 +0900
comments: true
categories: [unix]
---

Macでコマンドラインから指定した行にテキストを1行追加する方法です。  
sedコマンドを使ってやってみたら、エラーが発生しました。

<!-- more -->

`16i`は16行目に追加することを意味します。
`-i`をつけると、上書きになります。

```sh
$ sed -i -e "16i //= require bootstrap.min" app/assets/javascripts/application.js
=> sed: 1: "16i //= require bootstr ...": command i expects \ followed by text
```

あれ、16iがきいてない？
手持ちのUbuntuだとうまくいったんだけどな、と思って、もしやGnu-？

```sh
$ brew install gnu-sed
$ gsed -i -e "16i //= require bootstrap.min" app/assets/javascripts/application.js
```

成功！
