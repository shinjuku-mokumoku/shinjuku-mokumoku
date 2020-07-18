# @threetreeslight

![](https://avatars3.githubusercontent.com/u/1057490?s=100&v=4)

## 会社や業務で普段やっていること

[Repro](https://repro.io) で VP of Engineering やっています。

イベントおじさん化してきました :innocent:

オーガナイズしているコミュニティのオーガナイズ

- [shinjukuもくもくプログラミング](https://shinjuku-mokumoku.connpass.com/)
- [shinjuku.rb](https://shinjukurb.connpass.com/)
- [shinjuku.aar](https://shinjuku-aar.connpass.com/)
- [shinjuku.hs](https://shinjukuhs.connpass.com/)
- [hacking-hr](https://hacking-hr.connpass.com/)
- [Repro Tech Meetup](https://repro-tech.connpass.com/)

## 今日取り組むこと

自前[blog](https://threetreeslight)を粛々と :pray:

1. stackdriver からの gcs, bq funoutまわりの調査と実装
1. fluentd-remote_syslogのつなぎ先情報をどうやって隠匿するか？ :thinking:
1. kubeletかなにかを使っていい感じに ssl certificate の自動更新する

```text
         ...
          |
       fluentd (<-ここらへん1) --- papertrail
          |
      stackdriver
          | (<- ここらへん2)
      ----------
      |        |
    bigquery  gcs
```

## (option) もしかしたら相談するかもしれないこと

GCPに造詣が深い方がいればぜひ！

## (option) 教えてもいいよという領域

サービスアーキテクチャ、インフラまわり、rubyを中心としたアプリケーションで少し相談乗れるかもしれません。

## 今日取り組んだ成果

https://gitpitch.com/threetreeslight/slides/master?p=shinjuku-mokumoku/10
