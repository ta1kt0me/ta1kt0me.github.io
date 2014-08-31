---
layout: post

title: jekyllでブログを作ってみた
date: 2014-04-20
comments: true
categories: [Blog]
---

JekyllとHerokuを使ってBlogを作成しました。  
サーバーにはUnicornを利用します。  
githubはprivate repositoryが有料なので、bitbucketを使用。  
せっかくなのでCIツールとして、werckerをお試しで。  
よくよく考えるとHeroku使うんならどっちも要らないがさておき。

***

# 事前準備

## アカウント作成

1. heroku
1. bitbucket(ついでにrepositoryも作成)
1. wercker

# jekyllインストール

jekyllのgemをインストールします。  
テンプレートとして、[jekyll-incorporated](https://github.com/kippt/jekyll-incorporated.git)を使ってみます。  
なかなかいい感じにデザインしてくれる。

{% highlight bash %}
> gem install jekyll
> git clone https://github.com/kippt/jekyll-incorporated.git blog
> cd blog
> git branch myblog
> git checkout myblog
{% endhighlight %}

***

# 環境設定

環境用のファイルを作成。  
heroku、wercker用の設定ファイルと、jekyllのmarkdownの設定をします。

{% highlight text %}
blog
├── Gemfile      # 必要なGemを追加
├── Gemfile.lock
├── Procfile     # heroku用
├── _config.yml
├── config.ru    # heroku用
├── unicorn.rb   # heroku用
...
└── wercker.yml  # wercker用{% endhighlight %}

## Gemfile

{% highlight ruby %}
+ gem 'rack-jekyll'
+ gem 'unicorn'{% endhighlight %}

## Procfile

{% highlight ruby %}
+ web: bundle exec unicorn -p $PORT -c ./unicorn.rb{% endhighlight %}

## \_config.yml

```yaml
- exclude:     []
+ exclude:     ["vendor"]
- markdown:      maruku
+ markdown:      redcarpet
+ redcarpet:
+     extensions: ["no_intra_emphasis"
+                  ,"fenced_code_blocks"
+                  ,"autolink"
+                  ,"tables"
+                  ,"with_toc_data"]
```

## config.ru

```ruby
+ require "bundler/setup"
+ Bundler.require(:default)
+ run Rack::Jekyll.new(:destination => '_site')
```

## unicorn.rb

```ruby
+ worker_processes 1
+ timeout 30
+ preload_app true
```
## wercker.yml

indentは半角スペース2つじゃないと怒られる。  
[ここ](http://devcenter.wercker.com/articles/werckeryml/validate.html)でフォーマットのチェックができて便利ですね。

{% highlight yaml %}
+ box: wercker/ruby
+ build:
+   steps:
+     - bundle-install
+     - script:
+         name: echo ruby information
+         code: |
+             echo "ruby version $(ruby --version) running!"
+             echo "from location $(which ruby)"
+             echo -p "gem list: $(gem list)"
+ deploy:
+   steps:
+   - heroku-deploy{% endhighlight %}

***

# Remote Repositoryにpush

ここまでの設定を保存します。
実際はちまちまコミットしちゃいました。  
ついでにherokuでアプリ作成。  

{% highlight bash %}
> bundle install
> git remote add bitbucket git@bitbucket.org:xxxx/jekyllblog.git
> git add .
> git commit -m 'initial commit for myblog'
> # bitbucketにpush
> git push bitbucket myblog
> # herokuに専用アプリ作成
> heroku create myblog{% endhighlight %}

ちなみに、ここでherokuにpushして、`heroku open`すれば確認できる。  
やっぱりこっちの方が楽なんじゃ...

***

# wercker

いよいよwercker試してみます。

## Add App

ここでは作業対象となるリポジトリを設定します。  
([ADD APPLICATION](https://app.wercker.com/#applications/create))

### Choose a Git provider

*bitbucket*を選択

### Select a repository

pushしたbranchを選択

### Add werckerbot

*read*権限だけつけて許可する

### Setup your wercker.yml

準備済み！

## My Apps

Add Appで登録したAppsを選択します。

### Settings

*Deploy targets*でHeroku APIキーの登録します。  
*Deploy target name*にheroku createしたアプリ名を設定します。

### Builds
Build Passが通ったら、*Deploy to*から**Settings**に設定したアプリ名を選択します。

***

# 動作確認

成功していればDeploysのデプロイ結果のURLからアクセス可能です。
(あるいは`heroku open`)

