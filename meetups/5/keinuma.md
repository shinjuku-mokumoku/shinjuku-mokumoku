# keinuma

## 会社や業務で普段やっていること

Python, Djangoを使ったWebアプリケーション開発  
Vue.jsやNuxt.jsなどを勉強中


## 今日取り組むこと

Cognitoの認証処理をDjangoRESTFrameworkに組み込む


## (option) もしかしたら相談するかもしれないこと

Cognito使ったことがある方いたら使用感を伺いたいです

## 今日の成果
- Cognitoの認証処理実装
  - リクエストヘッダーからトークンを取得して、Cognitoに確認しに行く
  - トークンの期限が切れいる場合はフロント側で再度取得
- DjangoRESTFrameworkのAPIドキュメント作成
- GunicornでNginxやS3を使わずに静的ファイルを配信する方法を模索
  - WhiteNoiseが良さげ
