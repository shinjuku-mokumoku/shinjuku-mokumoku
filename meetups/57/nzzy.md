# nzzy
https://connpass.com/user/nzzy/

## 会社や業務で普段やっていること
- 業務は社内SEのようなことをしています。
	- プログラムは一切書きません。
	- Excelガントチャート、PowerPointで会議資料、稟議書を書き、会議ばかりの毎日です。
- 家ではDebianいじってます。

## (option) 相談乗れるかもしれないこと

## 今日やること
- MySQL8.0ではまった件をプレゼンするのでプレゼンを書く。
- 時間が余るようなことがあったら、[Visual Studio Code Distliled](https://www.amazon.co.jp/dp/B07L1JVP8G) を読みます。
 ![](https://images-fe.ssl-images-amazon.com/images/I/41VjsZvpjLL.jpg)

## (option) もしかしたら相談するかもしれないこと
- OSSのソース読みが得意な方いらっしゃいましたらお話したいです。

## 今日の成果
- 英語で一通り全部書けたのでホッとした。月曜日に英語できる帰国子女にレビューしてもらう予定。
　- でかいボリュームを持つ古いMySQLから、MySQL8へのアップグレードって大変!
    - なんと、次のメジャーバージョンへのMySQLのリプリケーションは張れるけど、2つ以上メジャーバージョンが離れたMySQLへのリプリケーションはサポート外。
　- 同時にバージョン混在で複数のマスターを構成するような張り方も駄目。特にこの場合の構成ではマイナーバージョン違いすらサポート外。なので、MySQL 5.6(Master) -> MySQL 5.7(Slave) -> MySQL 5.8(Slave)みたいな構成もサポート外だそうで。
　https://dev.mysql.com/doc/refman/8.0/en/replication-compatibility.html

 　短時間でMySQLのボリュームが巨大（>TBytes)だった場合、短時間のアップグレードって皆さんどうやってるんだろう？？

- 時間ぴったりで、資料ができたぐらいなので、Visual Studio Code Distlliedは読めなかった...orz
