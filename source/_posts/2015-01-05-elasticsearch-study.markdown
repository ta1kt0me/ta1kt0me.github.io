---
layout: post
title: "elasticsearch study 2"
date: 2015-01-5 20:33:40 +0900
comments: true
sharing: true
published: false
categories: [elasticsearch]
---

仕事で使っているので、elasticsearchとは、どう使うのかというところを学んでいきます。  
とりあえず、[Getting Start](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/getting-started.html)こなしていきます。

<!-- more -->

## Elasticsearchって？

REST APIでアクセスする、スケーラブルなオープンソースのテキスト検索・解析エンジンです。
elasticsearchはindexのデータベース(スキーマレスなデータベース)を持っていて、それに対してREST API経由でアクセスしていきます。  

## どうやって使うの？

@@@インストール方法・起動方法の記事を準備@@@  
以下に、REST APIを利用した場合のindexのデータベースへのアクセス方法を示します。  
が、その前に用語を3つだけRDBにたとえてみます。  

| 用語     | 意味                      |
| :--      | :--                       |
| index    | RDBでいうところのDatabase |
| type     | RDBでいうところのTable    |
| document | RDBでいうところのRecord   |

### indexを作成

今回はコマンドライン上から、curlコマンドを使ってelasticsearchにアクセスしていきます。

```sh
# customerというindexをhttpリクエストで作成
$ curl -XPUT 'localhost:9200/customer?pretty'
# 標準出力の結果
{
  "acknowledged" : true
}
```

* `curl`コマンドを利用してhttpのリクエストを投げる
* `-X`オプションで`PUT`メソッドを利用する
* `pretty`は出力結果を整形してくれるだけなので、つけなくても問題ない
* レスポンスはJSON形式です。

さて、次はindexができたか確認してみます。

### indexの一覧を取得

以下のコマンドでindexの一覧を取得します。単に情報を取得する場合は`GET`メソッドを利用します。REST APIですね。

蛇足ですが、`curl: (7) Failed to connect to localhost port 9200: Connection refused`が発生する場合、`--ipv4`をつけてみてください。

```sh
$ curl -XGET 'localhost:9200/_cat/indices?v'
```

一覧の中に`customer`がいれば、indexの作成成功です。  
続いて実際のデータとなるdocumentを登録してみましょう。

### documentを登録

登録するdocumentは以下です。

| キー | 値       |
| :--: | :--:     |
| name | John Doe |


```sh
$ curl -XPUT 'localhost:9200/customer/external/1?pretty' -d '
quote> {
quote>   "name": "John Doe"
quote> }'
```

* urlは`/customer/external/1`と指定します。
    - `customer`はindexですね。
    - では次の`external`はなんでしょうか。これが、typeです。個人的にはtableというより、一般的なカテゴリーに近いのかなって気がします。
    - 最後の`1`はdocumentのIDです。つけないやり方もあります。
* `-d`オプション(-data)でdocumentのデータを連想配列形式で記述します。

ではdocumentが登録できたのか確認してみましょう。

### documentを取得

indexの一覧の取得方法と、documentの登録方法から、URLの意味は汲み取れると思います。`customer`indexの`external`typeのIDが`1`のdocumentを取得する(`GET`)というリクエストです。 

```sh
$ curl -XGET 'localhost:9200/customer/external/1?pretty'
# 標準出力の結果
{
  "_index" : "customer",
  "_type" : "external",
  "_id" : "1",
  "_version" : 1,
  "found" : true,
  "_source":
    {
      "name": "John Doe"
    }
}
```

* documentが見つかると、`found`は`true`
* 取得したdocumentの内容は`_source`をキーにした連想配列

無事に取得できました！でも、登録したdocumentの内容が間違っていました。よくあることですね、直しましょう。

## documentを更新

更新のリクエストはdocumentを登録する時と、`name`の値以外全て一緒です。

```
$ curl -XPUT 'localhost:9200/customer/external/1?pretty' -d '
quote> {
quote>   "name": "Jane Doe"
quote> }'
{
  "_index" : "customer",
  "_type" : "external",
  "_id" : "1",
  "_version" : 2,
  "created" : false
}
```

* すでに存在するdocumentに対する`PUT`の場合は
    - `_version`が+1
    - `created`が`false`

もう一度、documentを取得してみてください。documentが更新されていることを確認できると思います。イエイ。

ところが、登録したdocument、実はいらないデータでした。消しましょう。

## documentを削除

削除の時は`DELETE`メソッドを使います。

```
$ curl -XDELETE 'localhost:9200/customer/external/1?pretty'
{
  "found" : true,
  "_index" : "customer",
  "_type" : "external",
  "_id" : "1",
  "_version" : 2
}
```

documentを取得してみてください。存在しないため、`found`が`false`担っているともいます。

実際にリクエストを投げながら使うことで、elasticsearchに、どうアクセスして、どんな結果が返ってくるのかイメージできてきたと思います。

次はRubyでの使い方を見てみましょう。
