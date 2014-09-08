---
layout: post

title: 独自ドメイン設定
date: 2014-05-08
comments: true
categories: [Blog]
---

# 独自ドメイン設定の道程

せっかくなので独自ドメインでも設定してみよう。  
そうすれば否が応でも書かずにはいられないはず。  
有料だもの。現金な人間です。  

手順としてはこんな感じでした。

<!-- more -->

1. 独自ドメイン取得(お名前.com)
1. cloudflareで独自ドメインとherokuを紐付け
1. herokuに独自ドメイン設定
1. おまけ:google analyticsの設定

***

# 独自ドメイン取得

お名前.comで独自ドメイン購入。  
最近は.tokyoやら.redやらあるんですね。  
.comにしました。  
あらかじめ候補探しておきましょう。  
大体は使われています。
悩んでいると日が暮れます。

***

# cloudflare独自ドメインとheroku連携

wwwつけると入力手間だな〜っていう理由でルートドメインはしたくない。  
たまたま[こちらの記事](http://blog.jnito.com/entry/2014/05/04/090537)を見かけまして。  
cloudflareを利用することにしました。  
用途はブログを公開するだけだし、SSL利用するまでもなかったので無料プランで試してみました。  
使い切れてないですが、設定だけでもできたの良し。目的達成。  
設定完了後、whoisコマンドのName Serverの値がcloudflare用に変わります。  
反映されるのに待ちます。

***

# herokuに独自ドメイン設定

herokuアプリのSettingsのDomainsに独自ドメインを追加。  
これしないと、herokuの404画面が出てくる。

***

# google analyticsの設定

トラッキング情報のトラッキングコードを_google-analytics.htmlにコピペ。  
_config.ymlを以下の通り変更
```yaml
  analytics:
+    google: false 
+    google: true ```

夜明けに寝て夕暮れ時に目覚めても反映されてませんでした。  
気長に待ちましょう。  
  
  
どれも長い。

