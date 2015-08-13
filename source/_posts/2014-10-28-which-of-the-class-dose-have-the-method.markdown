---
layout: post
title: "Rubyでメソッドを定義しているクラスを調べたい"
date: 2014-10-28 05:55:25 +0900
comments: true
categories: [ruby]
---

メソッドを定義していくクラスを探る方法です。

<!-- more -->

# 定義しているClassを知りたい

クラス名だけを知りたいのであれば`Method#owner`を利用します。

```rb
# singleton method
String.method(:try_convert).owner
=> #<Class:String>

# instance method
"s".method(:method_missing).owner
=> BasicObject
```

# もうちょっと詳しい情報が知りたい

`Method#inspect`を使うともう少し詳しい情報を取得できます。
といってもそんなに大きく変わりません。

```rb
# singleton method
String.method(:try_convert).inspect
=> "#<Method: String.try_convert>"

# instance method
"s".method(:method_missing).inspect
=> "#<Method: String(BasicObject)#method_missing>"
```

当たり前の話ですが、特異メソッド(クラスメソッド、singleton method)は継承されないですね。
どいうことかというと、DateTimeクラスでは、Dateクラスの得意メソッドを呼び出せない、ということに気付かされました。
クラスメソッドに対してownerとかするの意味ねぇ。

# 定義している場所を知りたい

1.9以降(1.9.3?)では`Method#source_location`というメソッドで、メソッドの定義された具体的な場所の情報が分かります。
ただし、取得できるのはrubyで定義されたものに限るようです。
(ネイティブで定義されているメソッドの場合nilになる)

```rb
# singleton method
ActiveRecord::Base.method(:where).source_location
=> ["#{APP_ROOT}/vendor/bundle/ruby/2.0.0/gems/activerecord-4.0.2/lib/active_record/querying.rb", 7]

# instance method
"".method(:blank?).source_location
=> ["#{APP_ROOT}/vendor/bundle/ruby/2.0.0/gems/activesupport-4.0.2/lib/active_support/core_ext/object/blank.rb", 92]

# ネイティブで定義されたメソッドはnilを返す
"s".method(:method_missing).source_location
=> nil
```
