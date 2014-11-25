---
layout: post
title: "use-cucumber-2"
date: 2014-11-26 00:01:19 +0900
comments: true
categories: 
---

<a href="{{ root_url }}{% post_url 2014-11-25-use-cucumber %}">前回</a>
に引き続き簡単なCucumberのテストケースを作ります。

サンプルソースはこちらです。  
[ta1kt0me/cucumber-test](https://github.com/ta1kt0me/cucumber-test/tree/forth-test)

| ライブラリ  | バージョン  |
| :---------: | :---------: |
| ruby        | 2.1.5       |
| rails       | 4.1.5       |
| cucumber    | 1.3.17      |

<!-- more -->

# 今回やること

1. `given`を使う
2. `and`を使う
3. `background`を使う
4. 1つのシナリオにWhen-Thenを複数回書く

# given

givenを利用して、テストデータの投入を行います。  
Factory Girl使います。

```rb Gemfile
group :test do
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'factory_girl_rails' # 追加
end
```

```
$ bundle
$ bundle exec rails g factory_girl:model Book title:string author:string price:integer
```

```rb features/home_page.feature
  ...
  Scenario: Viwing application's home page
    # 追加
    Given there's a book titled 'Alice\'s Adventures in Wonderland' with 'Lewis Carroll' author, '1000' yen
    When I am on the top page
    ...
```

```rb features/step_definitions/home_page_steps.rb
# 追加
Given(/^there's a book titled '(.*?)' with '(.*?)' author, '(\d+)' yen$/) do |title, author, price|
  @book = FactoryGirl.create(:book, title: title, author: author, price: price)
end
...
```

(自分用メモ:改善点)
シングルクォートで囲まないでもいいかも。  
テストケース内で利用しない限りあえてインスタンス変数にする必要もないなー。  


# and

続いてand。これは簡単です。  

```rb features/home_page.feature
    ...
    Then I should see the 'Listing books'
    And  I should see the 'Alice\&#39;s Adventures in Wonderland'
```

応用きくやつです。

# background

シナリオの前に複雑な操作や処理をしたい場合に有効です。  
Bookの作成ページをテストするシナリオの前段として、トップページを表示する操作をbackgroundで書いてみます。  
なお、このシナリオではリンク・ボタン操作やフィールド入力をするので、便利なcapybara-webkitを導入します。  

```rb
group :test do
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'capybara-webkit' # 追加
end
```

```
$ bundle
```

新しいシナリオ、new_page.featureを作ります。

```rb features/new_page.feature
Feature: New Page

  Background:
    Given I go to the top page

  Scenario: Adding New Book
    When I click 'New Book' link
    Then I should see the 'New book'
```

```rb features/step_definitions/new_page_steps.rb
Given(/^I go to the top page$/) do
  visit root_path
end

When(/^I click '(.*?)' link$/) do |link_name|
  click_link(link_name)
end
```

# 1つのシナリオにWhen-Thenを複数回書く

new_page.featureを完成させましょう。

1. 'New Book'リンクを押したら、'New Book'タイトルが表示される
2. 'Title','Author','Price'を入力して、'Create Book'ボタンを押したら、'Book was successfully created.'というメッセージと入力した内容が表示される

というシナリオを作ります。

```rb features/new_page.feature
  ...
  Scenario: Adding New Book
    When I click 'New Book' link
    Then I should see the 'New book'
    When I fill in 'Title' with 'Star Wars'
    And I fill in 'Author' with 'George Walton Lucas, Jr'
    And I fill in 'Price' with '2980'
    And I click 'Create Book' button
    Then I should see the 'Book was successfully created.'
    And I should see the 'Star Wars'
    And I should see the 'George Walton Lucas, Jr'
    And I should see the '2980'
```

```rb features/step_definitions/new_page_steps.rb
...
When(/^I click '(.*?)' button$/) do |button_name|
  click_button(button_name)
end

When(/^I fill in '(.*?)' with '(.*?)'$/) do |field, value|
  fill_in(field, with: value)
end
```

capybara-webkitですが、[チートシート](https://gist.github.com/zhengjia/428105)があるので有効活用しましょう。

stepsで定義した操作は共通化してあげると良いですね。
