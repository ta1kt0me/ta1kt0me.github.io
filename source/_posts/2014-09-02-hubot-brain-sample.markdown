---
layout: post
title: "Hubotでデータを保存する"
date: 2014-09-02 20:38:53 +0900
comments: true
categories: [coffeescript]
---

hubotでデータを永続的に保存するためにはredisとの連携が必要です。

<!-- more -->

# 使い方

redisとセットで使うので、redisを起動しておくことを忘れずに。  
herokuで使いたい場合は、addonが必要になります。

```coffeescript
module.exports = (robot) ->
  robot.hear /janga/i, (msg) ->

  # データ取得
  jangajan = robot.brain.get('janga')

  # データ更新
  robot.brain.set('janga', jangajan)

  # データ保存 - redis起動してないと保存できない
  robot.brain.save()

  # データの保存場所
  console.log robot.brain['data']
  # => { users: { '1': { id: '1', name: 'Shell', room: 'Shell' } },
  #     _private: { janga: [ [Object] ] } }
```

実際には`_private`というキーの値として保存されています。  
あまりよくはないけれど、`robot.brain['data']['_pravate']['janga']`で取得することもできます。



