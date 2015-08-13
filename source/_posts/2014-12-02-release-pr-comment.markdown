---
layout: post
title: "Gem:pr-commentをリリース"
date: 2014-12-02 18:18:46 +0900
sharing: true
comments: true
categories: [ruby]
---

[pr-comment](https://rubygems.org/gems/pr-comment)というGemを作りました。

<!-- more -->

自分用に作ったスクリプトをGem化してみました。不満駆動開発。  
用途はターミナルでPull Requestのレビューとかコメントを見やすくするものです。  
中でoctokit呼び出して、結果を並び替えて表示しているだけです。  
使っているかというとうーん、ですね。  
一昨日ぐらいに実行したらちゃんと出ていないところがあったので直さないと。
テストもそうだけど、例外処理もずさんなんでそのへんも、含めてここ汚いとか雑とかもっとこうしろとかISSUEで鉞いただけると喜びます。  
デザインだけは見やすい案を随時募集中です。  

'競合プロダクトがあっても挫けずに自分の道を進んでもらえればなと思いました'といういただいた言葉を胸に刻んでちょっとずつ改善していきたい。  
  
# 使い方

一応使い方を。

```sh
prc all owner/repo pull-request-no
prc close owner/repo pull-request-no
prc open owner/repo pull-request-no

prc close yochiyochirb/kajaeru 83 # こんな感じで使う
```

# 感想

作りながら面白いGemや知識がちょこちょことありました。アプリケーションしか書いていないと気づかない`thor`や`simple-color`(こっちは使わなかったけど)などなど。  
今はgithubのtokenを手動で環境変数に設定しないといけないから、そこ直したいな。  
