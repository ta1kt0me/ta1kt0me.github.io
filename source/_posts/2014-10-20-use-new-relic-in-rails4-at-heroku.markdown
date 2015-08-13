---
layout: post
title: "herokuで動くRailsアプリケーションにNew Relicを入れる"
date: 2014-10-20 15:30:52 +0900
comments: true
categories: [ruby-on-rails]
---

Rails4アプリにNew Relicを入れます。  
herokuで動かす場合はadd-onとかの設定が必要でした。

[New Relicの本家](https://docs.newrelic.com/docs/agents/ruby-agent/installation-configuration/ruby-agent-installation)と[herokuのNew Relicの適用ページ](https://devcenter.heroku.com/articles/newrelic#ruby-configuration)が参考になります。

<!-- more -->

New Relicへの登録をすませると、手順ページが表示されていきます。

# New Relicの設定

## Choose your language

言語をRubyに選択します。

## Get your license key

Generate license keyを単にクリックするだけです。  
これで、newrelic.ymlをダウンロードできます。

## Install the New Relic agent with bundler

Gemfileの修正と、gemのインストールを実行します。

## Download newrelic.yml

license keyを生成すると、Donwload the newrelic.yml fileが有効になりますので、クリックしてファイルを取得します。
その後、`${APP_ROOT}/config/newrelic.yml`にダウンロードしたファイルを配置します。

## アプリ名の設定

newrelic.ymlにアプリ名を設定します。


```yaml config/newrelic.yml
common: &default_settings
...
  app_name: #{アプリケーション名}
...
```

## Postgles

postgresqlの場合は特殊な設定が必要になります。
なくても動きますが,New Relicの一部機能は動作しません。

```yaml config/newrelic.yml
common: &default_settings
  transaction_tracer:
    explain_enabled: false
```

## ローカルで確認

この状態でローカルで確認できます。  
ローカルがPostgresqlでなければ直前の対応は不要かもしれません。  

http://localhost:3000/newrelic

# herokuの設定

herokuではadd-onでnew relicと連携します。

## Add-onの設定

add-on追加のためにはクレジットカードの情報が必須です。
(無料プランがあります)

[New RelicのAdd-onページ](https://addons.heroku.com/newrelic)から設定を有効にしてください。

## 環境変数の設定

`heroku config`で設定を変更。

```sh
heroku config:set NEW_RELIC_APP_NAME="各自のアプリケーション名"
heroku config:set RACK_ENV=production
```

## 本番で確認

このままherokuへのpushが成功した後、数分してからNew Relicにアクセスすれば接続確認できます。
