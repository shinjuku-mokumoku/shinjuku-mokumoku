# Taiga Tachibana

## 会社や業務で普段やっていること

- GolangでのGraphQL API開発

## 相談乗れるかもしれないこと

- API設計
- OOP

## 今日やること

- REST APIの仕様を読む
  - https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- REST APIについて考える
- 英単語の勉強

## 相談するかもしれないこと

- REST APIについて
- データ構造

## 今日の成果

- REST APIの概要を学んだ
  - REST はハイパーメディアに基づき分散システムを構築するアーキテクチャスタイル
  - ロイ・フィールディングによって2000年に博士論文で提唱された
  - 特定のプロトコルに依存せず、URIによってリソースを表現する
    - リソースは名詞で表現される
  - ProviderがConsumerに対してハイパーメディアを起点としてリソースを表現する
    - 究極的にConsumerはProviderの仕様を一切知らなくても良い
  - 近年ウェブ開発で使われている「REST」という言葉のほとんどはRESTの定義に沿っていないのでロイ・フィールディングは怒っている
    - しかしRESTに強いこだわりを持つ人はRESTafarianとして揶揄されることもある
    - ElasticSearchはRESTに近いinterfaceを提供しているが、あえてRESTに沿わない形を採択している
  - Martin Fowlerの記事にレベルが示されており、ハイパーメディアを活用したものはLevel.3とされており、実際にほとんどのアプリケーションはLevel.2までに留まっている
  　 - https://martinfowler.com/articles/richardsonMaturityModel.html
  - RESTの原理に従うのは辛いのに、なぜRESTっぽいものが流行ったのかは調べている途中
- 個人的な見解
  - 実際の業務アプリケーションでは、成果に対する時間的な制約からConsumer Drivenにならざるを得ない
    - 例えばカテゴリ一覧を取得し、それに紐づく記事数を取得するだけでも大変なオーバーヘッドが加わる
    - なぜならカテゴリ一覧に記事数という集計情報が入るのなら、カテゴリに紐づく全てのリソースが含まれることになるため
    - Provider Drivenなら/articlesを全ページに渡って全て叩いて、クライアント側で集計処理をする必要がある
    - しかしそれは現実的に不可能なため、Consumer DrivenでProviderに「カテゴリごとの記事数」というリソースではないものを提供してもらう必要がある
  - このような制約がREST原則を守ることを難しくしている
  - なので実質的にConsumerとProviderはほとんどの場合で結合しており、RESTというよりもRPCになっている
  - しかしConsumerとProviderの結合を前提とするのならば、Contract Drivenにデータを柔軟に提供できるGraphQLの方が効率的といえる場面が多いのではないか