# umeneri

## 会社や業務で普段やっていること
- インフラ構築
- playframework + scala

## (option) 教えられるかもしれないこと
- rails 少し
- elasticsearch 少し

## 今日やること
- terraformでEC2上にElasticsearchを立てる

## (option) もしかしたら相談するかもしれないこと
- terraform

## 今日の成果
- terrafromでEC2サーバーとS3立ち上げ、sshログイン成功
  - tutorialの通り。 [Installing Terraform - Terraform by HashiCorp](https://www.terraform.io/intro/getting-started/install.html)
- ansibleの検証環境をdockerで構成

### つまった点:
amazon linux上で以下手順でelasticsearchインストールしたがエラー。

参考:
[Installation | Elasticsearch Reference [6.4] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html)

$ yum -y install java-1.8.0-openjdk-devel
$ yum install -y tar passwd
$ curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.4.0.tar.gz
$ tar -xvf elasticsearch-6.4.0.tar.gz
$ ./elasticsearch
[2018-08-25T07:59:53,986][WARN ][o.e.b.ElasticsearchUncaughtExceptionHandler] [] uncaught exception in thread [main]
org.elasticsearch.bootstrap.StartupException: java.lang.RuntimeException: can not run elasticsearch as root
  at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:140) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Elasticsearch.execute(Elasticsearch.java:127) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:86) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:124) ~[elasticsearch-cli-6.4.0.jar:6.4.0]
  at org.elasticsearch.cli.Command.main(Command.java:90) ~[elasticsearch-cli-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:93) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:86) ~[elasticsearch-6.4.0.jar:6.4.0]
Caused by: java.lang.RuntimeException: can not run elasticsearch as root
  at org.elasticsearch.bootstrap.Bootstrap.initializeNatives(Bootstrap.java:104) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Bootstrap.setup(Bootstrap.java:171) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Bootstrap.init(Bootstrap.java:326) ~[elasticsearch-6.4.0.jar:6.4.0]
  at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:136) ~[elasticsearch-6.4.0.jar:6.4.0]
  ... 6 more
-bash-4.2#



userを追加しないといけないらしい。。
