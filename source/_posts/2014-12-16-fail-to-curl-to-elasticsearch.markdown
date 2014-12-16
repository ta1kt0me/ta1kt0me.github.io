---
layout: post
title: "localhostのelasticsearchにcurlしたらConnection refused"
date: 2014-12-16 19:13:11 +0900
comments: true
published: true
categories: elasticsearch
---

よっしゃ、試してみよう！と思って出鼻をくじかれた話し。  

elasticsearch使ってる方多いですよね！今関わっているPJでも使っているので、どんなものか試してみました。ところが起動確認で早速つまづく始末です。  

elasticsearchの起動確認するときに、curlを使ってみたらConnection refusedが発生しました。  
<!-- more -->

# 問題: curlしたらConnection refused

```sh
$ elasticsearch -d
$ curl -XPUT 'http://localhost:9200/test/'
curl: (7) Failed to connect to localhost port 9200: Connection refused
```

!?  

解決策は[こちら](http://stackoverflow.com/questions/22952676/curl-failed-to-connect-to-localhost-port-80)にありました。  

# 原因: IPv6使ってる

hostsファイル内の`::1 localhost`が有効になっていると、curlがIPv6でアクセスしてしまうらしい。  
何気ないところ見落としてました...

# 解決: IPv4使うようにする

`--ipv4`オプション使ってやる。

```sh
curl --ipv4 -XPUT 'http://localhost:9200/test/'
{"acknowledged":true}
```
