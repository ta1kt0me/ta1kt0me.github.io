---
layout: post

title: Github APIを使いやすくするoctokitを触ってみる
date: 2014-08-18
comments: true
categories: [Ruby]
---

GithubのAPIを使いやすくしてくれるoctokitに触ってみました。試すのはcontributorsの一覧の取得です。

```ruby
gem 'octokit'
```

```ruby
require 'octokit'

client = Octokit::Client.new access_token: 'xxx'
client.contributors_stats('rails/rails').sort{|a,b| b[:total] <=> a[:total]}.map {|member|
	p member[:author][:login]
}
```
access_tokenを利用した方式で試していますが、LOGIN IDとパスワードにも対応しています。

