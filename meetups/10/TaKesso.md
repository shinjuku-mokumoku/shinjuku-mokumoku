# TaKesso

## 会社や業務で普段やっていること
- HR系Webアプリケーション開発
  - PHP / ZendFramework(歴史的理由) / jQuery
  - Ruby / Ruby on Rails / React
- スマートスピーカー(LINE Clova)遊び
- 8月ニート中（前職7月末退職、次9月から）

## (option) 教えられるかもしれないこと
- Webの基礎的なことなら...

## 今日やること
- [MUST] [Django Girls Tutorial](https://djangogirlsjapan.gitbooks.io/workshop_tutorialjp/)を一通りやってDjangoを学ぶ 
- [BETTER] SlackAppに詳しくなる

## (option) もしかしたら相談するかもしれないこと
- 訳あってPythonでSlackAppを作ることになったので、PythonやSlackAppに詳しい方にお助けいただきたいシーンがあるかもしれません...! :bow:

## 今日の成果
- ~簡易ブログサイトのURLをここに貼る予定~ 
- herokuへのdeployのチャプターでエラーが出てしまって無念

----

### [Django Girls Tutorial](https://djangogirlsjapan.gitbooks.io/workshop_tutorialjp/)のメモ

<details>

- `イントロダクション`
- `インターネットはどうやって動いているの？`
- `コマンドラインを使ってみよう`
- `Pythonをインストールしよう`
- `コードエディタ`
  - ここまでは本当に導入。コード自体は一切書かない。
  - 『インターネットはどうやって動いているの？』はわかりやすいので非エンジニア勢にも読まれたい
- `Pythonを始めよう`
  - 数値、文字列、それらの結合、変数の扱い、リスト, ディクショナリ
  - 比較、Boolean、ファイル保存、条件式
  - 関数、繰り返し処理
  - 書籍とかProgateとかで改めて勉強してもいいかも
- `Djangoってなぁに？`
  - > 無料でオープンソースとして公開されているPythonを使用したWebアプリケーションフレームワーク
- `Djangoをインストールしよう`
  - 仮想環境を使う
    - `python3 -m venv myvenv`
    - `source myvenv/bin/activate`
  - Djangoのインストール
    - `pip install --upgrade pip`
    - `pip install django==1.11`
- `プロジェクトを作成しよう`
  - `django-admin startproject mysite .`
  - `mysite/settings.py`の修正
- DBの設定
  - `python manage.py migrate`
- 動作確認
  - `python manage.py runserver`
  - 動いた、おっけ。

</details>
