![](/assets/images/shinjuku-mokumoku-banner-960x180.png)

[![CircleCI](https://circleci.com/gh/shinjuku-mokumoku/shinjuku-mokumoku.svg?style=svg)](https://circleci.com/gh/shinjuku-mokumoku/shinjuku-mokumoku)

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

過去の雰囲気 : [shinjuku-mokumoku](meetups)

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
- Wifi
  - [Repro](https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku/master?p=wifi/repro)
- Projects
  - [firebase](https://console.firebase.google.com/project/shinjuku-mokumoku/)

## Commands

Create event channel, reminder and poller

```sh
# on slack
/prepare <num>
```

Get channel id

```sh
# on slack
/get_channel_id <channel_name>
```

Generate presenter order

```sh
# on slack
/presenter <num>
```

Generate event template

```sh
docker-compose run node ./scripts/generateNextEvent.js
```

# Development

## TODO

- [ ] Replace creating pull-reqeust operation from systemcall to GitHub api
- [ ] Use gith hub oauth token insted of personal access token to create github api

## Getting Started for slash commands

[Install firebase cli and login](https://firebase.google.com/docs/cli/)

```sh
npm install -g firebase-tools
firebase login
# Check exits $HOME/.config/gcloud file
```

If you don't have slack api token, get api token from below and export these:

- https://api.slack.com/custom-integrations/legacy-tokens

```sh
export SLACK_API_TOKEN=your_api_token
export SLACK_SLASH_TOKEN_PREPARE=your_slash_command_token_for_prepare
export SLACK_SLASH_TOKEN_PRESENTER=your_slash_command_token_for_prepare
```

Run docker container

```sh
docker-compose run functions sh
```

### Debug

Run firebase function locally

```sh
npx --prefix functions run serve
```

Show firebase function logs

```sh
npm --prefix functions logs -- --only <function_name>
```

### Deploy

Set config for deploy

[if you haven't set some config, you should set config by blow command](https://firebase.google.com/docs/functions/config-env)

```sh
export SLACK_SLASH_TOKEN_PREPARE=<your_slack_slash_token>
export SLACK_SLASH_TOKEN_PRESENTER=<your_slack_slash_token>
export SLACK_API_TOKEN=<your_slack_api_token>

cd <project_root>
firebase functions:config:set \
slack.slash_token_prepare=$SLACK_SLASH_TOKEN_PREPARE \
slack.slash_token_presenter=$SLACK_SLASH_TOKEN_PRESENTER \
slack.api_token=$SLACK_API_TOKEN

firebase functions:config:get
# show setted configs
```

manually deploy

- always deploy automatically by circleci

```sh
cd functions && firebase deploy --only functions
```

## Getting Started for scripts

If you don't have slack api token, get api token from below and export as environment variables:

- https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line
  - allow access for `repo/public repo` only

```sh
export GITHUB_API_TOKEN=you_personal_github_token
```

Run container with sh

```sh
docker-compose run scripts sh
```
