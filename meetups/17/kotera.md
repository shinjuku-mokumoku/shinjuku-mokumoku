## 会社や業務で普段やっていること
- 仕事
    - RoRアプリケーションのレビューしてます
    - 管理サーバをDockerに移行
    
## (option) 教えられるかもしれないこと
- RoR周りなら

## 今日やること

- kube-awsでk8sを動かし、クラスタを作る。kube-awsが作るymlテンプレートの仕組みを理解する。

## (option) もしかしたら相談するかもしれないこと
- kube-awsの使い方

## 成果

- [チュートリアル](https://kubernetes-incubator.github.io/kube-aws/getting-started/)を終えた。
  - チュートリアルが古い。
  - external-DNSの扱いが雑
    - 作成(`kube-aws up`)しようとしたときは問題なく作れたが、設定変更無しでそのまま更新(`kube-aws update`)しようとするときにexternal-DNSがないと怒られる。
      - 「そもそも冪等性がないのでは?」と感じ始める。
    - 気を取り直して、作成時からexternal-DNSを入れようとする。
      - IAM関連で怒られる。
    - `kube-aws`の内部実装を読む。
    - Policyを編集する部分があったので編集する。
  - デプロイできた！←イマココ   
    
- CloudFormationが遅くて試行錯誤し難い。これどうやってデバックしたら良い?
- 
