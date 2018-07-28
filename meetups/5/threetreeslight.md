# @threetreeslight

![](https://avatars3.githubusercontent.com/u/1057490?s=100&v=4)

## 会社や業務で普段やっていること

[Repro](https://repro.io) で VP of Engineering やっています。
組織周りのことや人事周りのことが多くなってきました。

以下の地域コミュニティのオーガナイズもしています。

- [shinjuku.rb](https://shinjukurb.connpass.com/)
- [shinjuku.aar](https://shinjuku-aar.connpass.com/)
- [shinjukuもくもくプログラミング](https://shinjuku-mokumoku.connpass.com/)
- [shinjuku.hs](https://shinjukuhs.connpass.com/)

## 今日取り組むこと

やる
- blogの監視をしている prometheus で alert recover 通知をslackにいい感じにする
- blogの ngix のhttp2対応, logのLTSV化 (h2oのほうが面白いかも？)
- prometheus + GEKにおいてnodeのmetricいい感じのが取れないのか、node_exporter入れるべきか調査

できれば
- GKEで稼働するコンテナのlogを自前のlogshipperに集約させ、gcs や papertrailなどの複数箇所にfunoutするようにする
  - ココらへんが近いかも？ https://cloud.google.com/solutions/customizing-stackdriver-logs-fluentd 

## (option) もしかしたら相談するかもしれないこと

- kubernatesからcontainer metricなどいい感じに取得できるようになったが大量にメトリックが有りすぎて、どれ使うとよいかいまいちピンときていない感じです。

## 今日取り組んだ成果
https://gitpitch.com/threetreeslight/slides/master?p=shinjuku-mokumoku/5
