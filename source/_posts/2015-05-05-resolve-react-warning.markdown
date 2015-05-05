---
layout: post
title: 'Warning: Each child in an array or iterator should have a unique "key" prop.'
date: 2015-05-05 11:45:28 +0900
comments: true
sharing: true
published: true
categories: [react]
---

最近 reactをいじっています。

taskの配列をもつ、TaskListというコンポーネントの中で、TaskCardという子コンポーネントをループで回して生成しているところでwarningが発生した。

> Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of TaskList. See http://fb.me/react-warning-keys for more information.

<!-- more -->

ソースは↓

```coffee
@TaskList = React.createClass
  render: ->
    tasks = @props.tasks.map (task) ->
      `<TaskCard task={task}></TaskCard>`
    `<div className="list-group">
      { tasks }
    </div>
    `
```

`key` というユニークになる情報をコンポーネントに持たせろよと。
じゃぁ、と思って、task自体を設定した。


```coffee
@TaskList = React.createClass
  render: ->
    tasks = @props.tasks.map (task) ->
      `<TaskCard key={task} task={task}></TaskCard>`
    `<div className="list-group">
      { tasks }
    </div>
    `
```

そしたらこんなエラーが。

> Warning: flattenChildren(...): Encountered two children with the same key, `.$[object Object]`. Child keys must be unique; when two children share a key, only the first child will be used.

`index`なんかをもたせてあげないといけないらしい。

```coffee
@TaskList = React.createClass
  render: ->
    tasks = @props.tasks.map (task, i) ->
      `<TaskCard key={i} task={task}></TaskCard>`
    `<div className="list-group">
      { tasks }
    </div>
    `
```

`task`の`id`が一意になるなら、`task.id` としてもいいかも
