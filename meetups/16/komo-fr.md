# [@komo_fr](https://twitter.com/komo_fr) (GitHub: [komo-fr](https://github.com/komo-fr))

## 会社や業務で普段やっていること
- 仕事
    - Pythonを使ってデータを見てます
- プライベート
    - PEP (Python Enhancement Proposal)の参照関係構造を可視化する[Webページ](https://komo-fr.github.io/pep_map_site/)を作っています。
        + [repository](https://github.com/komo-fr/pep_map_site)
        + [話したときの資料](https://speakerdeck.com/komofr/pyconjp-2018-interactive-network-visualization-using-python-networkx-plus-bokehde-pepfalsecan-zhao-guan-xi-woke-shi-hua-suru)

## (option) 教えられるかもしれないこと
- NetworkXとBokehの使い勝手については少し喋れるかも
    + [NetworkX](https://networkx.github.io/): Pythonで複雑ネットワーク解析をするためのライブラリ
    + [Bokeh](https://bokeh.pydata.org/en/latest/): Pythonでインタラクティブな可視化をするためのライブラリ

## 今日やること
- 明後日（10/9）Pythonの[イベント](https://pyladies-tokyo.connpass.com/event/99733/)でLTをするので、そのための準備をします。
    - 具体的には:
        + [fitbit](https://www.fitbit.com/jp/home)で計測した脈拍データを取得して、matplotlibで可視化するコードを書く
        + (時間があったら) bokehの最新バージョン(0.13.0)から追加された[RangeTool](https://bokeh.pydata.org/en/latest/docs/reference/models/tools.html#bokeh.models.tools.RangeTool)を使う([こんなの](https://bokeh.pydata.org/en/latest/docs/gallery/range_tool.html)が作れる)
        + (時間があったら) 資料作成に着手する

## (option) もしかしたら相談するかもしれないこと
- 今日やることに関連して：
    + 目的: そのうち、脈拍データや睡眠データ(約400日、1人分)をクラスタリングしたいと思っているのですが、時系列データのクラスタリングの入門の仕方について知っている方がいたら紹介いただけると嬉しいです。
        - 目的： 体感的に「イライラしている日」「集中できた日」「肉体的な運動が多かった日」で脈拍のパターンが違う。どういうパターンがあるのか、まずは全体を俯瞰するためにざっくり分けたい
        - 1日=1レコードで約400日分
        - 生データのままでscikit-learnでぶち込むぐらいしか今思いついていない
- 今日やることとは関連ないけれど：
    1. 再現性を確保するための実験データ・スクリプトの管理についてのtips
    2. 「スクレイピング->データ処理->HTML生成->GitHub PagesにUP」という一連の流れの自動化
        + いま手動デプロイなので楽にしたい
        + できればPythonで一貫したい
    3. AWSないしGCPのGPUインスタンスの使い勝手について

## 今日の成果
- 「今日やること」に書いたLTの準備を、予定通りやりました
    + 🙆‍  終わった: [fitbit](https://www.fitbit.com/jp/home)で計測した脈拍データを取得して、matplotlibで可視化するコードを書く
    + 🙅‍ 未着手: (時間があったら) bokehの最新バージョン(0.13.0)から追加された[RangeTool](https://bokeh.pydata.org/en/latest/docs/reference/models/tools.html#bokeh.models.tools.RangeTool)を使う([こんなの](https://bokeh.pydata.org/en/latest/docs/gallery/range_tool.html)が作れる)
    + 🙅‍ 未着手: (時間があったら) 資料作成に着手する
- 成果物
    + コードと結果: http://nbviewer.jupyter.org/github/komo-fr/mokumoku_output/blob/master/2018/20181006_shinjukumokumoku/fitbit.ipynb?flush_cache=true
    + <img src="https://user-images.githubusercontent.com/31801148/46568812-4f6acc80-c986-11e8-98ce-2fc1ca5fdb70.png">
- 使ったライブラリ
    + python-fitbit (Pythonでfitbitのデータを取得するためのライブラリ)
        - https://github.com/orcasgit/python-fitbit
- ハマったところ
    - 困ったこと: fitbitのAPIから返却される脈拍データが期待する構造になっていない
        - 具体的には、jsonの中に1日のサマリしかなく、秒単位・分単位などの詳細な脈拍データが入っていない
    - 最初に疑ったこと:
        - (状況1) 以前動いていたコード (約半年前)は変えていない
        - (状況2) 認証は成功しデータは返ってきている
        - (推測) この半年間にFitbitのAPIに変更があった？
    - 原因: APIに変更はなく、単に私の設定ミスだった
        - (前提) fitbitのAPIを使うときはhttps://dev.fitbit.com/login でアプリケーションを登録する必要がある
        - (状況3) 今回、この辺の手順をド忘れしていたの[このページ](https://qiita.com/fujit33/items/2af7c4afdb4e07601def)を見ながら、最初からアプリを登録し直した
        - (状況4) そのとき、<u>**「OAuth 2.0 Application Type」の設定を「Personal」にし忘れていた（私のちょんぼ）**</u>
            + <img src="https://user-images.githubusercontent.com/31801148/46569009-a1f9b800-c989-11e8-99da-6a58842ce34d.png">
        - (結果) APIを叩いて返却されるjsonの中に詳細なデータが含まれていなかった
- 参考にしたページ
    + https://python-fitbit.readthedocs.io/en/latest/#fitbit-api
    + https://dev.fitbit.com/build/reference/web-api/heart-rate/
