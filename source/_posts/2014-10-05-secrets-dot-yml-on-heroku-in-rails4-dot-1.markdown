---
layout: post
title: "Rails4.1でherokuへのデプロイに失敗(Missing `secret_key_base`)"
date: 2014-10-05 01:14:13 +0900
comments: true
categories: [ruby-on-rails]
---
Rails4.1でherokuへのデプロイに失敗(Missing `secret_key_base`)

Rails4.1から`secrets.yml`がサポートされました。  
これの扱いが良くわかっていなかったため、heroku push後、以下のエラーが発生してアプリ起動に失敗しました。

> app error: Missing `secret_key_base` for 'production' environment, set this value in `config/secrets.yml` (RuntimeError)

<!-- more -->
# 解決策

ちなみに、heroku create済みです。

## secrets.ymlをgitで管理する
`.gitignore`に`/config/secrets.yml`を含めてしまっている場合は、削除してください。  
その後、git管理化におくため、commitします。

productionの`secret_key_base`は環境変数から取得するようになっているため、herokuの環境変数に`SECRET_KEY_BASE`を設定する必要があります。

## 環境変数SECRET_KEY_BASEを設定する

やり方が２通りあります。

### heroku_secretsを使う

この方法では、[heroku_secrets](https://github.com/alexpeattie/heroku_secrets)というgemを利用することでherokuコマンドを打つ必要はありません。

#### gemのインストール

Gemfileにgemを追加して、bundle updateを実行します。  

```rb Gemfile
gem 'heroku_secrets', github: 'alexpeattie/heroku_secrets'
```

#### rakeコマンドを実行

その後、rakeコマンドを実行します。

```sh
bundle exec rake heroku:secrets[app-name] RAILS_ENV=production
```

もう一つの方も作業量としては変わらなそうですね。

### heroku configで環境変数を設定する

この方法では、heroku config:add で環境変数を直接設定します。

#### 設定値を作成する

環境変数に設定する値を取得します。

```sh
bundle exec rake secret RAILS_ENV=production
```

#### herokuの環境変数を設定する

上記の実行結果を値とした環境変数(SECRET_KEY_BASE)を設定します。

```sh
heroku config:add SECRET_KEY_BASE=rake secretの実行結果
```

