---
layout: post

title: RailsアプリケーションでGithub連携
subtitle: "rails with omniauth-github."
cover_image: blog-post-cover.jpg

excerpt: "Railsアプリケーションにomuniauth-githubを利用したGithubログイン..."

author:
  name: talkto_me
  twitter: talkto_me
  gplus: 112523552085244928159
---

Railsアプリケーションにomuniauth-githubを利用したGithubログイン連携機能を追加する方法を調査しました。
作業の概要は↓の通りです。

1. Githubで連携キーの発行
1. 連携キーの環境変数設定
1. Railsアプリケーションの作成
1. ログインに使用するModel、Controllerの生成
1. ホーム画面にGithubログインのリンクを作る

それでは始めます。

# Github連携準備("Client ID" & "Client Secret"作成)

まず、連携に必要な情報を取得します。

## Githubのアプリケーション登録

Githubの設定画面 -> Application -> Developer applications の Register new applicationボタンをクリック。  
次の情報を環境に合わせて設定してください。設定したらRegister Applicationボタンを押すのを忘れずに。

* Application name
	* sample
* Authorization callback URL
	* http://localhost:3000/
* Application description
	* アプリの説明
* Authorization callback URL
	* http://localhost:3000/auth/github/callback
	* ここ大事。config/routes.rbに設定するcallbackメソッドのURLを記載

## 連携キーを環境変数に設定

今回は、連携情報を環境変数から取得してGithubログインを実現します。  
上の手順で取得したClient IDとClient Secretを、以下コマンドで環境変数に設定してください。

```sh
export GITHUB_KEY=#{GithubのClient ID}
export GITHUB_SECRET=#{GithubのClient Secret}
```

# サンプルアプリケーション作成

## Railsアプリケーション作成

タイトル通りです。

```sh
bundle exec rails new SampleApp;cd SampleApp
bundle install --path vendor/bundle
```

## add Gem for omniauth-github

次に、Githubログイン連携に必要なGemをインストールします。

```ruby
gem 'omniauth'
gem 'omniauth-github'
```

```sh
bundle install --path vendor/bundle
```

## initializer for omniauth 

環境変数から連携情報を取得する処理を記載します。
アプリ起動時に読み込むようにするため、config/initializersディレクトリ配下に作成します。

* 新規
	* config/initializers/omniauth.rb

```ruby
Rails.application.config.middleware.use OmniAuth::Builder do
	provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
end
```

## create user model

Githubログインで登録するユーザー情報のModelです。providerとuidは多分必須です。
まずはrailsコマンドからModelを生成します。

```sh
bundle exec rails g model user provider:string uid:string name:string
```

次に、連携時に取得したデータから必要な項目をModelに設定します。

* 編集
	* app/models/user.rb

```ruby
 class User < ActiveRecord::Base
	def self.create_with_omniauth(auth)
		create! do |user|
			user.provider = auth["provider"]
			user.uid      = auth["uid"]
			user.name     = auth["info"]["nickname"]
		end
	end
 end
```

## create session controller

Modelができたので、次は連携処理に使うControllerの作成です。

```sh
bundle exec rails g controller sessions
```

追加するのは、Github連携後のcallback処理と、ログアウト時にSessionを破棄する処理です。

* 編集
	* app/controllers/sessions_controller.rb

```ruby
 class SessionsController < ApplicationController
	def callback
		auth = request.env['omniauth.auth']
		user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
		session[:user_id] = user.id
		redirect_to root_path
	end

	def destroy
		reset_session
		redirect_to root_path
	end
 end
```

それからルーティング設定を追加します。

* 編集
	* config/routes.rb

```ruby
  get "/auth/:provider/callback" => "sessions#callback"
  get "/signout" => "sessions#destroy"
```

## login helper method

ログイン状態の判定に利用するヘルパーメソッドを追加します。

* 編集
	* app/controllers/application_controller.rb

```
	helper_method :current_user

	private
		def current_user
			@current_user ||= User.find(session[:user_id]) if session[:user_id]
		end
```

## create home view

最後に連携用のリンクをテストする画面を用意します。

```sh
bundle exec rails g controller home index
```

* 編集
	* config/routes.rb

```ruby
  get 'home/index'
  root to: 'home#index'
```

ヘルパーメソッドを利用して、ログインリンクと、ログアウトリンクの出し分けを行います。

* 編集
	* app/views/home/index.html.erb

```erb
<% if current_user %>
<%= link_to "Sign out", "/signout" %>
<% else %>
<%= link_to "Sign in with GitHub", "/auth/github" %>
<% end %>
```

