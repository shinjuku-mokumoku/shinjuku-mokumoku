# komo_fr (GitHub: komo-fr)

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
    - 「スクレイピング->データ処理->HTML生成->GitHub PagesにUP」という一連の流れの自動化
        + いま手動デプロイなので楽にしたい
        + できればPythonで一貫したい
    - AWSないしGCPのGPUインスタンスの使い勝手について

## 今日の成果
