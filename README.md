![](/assets/images/shinjuku-mokumoku-banner-960x180.png)

# What's Shinjuku Mokumoku Programming?

１人だと勉強をサボりそうなオーガナイザーが **~~強制的に~~ ストイックにプログラミングする** ための時間を作ることを目的に毎週開催されているもくもく会です。

そのため、新宿プログラミングもくもく会では参加しているプログラマー各位が相談したりしながら、以下のようなテーマにそれぞれ取り組みます。

- 新しい言語・フレームワークを触りこむ
- 今後使うかもしれないミドルウェアの特性を掴む
- 分散データストアをとりあえず触って肌感覚を掴む
- 機械学習についてまとまって時間作って学習する
- 数学や統計を学び直す、論文を読む
- OSS活動やプライベートプロダクトを集中して進めたい

また、自身にプレッシャーを与えるためにもcheck-inにてやることを宣言し、check-outにて成果を発表します！

過去の雰囲気 : [shinjuku-mokumoku](https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/meetups)

質問などありましたら、slackの [shinjuku-mokumoku](https://shinjuku-mokumoku.slack.com/) ([登録はこちら](https://join.slack.com/t/shinjuku-mokumoku/shared_invite/enQtNDY1NzY4NzE2NzU0LTQ4OTI2NDEzNTcyNjMzZGE1MDM1M2FmN2IyMTUzNzkxOTI4NzUxYjAxMmQzMDIxYWIwNzg2M2JiZDYwYjU3OTQ)) もしくは、twitter [#shinjukumokumoku](https://twitter.com/hashtag/shinjukumokumoku) にてご連絡ください。

## ToC

- Pitch
  - [Introduction, Closing](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku)
  - [Boardgame](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku/master?p=boardgame)
- Community
  - [slack](https://shinjuku-mokumoku.slack.com/) ([join from here](https://join.slack.com/t/shinjuku-mokumoku/shared_invite/enQtNDY1NzY4NzE2NzU0LTQ4OTI2NDEzNTcyNjMzZGE1MDM1M2FmN2IyMTUzNzkxOTI4NzUxYjAxMmQzMDIxYWIwNzg2M2JiZDYwYjU3OTQ)) もしくは、twitter [#shinjukumokumoku](https://twitter.com/hashtag/shinjukumokumoku))
  - [connpass group](https://shinjuku-moku.connpass.com/)
- Organize
  - [connpass event descritpion](connpass.md)
  - [organize workflow](ORGANIZE.md)

## Other Usage

Create event channel, reminder and poller

```sh
SLACK_API_TOKEN=<YOUR_SLACK_API_TOKEN> docker-compose run nodejs ./scripts/prepare.js <num_of_event>
```

Generate presenter order

```sh
docker-compose run node ./scripts/presenter.js <num_of_event>
```

Generate event template

```sh
docker-compose run node ./scripts/generateNextEvent.js
```

## FAQ

### How to get SLACK_API_TOKEN

https://api.slack.com/custom-integrations/legacy-tokens
