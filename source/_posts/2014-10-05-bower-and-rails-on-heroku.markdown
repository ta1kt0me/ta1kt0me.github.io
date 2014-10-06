---
layout: post
title: "RailsでBowerを使いHerokuにデプロイ"
date: 2014-10-05 22:35:42 +0900
comments: true
categories: [Ruby on Rails]
---

RailsアプリケーションでJavascriptプラグインの管理をgemに依存したくないなと思ったので、bowerなるものを試してみました。  

環境です。

* bower 1.3.12
* rails 4.1.6
* ruby 2.1.2
* heroku-buildpack-ruby-bower

今回は使いませんでしたが、bower-railsというgemの説明も最後に追記しています。

<!-- more -->

# Rails + bower + heroku + heroku-buildpack-ruby-bower

参考にしたのは[こちら](https://gist.github.com/afeld/5704079)です。  

## herokuに設定追加

```
heroku create app_name

bundle exec rake secret RAILS_ENV=production
=> 2d9dc90XXXXXXXXXXXXX...

# rake secretの結果を値として設定
heroku config:add SECRET_KEY_BASE=2d9dc90XXXXXXXXXXXXX...

heroku run bundle exec rake RAILS_ENV=production db:migrate

heroku config:set BUILDPACK_URL='git://github.com/qnyp/heroku-buildpack-ruby-bower.git#run-bower' 
```

## .gitignore修正

bowerでコンポーネントをインストールするパスを管理対象外に設定しておきます。

```rb .gitignore
/vendor/assets/components
```

## bowerでコンポーネント追加

npmでbowerをインストールします。

```sh
npm install bower
```

続いてRailsアプリケーションのルートパスでbowerの設定を追加します。

```json .bowerrc
{
  "directory": "vendor/assets/components",
  "json": "bower.json"
}
```

```json bower.json
{
  "name": "my application",
  "dependencies": {
    "moment": "latest"
  }
}
```

依存関係のあるコンポーネントをインストールします。

```sh
bower install
```

## Railsの設定

お好みでGemファイル追加(このあたりはbowerと関係ないですね)

```rb Gemfile
# このあたりはお好みで
gem 'unicorn', '~> 4.8.3'
gem 'pg', group: :production
gem 'rails_12factor', group: :production
```

```rb Procfile
web: bundle exec unicorn -p $PORT
```

```rb config/environments/production.rb
Rails.application.configure do
  config.assets.compile = true
end
```

bowerでインストールしたコンポーネントをassetsのパスに追加します。

```rb config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
```

## コンポーネントの読み込み設定

```js app/assets/javascript/application.js
...
//= require moment/moment
...
```

## 公開設定

最後に修正をherokuにpushします。

```sh
git add .
git commit
git push heroku master
```

# bower-rails

`bower-rails`というgemがあったのですが、herokuへのデプロイのところで色々はまったので、今回は見送りました。  
ローカルで試す分にはこのGemは非常に使いやすかったので、環境によっては導入すると良さそうです。  

こちらの基本的な使い方は以下です。

```sh
# Bowerfile作成
# rails g bower_rails:initialize json とすることで、bower.jsonを作成することも可能
bundle exec rails g bower_rails:initialize
=> アプリケーションルートに、Bowerfileが作成される

# Bowerfileの編集
echo "asset 'moment'" >> Bowerjson

# 依存関係の解決
bundle exec rake bower:install
=> vnedor/assets/bower_componentsにコンポーネントをインストール
```

上記に加え、`config/initializers/assets.rb`を修正することで利用できます。

```rb config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
```

BowerfileがGemfileのように簡単な形式で書けて、bower.jsonを動的に生成してくれるので、使いやすいですね。  


