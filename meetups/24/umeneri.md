# umeneri
## 普段やってること
HR系会社にてscalaを用いたサーバーサイド、インフラの開発に従事しています。
[umeneriさんのプロフィール（申し込みイベント一覧） - connpass](https://connpass.com/user/umeneri/)

## 今日やること
aws reinventの記事見て何か試す￥
functional programming in scala続き

## もしかしたら相談するかもしれないこと(option)
* scala

## (option) 教えてもいいよという領域
* rails
* terraform
* elasticsearch

## 今日取り組んだ成果
### aws LambdaのLayer機能とrubyの作成
[AWS Lambda Layers - AWS Lambda](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/configuration-layers.html)

Lambda Layerを使うことによって、複数のLambda functionでコードの共有ができる。

ユースケース例：共通ライブラリなどを一括でLayerで管理

Layerは5つまで追加可能
pythonはnumpyなど数値計算系をまとめたLayerが公開されている

#### gemをLayerで使ってみる
試しでhttpclientのgemを使ってslackへメッセージを送ってみた。


#### 細かいこと
アップロードのコードの容量制限(250MZB)を突破できる? → 無理
[AWS Lambda の制限 - AWS Lambda](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/limits.html)


### functional programming in scala
Streamクラスを使用した遅延評価の勉強中

StreamのtoList, take, drop, takeWhile, forAll関数がかけた
