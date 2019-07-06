# umeneri (Koishi Masato)

## 会社や業務で普段やっていること
- インフラ構築
- playframework + scala

## (option) 教えられるかもしれないこと
- rails 少し
- elasticsearch 少し

## 今日やること
- EC2上にElasticsearchを立てる
- kibanaでElasticsearch起動を確認
- EC2 AutoScalingを確認
- AutoScalingをterraformで設定

## (option) もしかしたら相談するかもしれないこと
- terraform

## 今日の成果
- [x] EC2上にElasticsearchを立てる
- [x] kibanaでElasticsearch起動を確認
- [ ] EC2 AutoScalingを確認
- [ ] AutoScalingをterraformで設定


AutoScalingを設定する際、自動起動したEC2内でElasticsearchが起動せず、適切に起動させるための方法を調べていて終わった。

学んだこと
- EC2のUser Data
- AutoScalingのlifecyclehook
- Packer
- cronの@rebootで起動時に処理を実行できること
