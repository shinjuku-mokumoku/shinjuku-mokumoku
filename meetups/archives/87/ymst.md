# ymst


## 会社や業務で普段やっていること

- Androidアプリ開発

## 相談乗れるかもしれないこと

- 簡単なJavaとAndroid開発

## 今日やること

- iOSアプリ開発
    - メールアドレス変更
    - 問合せ送信

## 相談するかもしれないこと

- 普段Android開発をしていますが経験1年弱なので、クライアント側もサーバー側もいろいろなお話聞けたら嬉しいです。

## 今日の成果
- iOSアプリ開発
    - メールアドレス変更 -> OK
    - 問合せ送信 -> OK
    - ViewModelのinitに入れていたWebAPIから画面リソースを取得するコールが2,3回行われる
     - ViewがstructだからかそのプロパティのViewModelが2、3作られているよう
        1. WebAPIへのアクセスをinitではなくonAppearで行う -> ルートにアタッチされるViewのonAppearはコールされていない？のでできない
        2. repositoryにキャッシュする
        3. そもそも画面が表示されてからリソースを取得する作り方を止める