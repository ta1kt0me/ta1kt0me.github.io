---
layout: post
title: "i18nの設定でdatetime_selectの月表示がおかしい"
date: 2014-09-12 19:09:36 +0900
comments: true
categories: 
---

前記事に引き続き、i18nの対応です。  
これいっぱいありそう。  
datetime_selectで表示した`月`欄の表示が妙だ。

<!-- more -->

# ja.ymlにmonth_namesを追加

翻訳ファイルに`month_names`を追加しましょう。

```yaml config/locals/ja.yml
ja:
  date:
    order: 
      - :year
      - :month
      - :day
    month_names: [~, 1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月]
```

ちなみに月表示には省略形も存在します。(JanuaryだとJanとか)  
この時は`abbr_month_names`というものを使います。  
日本語だとそもそも表記が短いのであまり意味はないと思いますが、思わぬところでエラーが発生したらそちらを疑いましょう。  

これもactivesupportにenの設定はありました。  
曜日も同様なんでご注意を。
と思ったら、素晴らしいものがありました。

* https://github.com/svenfuchs/rails-i18n/blob/master/rails/locale/ja.yml
  * 各言語ごとにあるのでこれベースにするのがいいですね。
