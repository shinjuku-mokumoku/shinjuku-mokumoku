# y-wat

## 会社や業務で普段やっていること
- GCPでログ基盤構築(Cloud Functions, Data Flow, Google App Engine, BigQuery 成分が多め)
- 言語はpython成分高め

## 相談乗れるかもしれないこと
- GCPでのアーキテクチャ周り

## 今日やること
- bot(python)の開発続き
  - GKEと戦う
- HackersRank数問解く

## 相談するかもしれないこと
- DockerとかGKEの運用まわり？
- (転職)

## 今日の成果
- HackersRank
  - 1問解いた。computer scienceな問題が増えてきた。辛い。
- bot(python)
  - pubsubキューが上手くacknowledge受けてくれない問題
    - best effortっぽい。元のinより件数が20%くらい増えてる。後続のgroup byで弾いて2重処理は受け入れる。
  - 文書類似度計算(cos similarity)
    - 圧倒的0.99率。全く意味がない。何を作ってしまったのか。
  - 今後
    - 明日中にダメなりに仕上げる。
    - 他にも色々と作りとして宜しくない部分も多いので、全体的に設計から作り直す。
