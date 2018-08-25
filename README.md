# What's Shinjuku Mokumoku Programming?

![](/assets/images/shinjuku-mokumoku-banner-960x180.png)

１人だと勉強をサボりそうなオーガナイザーが **~~強制的に~~ ストイックにプログラミングする** ための時間を作ることを目的に毎週開催されているもくもく会です。

そのため、新宿プログラミングもくもく会では参加しているプログラマー各位が相談したりしながら、以下のようなテーマにそれぞれ取り組みます。

- 新しい言語・フレームワークを触りこむ
- 今後使うかもしれないミドルウェアの特性を掴む
- 分散データストアをとりあえず触って肌感覚を掴む
- 機械学習についてまとまって時間作って学習する
- 数学や統計を学び直す、論文を読む
- OSS活動やプライベートプロダクトを集中して進めたい

また、自身にプレッシャーを与えるためにもcheck-inにてやることを宣言し、check-outにて成果を発表します！

質問などありましたら、slackの [shinjuku-mokumoku](https://shinjuku-mokumoku.slack.com/) で mention もしくは、twitterにて #shinjukumokumoku hash付きで 連絡ください。

未登録の方は https://shinjuku-mokumoku.herokuapp.com より登録ください。

## ToC

- [Introduction Pitch](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku)
- [shinjuku-mokumoku slack](https://shinjuku-mokumoku.slack.com/) (regstration is [here](https://shinjuku-mokumoku.herokuapp.com))
- [shinjuku-mokumoku connpass group](https://shinjuku-moku.connpass.com/)
  - [connpass descritpion](connpass.md)
- [Organizer works](ORGANIZE.md)

## Other Usage

提出された自己紹介markdownから発表順を決定する

```sh
node scripts/presenter.js <num>

OR

MEETUP=<num> docker-compose run presenter
```

次回eventのtemplateを作る

```sh
node scripts/generate-next-event.js

OR

docker-compose run node node ./scripts/generate-next-event.js
```
