---
layout: post
title: "create-werkcer-step"
date: 2015-02-01 14:43:21 +0900
comments: true
sharing: true
published: false
categories: 
---

werckerのstepを作ってみたので手順の紹介

サンプルは[こちら](https://github.com/ta1kt0me/copy_profile)。

<!-- more -->

README.mdに書いてあることが全てです。

## we should do for creating wercker step

### create files

- $ROOT/wercker-step.yml
    + name
        * step名になる
    + version
        * 変更を公開したい時+1しないとdeploy時にエラー

- $ROOT/run.sh
    + stepの処理内容を記載する

### wercker setting

- `deploy`先に`Wercker directory`を指定する

## usage step

```wercker.yml
steps:
    - talktome/copy-file@0.0.7 # 'copy-file'はwercker-step.ymlのnameと同じ
```

わからなかったら、werckerのstepメニューから検索すると設定すべき値がわかります。

