---
layout: post
title: "Railsのexists?とfind_byはどっちが早いのか"
date: 2014-11-10 16:01:44 +0900
comments: true
categories: [ruby-on-rails]
---

Railsで特定するレコードが存在するかbooleanで取得したい時、

1. Table.exists?(a: id)
1. !!Table.find_by(a: id)

いずれのやり方のほうが処理が早いか計測してみました。

<!-- more -->

# ケース

環境は、`Rails 4.1.7`と`ruby 2.1.4`です。

* 1万件のレコードがあるVoteテーブルに対して、voting_user_idを検索条件に指定して該当するレコードがあるか確認する。
* Vote.voting_user_idにはIndexをつける
* 1万回問い合わせした時間で比較

1の場合、`Vote.exists?(voting_user_id: 1098)`  
2の場合、`!!Vote.find_by(voting_user_id: 1098)`

となります。

# 計測

計測してみました。Databaseはsqlite3です。

```rb
# 1.exists?のケース
Benchmark.realtime { 10000.times {|e|Vote.exists?(voting_user_id: 1098)}}
# SQL: SELECT  1 AS one FROM "votes"  WHERE "votes"."voting_user_id" = 1098 LIMIT 1
# => 6.658646

# 2.find_byのケース
Benchmark.realtime { 10000.times {|e|!!Vote.find_by(voting_user_id: 1098)}}
# SQL: SELECT  "votes".* FROM "votes"  WHERE "votes"."voting_user_id" = 1098 LIMIT 1
# => 5.506756
```

find_byのほうが早いんですね。取得結果の情報が多い分、find_byのほうがメモリは食ってそうなので、遅いかなと思ったら想像と逆の結果でした。

# Postgresqlで試してみる

アプリをHeroku+Postgresqlで動かす機会が多いので、ローカルのPostgresqlで試してみます。

```rb
# 1.exists?のケース
Benchmark.realtime { 10000.times {|e|Vote.exists?(voting_user_id: 1098)}}
# SQL: SELECT  1 AS one FROM "votes"  WHERE "votes"."voting_user_id" = 1098 LIMIT 1
# => 9.905989

# 2.find_byのケース
Benchmark.realtime { 10000.times {|e|!!Vote.find_by(voting_user_id: 1098)}}
# SQL: SELECT  "votes".* FROM "votes"  WHERE "votes"."voting_user_id" = 1098 LIMIT 1
# => 7.289921
```

やっぱり、find_byの方が早いのかー。
