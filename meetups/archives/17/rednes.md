# rednes

## 会社や業務で普段やっていること

- AWSを基盤としたサーバサイドエンジニア（インフラより）
- DockerとCI/CD環境の構築と運用を勉強中

## (option) 教えられるかもしれないこと

- AWS環境の構築とか(AWS CLI, CloudFormation)
- Node.js, Typescriptちょっとだけ

## 今日やること

- AWSの利用費をLambdaからSlackに通知するBot作った
- GitHubで公開したいんで、秘匿情報をコードから分離する(SecretsManager使う)
- LocalstackのSecretsManager使ってローカルでテストできるようにする
  https://github.com/localstack/localstack
- 時間あったらQiitaに解説記事書く


## (option) もしかしたら相談するかもしれないこと

- 特になし

## 今日の成果

- LocalStackのSecretsManagerとりあえず動かせた
- どうでも良い感じのところではまりました
  - バージョン `0.8.7` は `latest` では無い
    https://hub.docker.com/r/localstack/localstack/tags/
  - 公式サンプルの `docker-compose.yml` がSecretsManagerで使用しているport(4584)が空いてなかった
    https://github.com/localstack/localstack/blob/master/docker-compose.yml
    => 1行プルリク出した
- リファクタリングはSlackのWebhook URLをSecretsManagerから読み込むようにしたところで時間切れ
