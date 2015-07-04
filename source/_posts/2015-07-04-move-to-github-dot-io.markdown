---
layout: post
title: "HerokuからGitHub Pagesにブログを移行した"
date: 2015-07-04 18:16:55 +0900
comments: true
sharing: true
published: true
categories: [blog, jekyll]
---

Jekyllとoctopressで作っているブログをHerokuからGitHub Pagesに移行した(つもり)。この記事が見えていればできているはず。
<!-- more -->

やったことはこんな感じ。

1. github.ioのリポジトリを作成
2. `github-pages` gemのインストールと不要なgemのアンインストール
3. `bundle exec rake setup_github_pages`を実行
4. `bundle exec rake deploy`を実行
5. cloudflareのDNSの設定をHerokuからGitHab Pagesに変更

github.ioのリポジトリを作った時に、`rake setup_github_pages`を実行する前にGitHub Pagesのリポジトリにpushしちゃって、`rake deploy`を実行する前に`push`コマンドに`-f`オプションつけたりした。(ちゃんと後で元に戻した)
5の時に、CNAMEを設定したファイルが必要になるんだけど、プロジェクトホーム直下において`rake deploy`しても反映されない...
実は、プロジェクトホーム直下に`_deploy`というディレクトリができて、そこがGitHub Pagesのリポジトリと同期とることになることに気がついてややこしいなって思った。
とりあえず移行できてよかった〜。この記事が見れていれば...!!!

