---
layout: post
title: "Cucumber on Rails 入門1"
date: 2014-11-25 14:15:41 +0900
comments: true
categories: 
---

Railsでcucumberを動かしてみます。  
サンプルソースはこちらです。  
[ta1kt0me/cucumber-test](https://github.com/ta1kt0me/cucumber-test/tree/first-test)

cucumberを使うことになったので簡単なサンプルを作成してみます。  

| ライブラリ  | バージョン  |
| :---------: | :---------: |
| ruby        | 2.1.5       |
| rails       | 4.1.5       |
| cucumber    | 1.3.17      |

構成はこんな感じです。  

<!-- more -->

# Cucumberとは

Rubyで書けるインテグレーションテストのためのテストフレームワークの一つです。
Cucumber自体は、Railsに依存していないため、Sinatraのアプリでも使用可能です。

# 今回やること

!. cucumberのインストール
2. scaffoldで作成したアプリのトップページを表示するテストを書く

事前にscaffoldで適当なアプリを作成します。  
今回は以下のコマンドを実行しました。  
```sh
bundle exec rails g scaffold Book title:string author:string price:integer
```

# Cucumber

## 最低限覚えること

Cucumberのテストシナリオは、GherkinというDSLで書きます。  
今回はGherkinの一部だけを利用して簡単なテストを書きます。  
Gherkinについては、[こちら](http://blog.eiel.info/blog/2013/02/12/gherkin/)のサイトにわかりやすい解説があります。  
また、今回のサンプルですが[こちら](https://semaphoreapp.com/blog/2013/08/14/setting-up-bdd-stack-on-a-new-rails-4-application.html)のサイトの内容をもとに確認しています。

### 言葉

* Feature
    - 機能を表します。1つのファイルに1つだけ
* Scenario
    - テストのシナリオです
* When
    - ユーザーの動作を表します。リンクをクリックする、とか
* Then
    - Whenの結果どうなるか、を表します

階層構造としてはこうなります。

```
Feature: 機能A
    Scenario: シナリオ1
        When ユーザーがTopページにきた時
        Then タイトルにhogeが表示されている
```

### ファイル

* features/hoge.feature
    - テストのシナリオを書くところ
* features/step_definitions/hoge.rb
    - シナリオの動作を定義するところ

## インストール

### Gemfile変更 & install

```rb Gemfile
group :test do
  # gem 'cucumber' # githubのサンプルコードには入ってますが、いらないです。
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
end
```

```sh
bundle install
bundle exec rails generate cucumber:install
```

## シナリオを書く

今回はユーザーがトップページにいる時に、タイトル文字列'Listing books'が表示されていることを確認します。

```rb features/home_page.feature
Feature: Home page

  Scenario: Viwing application's home page
    When I am on the top page
    Then I should see the 'Listing books'
```

この時点でテストを実行するとエラーが出ます。
```
$ bundle exec rake cucumber
   Then I should see the 'Listing books'  # features/home_page.feature:5
      Undefined step: "I should see the 'Listing books'" (Cucumber::Undefined)
      features/home_page.feature:5:in `Then I should see the 'Listing books''

1 scenario (1 undefined)
2 steps (2 undefined)
0m0.005s

You can implement step definitions for undefined steps with these snippets:

When(/^I am on the homepage$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see the 'Listing books'$/) do
  pending # express the regexp above with the code you wish you had
end
```

`When`と`Then`で指定した動作（ステップ）が定義されてないことが原因です。

## ステップを定義する

シナリオに書いた`When`と`Then`のステップを定義します。  
文字列一致で挙動を設定します。  

```rb features/step_definitions/home_page_steps.rb
When(/^I am on the top page$/) do
  visit root_path
end

Then(/^I should see the '(.*?)'$/) do |title|
  assert page.body.scan(title).length > 0
end
```

もう一度実行します。  

```
$ bundle exec rake cucumber
eature: Home page

  Scenario: Viwing application's home page # features/home_page.feature:3
    When I am on the top page              # features/step_definitions/home_page_steps.rb:1
    Then I should see the 'Listing books'  # features/step_definitions/home_page_steps.rb:5

1 scenario (1 passed)
2 steps (2 passed)
0m0.081s
```

成功しましたね。  
rspecと組み合わせることでrspecの記法できるようなります。  
またcapybara-webkitやwebratと組み合わせることで、よりStepが簡単に実装できるようになると思います。  

# 課題

次はFactorygirlを使ってシナリオの前提条件となるGiveを使ってみます。  

しまった。cucumberの最初のcは大文字が正しいかもしれない...

