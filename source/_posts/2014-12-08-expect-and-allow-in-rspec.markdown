---
layout: post
title: "rspec3におけるexpectとallowの違い"
date: 2014-12-08 00:00:35 +0900
comments: true
published: false
categories: [ruby rspec]
---

突っ込みどころが多いかもしれないので、誤った認識があればご指摘お待ちしております。

rspecを使った時に、次の２つのメソッドに出会いました。

* A: allow(object).to receive(:hoge).and_return('fuga')  [参考](https://relishapp.com/rspec/rspec-mocks/v/3-1/docs/basics/allowing-messages)
* B: expect(object).to receive(:hoge).and_return('fuga') [参考](https://relishapp.com/rspec/rspec-mocks/v/3-1/docs/basics/expecting-messages)

この使い分けを知る過程でstubとmockの違いが自分の中でイメージできてきました。
まずは、上記２つのメソッドの使い方を非常に単純な例に落とし込んでみます。

<!-- more -->

雑な説明ですが、上記はメソッドはどちらも、`object.hoge`ってメソッドを呼び出すと、戻り値が`fuga`となります。  
さて実際にどんな動きになるか使ってみます。

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


それと、大枠のテストクラスです。

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

# A: allow

allowはstubとして働きます。  
allowを使うと、上述の説明どおり、「`object.hoge`ってメソッドを呼び出すと、`fuga`が戻り値にな」ります。  

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
`allow(obj).to receive(:truthy).and_return(false)`とすると、`obj`が`:truthy`というメソッドコールを受け取ったら、必ず`false`が返されます。  
`always_true`は内部で`:truthy`を呼び出しているので、戻り値は`false`となります。  
よって、`obj.always_true`は`false`なので、failします。

## 2. success

今度はsuccessです。`:falsey`は`true`を返すと設定しているので、`obj.always_false`は`true`となります。

## 3. success

次はテストに関係無いメソッドをstub化した場合です。これも、関係ないのでsuccessになります。

上記のように、`A: allow`はメソッドコールがあった時に指定した値を利用してテストすることができます。  
便利なので使いすぎに注意してください。  

# B. expect

続いてexpectを使ったケースです。いわゆるmockです。  
allowとexpectの違いは、メソッドコールの検証の有無です。expectでは`receive`で指定したシンボルのメソッドが呼び出されていない場合、failします。  

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

receiveで指定したメソッドを呼び出さない場合です。  
itのブロック自体は正しいため、beforeの`expect`を`allow`に変えるか、before自体を消すとsuccessになります。

## 5. success

receiveで指定したメソッドを呼び出しています。  
値を`true`に変更した上で、`true`になっていることを確認しているので、successとなります。

# まとめ

allowのexpectの違いはメソッドコールの検査になります。これを踏まえた上で、下の記事を読むとなるほど！と思うことができました。  

* http://techracho.bpsinc.jp/hachi8833/2014_07_10/17971
* http://aligach.net/diary/20110109.html
* http://d.hatena.ne.jp/takihiro/20081023/1224762895

つまり、stubとmockの違いは、インターフェースの検査(メソッドコールのチェック)をするかしないか、ということ風に理解しました。  
時間かかりそうだけど、[これ](http://d.hatena.ne.jp/devbankh/)も理解できるように読んでみようと思います。  

