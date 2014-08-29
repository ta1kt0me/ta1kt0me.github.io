---
layout: post

title: Github APIを使いやすくするoctokitを触ってみる
subtitle: "use octokit to get repos contributors"
cover_image: blog-post-cover.jpg

excerpt: "GithubのAPIを使いやすくしてくれるoctkitに..."

author:
  name: talkto_me
  twitter: talkto_me
  gplus: 112523552085244928159
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

