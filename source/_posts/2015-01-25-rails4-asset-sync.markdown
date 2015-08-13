---
layout: post
title: "Rails4でasset_syncを使ってみる"
date: 2015-01-25 11:22:24 +0900
comments: true
sharing: true
published: false
categories: [ruby-on-rails]
---

asset_syncというGemを使って、assetsをS3上から参照してみます。

<!-- more -->

こちらの記事を参考にさせていただきました。  
http://cohakim.com/archives/5671

# やること

* create S3 instance
* install asset_sync gem 
* execute `rails generate asset_sync:install --provider=AWS`
* update config/environments/*.rb
* update config/initializers/asset_sync.rb
* execute `rake assets:precompile`
* commit `public/assets/manifest-*.json`
* execute `rake assets:sync`

