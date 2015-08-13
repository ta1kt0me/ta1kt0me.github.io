---
layout: post
title: "vimのcolorschemeの設定でエラー"
date: 2015-03-15 01:15:11 +0900
comments: true
sharing: true
published: true
categories: [vim]
---

思うところがあって、sublime textからvimにエディタを乗り換えようとしているところです。
vimrcを見直している途中で、最新版を入れてpluginのupdateとかしていたら、以下のエラーが発生してcolorschemeが反映されなくなってしまった。

<!-- more -->

```sh
Error detected while processing /Users/hoge/.vimrc:
line  144:
E185: Cannot find color scheme 'railscasts'
Press ENTER or type command to continue
```

設定箇所を見てみると、こんな感じ。

```vim
colorscheme railscasts
```

え、全然問題なさそう...と思って、vim上でコマンドを実行してみると、ちゃんと適用された...なにこれ。

パッケージ管理にNeoBundleを使用しているのですが、エラーメッセージで検索したら、[GitHubにこんなコメント](https://github.com/altercation/vim-colors-solarized/issues/104#issuecomment-71037368)が。

```vim
call neobundle#end()

colorscheme railscasts
```

無事themeが適用されました。
