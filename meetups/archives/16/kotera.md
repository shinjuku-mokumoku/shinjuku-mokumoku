## 会社や業務で普段やっていること
- 仕事
    - RoRアプリケーションのレビューしてます
    - 管理サーバをDockerに移行
    
## (option) 教えられるかもしれないこと
- RoR周りなら

## 今日やること

- kube-awsでk8sを動かし、クラスタを作る。Spot Fleetを使ってリソースプールを作りたい

## (option) もしかしたら相談するかもしれないこと
- kube-awsの使い方

## 今日の成果

- kube-awsの使い方を理解するために、[Getting Started · GitBook](https://kubernetes-incubator.github.io/kube-aws/getting-started/)を試した。

### 学び
- 基本的な部分(kube-awsとk8sの役割分担)は理解出来た。
- DNSを設定してあげないと、`kube`コマンドが利用出来なかった。

### ハマりポイント
- ドキュメントが若干古くなっていて、ハマった。
- Docker for Macに付いてくるk8sの挙動が何かおかしい。ずっとstatingになってる。。
[![Image from Gyazo](https://i.gyazo.com/thumb/300/419aac8bbbd263f2488d05cfbe7b6998.png)](https://gyazo.com/419aac8bbbd263f2488d05cfbe7b6998)
