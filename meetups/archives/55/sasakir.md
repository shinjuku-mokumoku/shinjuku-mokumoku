# @sasaki-ryu
３年目エンジニア

## 会社や業務で普段やっていること
インフラが多いです

## (option) 教えてもいいよという領域



## 今日取り組むこと

aws ecs のcodepipelineをcloudformationでやる(Blue/Green)

## (option) もしかしたら相談するかもしれないこと
デプロイ周りの設計


## 今日取り組んだ成果
- codepipeline 周りの IAM設定
- codebuild 設定
- ECRのライフサイクル設定
- DB migration 用のlambda設定途中
- DB migration でslack確認のlambda設定途中

残り
- migrationのlambda設定
- デプロイグループの作成
- デプロイ
- デプロイの確認

学んだこと
- CodePipelineから呼び出したlambdaにCodePipelineないで出たアウトプットファイルの渡し方 
https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.h
- CodeBuildでgithubのpull request作成時に動かすやり方
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projecttriggers.html

感想
- cloudformation書くのつらい
- IAM厳密にやろうと思ったけどやめました。
