---
layout: post
title: "Rails4でacts-as-taggable-on gemを使う"
date: 2014-10-04 03:40:31 +0900
comments: true
categories: [ruby-on-rails]
---

ユーザーに紐づくタスクに、タグ付けをするという機能を実現する方法です。  
`acts-as-taggable-on`というgemを利用することで簡単(苦戦した...)にタグ機能は実現できるそうです。  
なんとかできたっぽい...  

環境は、こんな感じです。

* Rails 4.1.6
* ruby 2.1.2p95
* acts-as-taggable-on 3.4.2

Githubの[README](https://github.com/mbleigh/acts-as-taggable-on#tag-ownership)を参考にしました

<!-- more -->

# Model

そもそもリレーション関係の設定でハマりましたが、これで良さそうです。  
関係としては`user 1-n task`となり、taskにタグを設定します。  
タグは、userごとに別々に管理します。  

```rb app/models/user.rb
class User < ActiveRecord::Base
  acts_as_tagger
  has_many :tasks, dependent: :destroy
  ...
end
```

```rb app/models/task.rb
class Task < ActiveRecord::Base
  acts_as_taggable
  belongs_to :user
  ...
end
```

# View

タグのところだけピックアップ。  
（簡単なサンプル作れば良かった）    
画面表示するController内のメソッドで、選択可能なタグを`@user_tags`に入れています。  
タグは複数選択可能にするため、checkboxを利用しました。  
checkbox生成でrailsの仕組みを利用しようとしたのですが、以下の2点を実現しようとしてうまいやり方が見つからなかった...  

* labelでクリック連携
* valueの値をタグの名前

form_for内に記述します。  

```haml app/views/tasks/_form.html.haml
/ @user_tagsはcontrollerで配列で設定 ex) => ["tag1", "tag2"]
- @user_tags.each do |tag|
  / tagを複数選択可能にするため、checkboxを利用
  %input{id:"tag-#{tag}" ,name:'task[tag_list][]', type:'checkbox',value:"#{tag}"}
  %label{for:"tag-#{tag}"}
    %span.task-tag
      = "#{tag}"
```

タグ付けよりもrailsでcheckbox使うところに時間とられた...宿題ですね。  

# Controller

リクエストのtask[tag_list]という値の中に、タグが含まれます。  
`permit`で、配列をチェックしたい場合は、`tag_list: []`と指定してあげる必要がありました。  

```rb app/controllers/tasks_controller.rb
class TasksController < ApplicationController
  ...
  def create
    # current_user => User.find(session[:user_id])
    @task = current_user.tasks.build(task_params)
    @task.user = current_user
    # tagの設定処理 :withには'tag1, tag2'という形式の文字列を設定することでタグを登録できる
    current_user.tag(@task, :with => @task.tag_list.join(', '), :on => :tags)
    if @task.save
      # 成功処理
    else
      # 失敗処理
    end
  end
  ...

  private
  def task_params
    params.require(:task).permit(
      # tag_list: []を指定することで、checkboxの複数の値を配列にして、tag_listに設定可能になる
      :id, :name, :deadline, tag_list: []
    )
  end
end
```

もしかしたらもっといいやり方があるかもしれません。  
気をつける場所はいくつかあるものの、意外と簡単かも。  

# 補足
## ユーザーが設定しているタグの一覧を取得する

```rb
@user_tags = current_user.owned_tag_list
=> ["tag1", "tag2"]
```