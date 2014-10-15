---
layout: post
title: "Rspecメモ"
date: 2014-10-14 18:00:00 +0900
comments: true
categories: [rspec]
---

rspecの学習中です。

<!-- more -->
# rspecのワークショップ

以下のチュートリアルでrspecの学習をした時のメモです。   

http://d.hatena.ne.jp/t-wada/20100228/p1    
http://qiita.com/jnchito/items/624f6d5023c279046a1c


# describeとcontextとit
* `describe`は対象を説明
* `context`は状況を説明
* `it`は試験内容を説明
* `it`内に具体的な試験を記述
* `it`の引数の説明を省略しても試験内容をrspecが判断して仕様記述を組み立てる
* 読みやすさ次第で`it`の文字列引数を使うことを推奨
* 内容を確認したい時は、`rspec -fd specfile`


# beforeにテスト実行前処理を記述
* `before`の引数のデフォルトは`:each`


# subjectでブロックの評価結果がit内のshouldのレシーバになる
* 明示的に`it`内で`subject`メソッドを利用することで、`subject`ブロックの評価結果を使うことができる


# `shared_examples`と`it_behaves_like`
* `shared_examples_for 'キー名' do ~ end`とするとブロック内の処理を`it_should_behave_like 'キー名'`で呼び出してテストできる
* ただし、キー名は全てのテストで重複しないように注意する


# predicateマッチャ
* `expect(xxx).to eq false -> expect(xxx).not_to be_empty`


# rspec3で標準から外れた機能
* `its`メソッドは`rspec-its gem`で提供
* have マッチャ
  * サイズのチェックをテストしやすくするマッチャ(ただし、rspec3ではgemに外出しされた)
  * have マッチャを使った場合、 `have(n).item` と `have(n).items` は互いに置換可能
    * nの値により自然な形にするのがいい
  * have(n).named_collection記法でもかける
    * `it {is_expected.to have(n).xxx }`
