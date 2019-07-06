# tc

## 会社や業務で普段やっていること
- 会社員でメインはreactnativeでアプリ作ってますがサーバーも書いたりしてます

## 今日やること
- AndroidArchitctureCompoenentsの実装
- PKI周りの勉強

## 成果

## PKI周りの復習
- 認証局
- 証明書
- トラストリンカetc

## アンドロイド開発のディレクトリ構成

- app/
    - MyApplication/
    - di/
        - di関連
    - usecase/
        - AuthUseCase
    - domain/
        - User
    - data/
        - user/
            - UserRepository
            - UserRemote <- 中にUserRemoteModelを作ってそこからUserにマップさせる
            - UserCache <- Roomのキャッシュ。ここにはドメインオブジェクトをそのままぶち込む。
    - presentation
        - MyFragment
        - MainActivity
        - navigationManager <- ナビゲーションを管理　
        - foo/
            - FooFragment
            - FooViemModel
    - util <- なんかあれば。Domainにおけるものはドメインにクラスとして置きたい。
```
