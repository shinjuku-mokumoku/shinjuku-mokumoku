# @threetreeslight

![](https://avatars3.githubusercontent.com/u/1057490?s=100&v=4)

## 会社や業務で普段やっていること

[Repro](https://repro.io) で VP of Engineering やっています。
組織や人事まわりのことが多くなってきました。

以下のコミュニティのオーガナイズもしています。

- [shinjukuもくもくプログラミング](https://shinjuku-mokumoku.connpass.com/)
- [shinjuku.rb](https://shinjukurb.connpass.com/)
- [shinjuku.aar](https://shinjuku-aar.connpass.com/)
- [shinjuku.hs](https://shinjukuhs.connpass.com/)
- [hacking-hr](https://hacking-hr.connpass.com/)

## 今日取り組むこと

1. kubernates上に配置したnode logging agentから papertrailにもlogを飛ばすようにしておく
1. kubernates上にnode logging agentの更新を data lostなくするいい感じの方法を探る

```
nginx prometheus grafana
  |       |         |
  -------------------
         |||
  node logging agent(fluentd) = papertrail <- ここらへん
         |||
      stack driver
          |
      cloud pubsub
          |
      ---------
      |       |
    bigquery gcs
```

## (option) もしかしたら相談するかもしれないこと

- fluentdの更新みんなどうやっているのか気になる :thinking_face:
- やっぱり一回冗長化させて、flushするまで待つのだろうか？

## (option) 教えてもいいよという領域

サービスアーキテクチャ、インフラまわり、rubyを中心としたアプリケーションだと少しお役に立てるかもしれません。

## 今日取り組んだ成果

https://gitpitch.com/threetreeslight/slides/master?p=shinjuku-mokumoku/7
