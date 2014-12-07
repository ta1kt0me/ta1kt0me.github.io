---
layout: post
title: "rspec3のexpectとallowの違い"
date: 2014-12-08 00:00:35 +0900
comments: true
published: true
categories: [ruby rspec]
---

[よちよち.rb Advent Calendar 2014](http://www.adventar.org/calendars/582) 8日目の記事です。   
昨日は、bonbon0605さんの[2014年に読んだり積んだりした本とその思い出を振り返ります](http://genius.hateblo.jp/entry/2014/12/07/093454)でした。  
Ruby初学者がワンステップレベルアップする時に参考となる良書を紹介していただきました！  

さて、今日は少し前に参加してよちよち.rbで疑問になった、mockとstubの違いについて書きます。  

最近rspecを使った時に、次の２つのメソッドに出会いました。

<!-- more -->

* A: allow(object).to receive(:hoge).and_return('fuga')  [参考](https://relishapp.com/rspec/rspec-mocks/v/3-1/docs/basics/allowing-messages)
* B: expect(object).to receive(:hoge).and_return('fuga') [参考](https://relishapp.com/rspec/rspec-mocks/v/3-1/docs/basics/expecting-messages)

この使い分けを知る過程でstubとmockの違いが自分の中でイメージできてきました。
まずは、上記２つのメソッドの使い方を非常に単純な例に落とし込んでみます。

上記はメソッドはどちらも、`object.hoge`ってメソッドを呼び出すと、戻り値が`fuga`となります。  
さて、どう違うのか、試してみます。

# テスト対象のサンプルクラス

問題を単純化します。(逆にわかりづらいかもしれないし、ソースコード減らしたかったのであまりいい書き方ではありません)  
`true`と`false`を返すだけのprivateメソッドとそのラッパーメソッドを用意します。

```rb
class MockAndStub
  def always_true
    return truthy
  end

  def always_false
    return falsey
  end

  private
  def truthy
    true
  end

  def falsey
    false
  end
end
```

それと、テストクラスです。

```
describe MockAndStub do
  let(:obj) { MockAndStub.new }
  
  # publicメソッドの戻り値が正しいことを確認
  context 'do not use stub and mock' do
    it { expect(obj.always_true).to be_truthy }
    it { expect(obj.always_false).to be_falsey }
  end
end
```

準備ができました。まずは`allow`から見ていきましょう。

# A: allow(object).to receive(:hoge).and_return('fuga')

`allow`はstubとして働きます。  
`allow`を使うと、上述の説明どおり、`object.hoge`というメソッドを呼び出すと、`fuga`が返ってきます。  

```rb
  ...
  context 'use stub' do
    # 1. fail
    before(:each) { allow(obj).to receive(:truthy).and_return(false) }
    it { expect(obj.always_true).to be_truthy }

    # 2. success
    before(:each) { allow(obj).to receive(:falsey).and_return(true) }
    it { expect(obj.always_false).to be_truthy }    
  end

  context 'use stub, but not use' do
    # 3. success
    before(:each) { allow(obj).to receive(:falsey).and_return(true) }
    it { expect(obj.always_true).to be_truthy }
  end
  ...
```

## 1. fail

１のパターンのテストはfailします。  
`allow(obj).to receive(:truthy).and_return(false)`とすると、`obj`が`:truthy`というメソッドコールを受け取ったら、必ず`false`が返ってきます。  
`always_true`は内部で`:truthy`を呼び出しているので、戻り値は`false`となります。  
よって、`obj.always_true`は`false`なので、failします。

## 2. success

今度はsuccessです。`:falsey`は`true`を返すと設定しているので、`obj.always_false`は`true`となります。

## 3. success

次はテストに関係無いメソッドをstub化した場合です。これも、関係ないのでsuccessになります。

上記のように、`A: allow`はメソッドコールがあった時に指定した値を利用してテストすることができます。  

# B. expect(object).to receive(:hoge).and_return('fuga')

続いて`expect`で、こちらはmockです。  
`allow`と`expect`の違いは、メソッドコールの検証の有無です。`expect`では`receive`で指定したメソッドが呼び出されていない場合、failします。  

```rb
  ...
  context 'use mock' do
    context 'use mock, and not use' do
      # 4. fail
      before(:each) { expect(obj).to receive(:falsey).and_return(true) }
      it { expect(obj.always_true).to be_truthy }
    end

    context 'use mock, and use' do
      # 5. success
      before(:each) { expect(obj).to receive(:falsey).and_return(true) }
      it { expect(obj.always_false).to be_truthy }
    end
  end
  ...
```

## 4. fail

`receive`で指定したメソッドを呼び出さない場合です。  
itのブロック自体は正しいため、beforeの`expect`を`allow`に変えるか、`before`自体を消すとsuccessになります。

## 5. success

`receive`で指定したメソッドを呼び出しています。  
値を`true`に変更した上で、`true`になっていることを確認しているので、successとなります。

# まとめ

allowのexpectの違いはメソッドコールの検査になります。これを踏まえた上で、下の記事を読むとなるほど！と思うことができました。  

* http://techracho.bpsinc.jp/hachi8833/2014_07_10/17971
* http://aligach.net/diary/20110109.html
* http://d.hatena.ne.jp/takihiro/20081023/1224762895

つまり、stubとmockの違いは、インターフェースの検査(メソッドコールのチェック)をするかしないか、ということですね。  

ところで、2つの違いはわかったけれど、「どう使い分ければいいのか」が実はもっと大事です。  
ただ、これはテストに依存するため、確認すべきことは何か、を意識しながら切り分ける必要があります。  
[Martin Fowlerの"Mocks Aren’t Stubs"の翻訳記事](http://d.hatena.ne.jp/devbankh/)があって、非常に長い上に全容を理解しきれていないのですが、

> 振る舞いの結びつきを意識しなければいけないか

という点が判断材料になるかと思います。  
あと、

>モックオブジェクトはXPコミュニティから出てきたものだ。また、XPの主な特徴の一つは、テストドリブン開発を重要視していることだ。テストドリブン開発では、テストを書くことで推進される反復を通じてシステム設計も進んでいく。
そういったわけで、モックオブジェクトの支持者達が相互作用テストの設計における効果についてことさら語るのも驚くことではない。このスタイルでは、主要なオブジェクトに対する最初のテストを書くから [それらのオブジェクトの] 振る舞いの開発を始めることになる。

とあるので、テスト駆動開発するなら、モック使うでいいと思います。  

ひとまず、それで試してみて、きになることがあれば、また何か書くかもしれません。
