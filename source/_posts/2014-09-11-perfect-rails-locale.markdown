---
layout: post
title: "RailsでLocaleを指定する"
date: 2014-09-11 15:34:56 +0900
comments: true
categories: [ruby-on-rails]
---

<a href="http://www.amazon.co.jp/gp/product/4774165166/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774165166&linkCode=as2&tag=pochan0919-22">パーフェクト Ruby on Rails</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=pochan0919-22&l=as2&o=9&a=4774165166" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />を、第6章からやってます。

RailsにおけるTimezoneの設定方法です。
`config/application.rb`で設定します。

<!-- more -->

# Timezoneの日時設定

Timezoneを指定した日時は、`Time.zone.nowe`で取得します。
デフォルトでは、`UTC`となります。

```rb rails console
irb(main):001:0> Time.zone.now
=> Thu, 11 Sep 2014 06:33:19 UTC +00:00
```

これを`JST`に変更するには、以下の修正をします。

```rb config/application.rb
module AwesomeEvents
  class Application < Rails::Application
    ...
    config.time_zone = 'Tokyo'
    ...
  end
end
```

```rb rails console
irb(main):003:0* Time.zone.now
=> Thu, 11 Sep 2014 15:33:47 JST +09:00
```

# time_zoneに設定できる値

`config/application.rb`の`config.time_zone`に設定できる情報を確認できます。

```sh
# time_zoneに設定できる値の一覧を表示
bundle exec rake time:zones:all

# 現在有効なtime_zoneの値を表示
# 設定していない場合、システムのタイムゾーンの値を表示
bundle exec rake time:zones:local
```

