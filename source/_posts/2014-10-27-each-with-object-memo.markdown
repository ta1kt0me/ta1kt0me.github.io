---
layout: post
title: "each_with_objectの簡単な使い方"
date: 2014-10-27 18:50:07 +0900
comments: true
categories: [ruby]
---

each_with_objectの簡単な使い方。
使い方は気をつけないといけないですね。

<!-- more -->

```rb
[1,2,3].each_with_object(n=[]){|v| n << v + 5}
=> [6, 7, 8]
# nを初期化しないで処理
[1,2,3].each_with_object(n){|v| n << v + 5}
=> [6, 7, 8, 6, 7, 8]
[1,2,3].each_with_object(n){|v| n << v + 5}
=> [6, 7, 8, 6, 7, 8, 6, 7, 8]
# nをeach_with_objectで初期化
[1,2,3].each_with_object(n=[]){|v| n << v + 5}
=> [6, 7, 8]
# nをeach_with_objectの前に宣言
n = [10]
=> [10]
[1,2,3].each_with_object(n){|v| n << v + 5}
=> [10, 6, 7, 8]
```

