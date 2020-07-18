# Taiga Tachibana

## 会社や業務で普段やっていること

- GolangでのGraphQL API開発

## 相談乗れるかもしれないこと

- API設計
- OOP

## 今日やること

- Greedy method, Graph theoryの学習
  - YouTubeで上記の動画を見て学習する
- Consumer Driven Contractの導入テスト

## 相談するかもしれないこと

- Algorithm / Data structure

## 今日の成果

- Greedy Method, Graph theoryについて学んだ
  - Huffman coding
  - Prims and Kruskals Algorithm
  - Djikstra Algorithm
  - Abdul Bariという人のYouTube講義がとても分かりやすいのでオススメ
- System design interviewの教材を解いた
- Consumer Driven ContactのフレームワークであるPactをTypeScriptから使おうとしたが、途中で時間切れ
  - Consumer Driven Contractとは、Micro Service間における依存関係を、Consumer(利用側)を起点としてRequest / Responseの契約を結ぶテスト
  - 結合テストを複数システム間で行うと、環境設定だけでも大変になる
    - システムA -> Go, MySQL, ElasticSearch
    - システムB -> Rails, PostgreSQL, Redis
  - あるチームがシステムAの開発をしている時、システムBの環境がPostgreSQLからMySQLに変わると、システムAの結合テストが落ちてしまう
  - 複雑なマイクロサービス間において、Consumer/Providerを正確に理解するのは難しく、コミュニケーションコストが指数関数的に大きくなる
  - なのでConsumer Driven Contractが有効になる
  - システムAがシステムBに依存する時、システムAがどのように使い、どのような結果を期待するのかを「Contract」として定義しておく
  - システムBはCIの一環として、システムAのContractをチェックし、アップデートに伴ってContractを破っていた場合はCIを落とすようにする
  - すると互換性を壊していることをシステムBが検知できるので、それを壊さないように書き換える必要がある
  - Consumer側は契約を適切に定義しておけば、直接的なコミュニケーションや、面倒な結合テストなしに互換性が保たれるのでCDCが有効になる

