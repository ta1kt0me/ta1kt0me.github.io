---
layout: post
title: "ForbiddenAttributesErrorが発生"
date: 2014-09-24 02:33:27 +0900
comments: true
categories: 
---

Rails4で、ForbiddenAttributesErrorが発生した場合の対応です。  

# ActiveModel::ForbiddenAttributesError発生

次のようなエラーが発生しました。

```sh
ActiveModel::ForbiddenAttributesError (ActiveModel::ForbiddenAttributesError):
  app/controllers/posts_controller.rb:13:in `create'
```

13行目が悪さをしているらしい...

```rb app/controllers/posts_controller.rb
def create
  @feed = Feed.new(params[:post]) # 13行目
  ...
end
```


<!-- more -->

これはmass assignmentの問題を解決するために、Rails4から標準で導入された対応により発生しました。  
mass assignmentとはsubmitしたデータから簡単にModelを作ることができるRailsの仕組みです。  
しかし、意図しないパラメータも含んだ状態でModelが作られるという脆弱性のため、このようなエラーが発生するようになりました。  
mass assignmentの問題とその対策についての詳細な説明は[Rails4.0に含まれる strong_parameters について](http://www.willnet.in/48)を参考にしてください。

# 対応

## Model作成に必要なsubmitデータを指定する方法

Model作成に必要なsubmitデータを明示的に指定し、チェックする方法です。
permitメソッドを使うことで、submitデータを絞り込みます。

```rb app/controllers/posts_controller.rb
def create
  @feed = Post.new(post_params)
  ...
end

private

def post_params
  # submitしたデータのうち、Model作成に必要なものを
  # permitの引数に指定する
  params.require(:params).permit(
    :title, :body
  )
end
```

## エラーを発生させない方法

こちらはmass assignmentの問題を解決していないため、お勧めしません。  
pertmitメソッドを通さず、全てのsubmitデータを利用します。

```rb config/application.rb
  class Application < Rails::Application
    # デフォルトはfalseに設定されている
    config.action_controller.permit_all_parameters = true
  end
```

# エラー発生場所

`ActiveModel::ForbiddenAttributesError`は次の処理で発生します。

* ActiveModel::ForbiddenAttributesProtection#sanitize_for_mass_assignment(attributes)

上述のpermitメソッドを実行することで、データはチェック済みの状態になります。  
このチェック済み状態を確認するのが、`sanitize_for_mass_assignment`の役割です。  
permitメソッドは`ActionController::Parameters`に定義してあります。 

# 未チェックのsumitデータがあった場合の対応

未チェックのsubmitデータがあった場合の挙動をコントロールできます。  
`config.action_controller.action_on_unpermitted_parameters`を使います。

## エラーにする

```rb config/application.rb
  class Application < Rails::Application
    config.action_controller.action_on_unpermitted_parameters = :raise
  end
```

## ログに出力する

```rb config/application.rb
  class Application < Rails::Application
    config.action_controller.action_on_unpermitted_parameters = :log
  end
```

出力結果はこうなります。
```sh 
Unpermitted parameters: hogehoge
```