# @threetreeslight

![](https://avatars3.githubusercontent.com/u/1057490?s=100&v=4)

## 会社や業務で普段やっていること

[Repro](https://repro.io) で VP of Engineering やっています。
組織や人事まわりのことが多くなってきました。

以下のコミュニティのオーガナイズもしています。

- [shinjuku.rb](https://shinjukurb.connpass.com/)
- [shinjuku.aar](https://shinjuku-aar.connpass.com/)
- [shinjukuもくもくプログラミング](https://shinjuku-mokumoku.connpass.com/)
- [shinjuku.hs](https://shinjukuhs.connpass.com/)

## 今日取り組むこと

1. k8s(主にGKE)でのlog driverまわりやlog集約の調査
1. 用意したほうが自由度高そうであれば自前のlog shipperを動作させるか考える

```text
nginx prometheus grafana
  |       |         |
  -------------------
          |
    fluentd cluster <- ココらへんどうしよう？ :thinking_face:
          |
  -------------------
  |       |         |
bigquery gcs  papertrail/stackdriver
          |
     spark(data proc)
```

## (option) もしかしたら相談するかもしれないこと

- GKEでそこらへん詳しい人いたらぜひ相談させてください :pray:

## (option) 教えてもいいよという領域

サービスアーキテクチャ、インフラまわりやアプリケーションコードなど

## 今日取り組んだ成果

https://gitpitch.com/threetreeslight/slides/master?p=shinjuku-mokumoku/6
