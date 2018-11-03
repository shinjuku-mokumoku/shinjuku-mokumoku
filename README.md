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

# check-in & out

差し込み業務を回避するには強い意志！ということで、check-inにてやることを宣言し、check-outにて成果を発表します 💪

以下を参考に、自己紹介とやることの宣言を行うPull Requestを [shinjuku-mokumoku](https://github.com/shinjuku-mokumoku/shinjuku-mokumoku) の `meetups/<開催回数>/<あなたのお名前>.md` ([template](https://raw.githubusercontent.com/shinjuku-mokumoku/shinjuku-mokumoku/master/meetups/template.md)) へお出しください。

参考: https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/pull/137

> 💡 Pull Requestとは？その出し方は？
>
> - [Github help - About pull requests](https://help.github.com/articles/about-pull-requests/)
> - [Github help - Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)

gitやpull requestに不安な点がありましたら[shinjuku-mokumoku slack](https://shinjuku-mokumoku.slack.com/general)までご質問ください。

## ToC

- Pitch
  - [Introduction, Closing](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku)
  - [Boardgame](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku/master?p=boardgame)
- Community
  - [slack](https://shinjuku-mokumoku.slack.com/) ([join from here](https://join.slack.com/t/shinjuku-mokumoku/shared_invite/enQtNDY1NzY4NzE2NzU0LTQ4OTI2NDEzNTcyNjMzZGE1MDM1M2FmN2IyMTUzNzkxOTI4NzUxYjAxMmQzMDIxYWIwNzg2M2JiZDYwYjU3OTQ)) もしくは、twitter [#shinjukumokumoku](https://twitter.com/hashtag/shinjukumokumoku))
  - [connpass group](https://shinjuku-moku.connpass.com/)
- Organize
  - [connpass event descritpion](connpass.md)
  - [Organizer works](ORGANIZE.md)

## TODO

- [ ] run `npm prepare` on circleci workflow (need commit and push)

## Other Usage

Generate Presenter order

```sh
docker-compose run node node ./bin/presenter.js <num>
```

Generate Event template and set reminder and poller

```sh
SLACK_API_TOKEN=<YOUR_SLACK_API_TOKEN> \
SLACK_CHANNEL=<YOUR_SLACK_CHANNEL> \
docker-compose run node npm run prepare
```

Generate event template

```sh
docker-compose run node node ./bin/generateNextEvent.js
```

Set reminder and poller

```sh
SLACK_API_TOKEN=<YOUR_SLACK_API_TOKEN> \
SLACK_CHANNEL=<YOUR_SLACK_CHANNEL> \
docker-compose run node node ./bin/setReminderAndPoll.js
```
