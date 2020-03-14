# Kotera

## 会社や業務で普段やっていること

- RoRのレビュー
- 雑務効率化
- SRE的なこと

## (option) 相談乗れるかもしれないこと

- Ruby on Rails

## 今日やること

- firebaseでのドメイン設定
- 前回の続き
- 日報ツール作成(nuxt+typescript)
  

## (option) もしかしたら相談するかもしれないこと
 
## やったこと

- firebaseでのドメイン設定
  - SSL証明書のプロビジョニングが最大24時間かかるらしい

- nuxt+typescript
    - nodebrewからnodenvへ。yarnをyvm管理へ。
    - lintの設定にハマる
        - `import/no-unresolved`でエラーが出る。
            - importのパスに警告が出てしまう。実際は問題なくビルドは通る。
        - この警告だけオフれば良いのだけど、importのパスミスは警告ではなくエラーレベルで通知が欲しい。
        - lintの設定が正しくないんだと思う。どうやったら正しくできるか試行錯誤中。
        
