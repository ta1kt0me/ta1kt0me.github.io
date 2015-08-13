---
layout: post
title: "Sublime Text 3でEvernoteを使う"
date: 2014-11-03 22:19:35 +0900
comments: true
categories: [sublimetext3]
---

Sublime Text 3 を Evernoteのクライアントにする方法です。
以前にも試したのですが、使いやすいPackageがなかったので、見つかって嬉しい。

<!-- more -->

evernoteのアカウントを持っていることが前提です。

# 必要なPackage

[Evernote](https://sublime.wbond.net/packages/Evernote)

# 初期設定

## Token生成
Command Paletteから`Evernote Settings:Reconfigure Authorization`を選択。  
ブラウザが起動して、EvernoteのDeveloper Tokensページが開くので、Tokenを作る。  
生成した`Developer Token`と`NoteStore URL`を設定ファイルに書き込む。

## Evernote設定ファイル作成

Command Paletteから`Evernote Settings: User`を選択。

```json Evernote.sublime-settings
{
    "noteStoreUrl": "生成したNoteStore URL",
    "token": "生成したDeveloper Token"
}
```

以上でSublime Textでの設定は完了。

# 新規メモ作成

1. 新規ノートを作成
Command Paletteから`Evernote:  New empty note`を選択。  
`title`と`notebook`と`tags`を入力。
このままでは保存されません。
2. ノートを保存
Command Paletteから`Evernote:Send to Evernote as new note`を選択。  
これでevernoteに保存されます。
たまに、tokenを聞かれることがありますので、その時は、上のtokenを入力する必要があります。

# ノートを探す

とりわけ使いやすそうだったもの。
Command Paletteから入力します。  

* Evernote:Open Evernote Note
    * notebook > titleから使いたいノートを検索
* Evernote:List recent notes
    * 最近使ったノートを表示

