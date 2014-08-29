---
layout: post

title: Railsでソーシャルログインボタン(Github)
subtitle: "use zocial-rails gem on RoR"
cover_image: blog-post-cover.jpg

excerpt: "RailsでGithub、twitter、facebookといったソーシャルのoauthログイン..."

author:
  name: talkto_me
  twitter: talkto_me
  gplus: 112523552085244928159
---

RailsでGithub、twitter、facebookといったソーシャルのoauthログインボタンを出したい人向けです。  

Githubのomniauth連携をした時に、専用のログインボタンを簡単に用意できないか探してみたところ、いい感じのGemがありました。  
さて、今回使用するのは[こちら](https://github.com/jeffleeismyhero/Zocial-Rails)

# 使い方

## インストール

Gemfileに書いて、bundle installします。

```ruby
gem 'zocial-rails'
```

## 導入

application.cssに以下を記述します。

```css
*= require zocial
```

## ボタン

elementのclassに、'zocial'と利用したいサービス(例では'github')を記述します。

```html
<a class="zocial github" href="/auth/github">Sign in with Github</a>
```

ちなみに、hamlの場合はこちら。

```haml
= link_to('Sign in with Github', '/auth/github', 	:class=> ['zocial', 'github'])
```
