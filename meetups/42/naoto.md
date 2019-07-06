# なおと
https://twitter.com/naoto_7713

 ## 会社や業務で普段やっていること
フリーランスエンジニアです。  
常駐先ではVueを書いています。

 ## 今日やること
- 個人開発のissueを消化（Laravel）
https://github.com/nsuzuki7713/a6s-cloud-backend/issues

- 個人開発のissueを消化(lambda)
https://github.com/nsuzuki7713/github-webhook/issues

- Nuxtのキャッチアップ

 ## (option) もしかしたら相談するかもしれないこと

 ## 今日の成果
 ### 個人開発のissueを消化(lambda)
 リポジトリ：https://github.com/nsuzuki7713/github-webhook

 #### 概要
 個人開発(4人)で進めているプロジェクトがありますが、モチベーションを上げるためにissueのclose、プルリクマージされた際に自動でツイートするようにしたい。

 #### 構成
 GitHubのwebhook → API Gateway → Lambda

 #### 今日できたこと
 - local上でtweetできるようになった
 - zipでlambdaにデプロイできるようになった
 - lambdaのテストからtweetできるようになった

 #### 苦労したこと
 - zipする際に元ファイルを削除しなかったので、appendされていた
 `zip -r toLambda.zip ./*`
 - lambdaのライブラリはプロジェクトの直下に入れないといけない
 - twitterの使用上、同一ツイートできなかった
