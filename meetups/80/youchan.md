# @youchan

## 会社や業務で普段やっていること

株式会社レトリバという会社でエンジニアリングマネージャーをしています。  
たまに製品開発とかPoCをしたりしています。

主に自然言語処理とか音声認識とか

## (option) 相談乗れるかもしれないこと

RubyとかOpalのことはすこし相談にのれるかもしれません。

## 今日やること

* RubyKaigiのCFPを書く(ために調査など)

## (option) もしかしたら相談するかもしれないこと

Async gemつかってるよという人がいたら教えてください。

## 今日の成果

* OpalのRewriterを使ってASTの書き換えができるようになった。
  * c.f. https://blog.youchan.org/2020-01-02

例えば、こんな感じ

```ruby
class AsyncRewriter < Base
  def on_block(node)
    recvr, args, body = node.children

    return super unless recvr == s(:send, nil, :Async)

    body = s(:send, nil, :puts, s(:str, "Async call")) 
    node.updated(:block, [recvr, args, body])
  end
end
```
