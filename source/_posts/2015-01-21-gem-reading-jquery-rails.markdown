---
layout: post
title: "Gem Reading - jquery-rails"
date: 2015-01-21 23:14:52 +0900
comments: true
sharing: true
published: true
categories: [ruby]
---

簡単なやつから攻める。  
まずは読むことになれます。ということで、jquery-rails。

<!-- more -->

## 眺める

lib配下を見ても、これといったファイルないな〜と...

```sh
lib
├── jquery
│   ├── assert_select.rb
│   ├── rails
│   │   ├── engine.rb
│   │   └── version.rb
│   └── rails.rb
└── jquery-rails.rb

2 directories, 5 files
```

* engine.rb
    - Engin生成
* version.rb
    - 現在対応しているjqeruyのバージョンを定数で定義
* assert_select.rb
    - assert_select_jqueryというテストメソッドを提供してくれる

他はモジュール定義してたり、requireしてたり。

```sh
vendor/assets
└── javascripts
    ├── jquery.js
    ├── jquery.min.js
    ├── jquery.min.map
    ├── jquery2.js
    ├── jquery2.min.js
    ├── jquery2.min.map
    └── jquery_ujs.js
```

vendor/assets/javascriptsの中に一式揃ってますねー。  
そういえば、Rakefileあるじゃん。

```sh
rake build              # Build jquery-rails-4.0.3.gem into the pkg directory
rake install            # Build and install jquery-rails-4.0.3.gem into system gems
rake release            # Create tag v4.0.3 and build and push jquery-rails-4.0.3.gem to Rubygems
rake update_jquery      # Update jQuery versions
rake update_jquery_ujs  # Update jQuery UJS version
```

中を見てみると、build、install以外のコマンドが定義されてました。

`release` は `version.rb` と `vendor/assets/javascripts`にダウンロードしたファイルのバージョン番号比較チェックしている。  
`update_jquery` と `update_jquery_ujs` は `vendor/assets/javascripts` 下に該当するバージョンのファイルをcurlしてきている。  
`vendor/assets/javascripts` に全部突っ込んでしまっているんですね。  

jsはでかかったんで、ここまで。
