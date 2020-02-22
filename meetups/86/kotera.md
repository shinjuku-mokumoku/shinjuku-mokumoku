# Kotera

## 会社や業務で普段やっていること

- RoRのレビュー
- 雑務効率化
- SRE的なこと

## (option) 相談乗れるかもしれないこと

- Ruby on Rails

## 今日やること

- 前回の続き
- firebaseでnuxtのSSRをデプロイできるようにする。
  - CIに乗せる
- basic認証をかける  

## やったこと

- firebaseでnuxtのSSRをデプロイできるようにする。
  - CIに乗せる
- 気づいたこと
  - CircleCIで環境変数を設定したら、実行ログではその文字列がマスクされるようだ。これはパスワードやトークンの場合100%嬉しいけど、そうじゃない場合誤爆もしそう。「マスクしなくてもいい変数はCircleCIで管理するな」ってことかな。 :thinking:
  [![Image from Gyazo](https://i.gyazo.com/e170388f90c0786a7020415ddb46a261.png)](https://gyazo.com/e170388f90c0786a7020415ddb46a261)
