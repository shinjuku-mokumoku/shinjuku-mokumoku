# オーガナイザーのお仕事

## イベントの準備

以下はイベント終了後に以下の作業が速やかに完了していることが望ましい。

1. github
    1. 翌々回までのイベントの準備を行う
    1. KPTの結果を反映したREADME.md, PITCHME.md, PITCHME.yaml, template.md をcopyしたディレクトリを作成
1. connpass
    1. githubで作成されたREADME.mdを元に、翌々週までのイベントを作成
    1. 募集開始は開催週の頭（日曜日の日中帯）にする

## イベント前日

明日開催される旨や、参加者は事前に自己紹介PRを出しておいてほしい旨のリマインド

subject: 明日はshinjukuもくもくプログラミングです！

To: Event Admins, Presenter, Attendees, Waitlist

Body:

```
明日はshinjukuもくもくプログラミングです！

参加頂く方は以下を参考に、自己紹介とやることの宣言を行うPull Requestを shinjuku-mokumoku repo(https://github.com/shinjuku-mokumoku/shinjuku-mokumoku) の `meetups/<開催回数>/<あなたのお名前>.md` へお出しください。

参考: https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/pull/137

Pull Requestで不明瞭な点がありましたら、connpassのpageを御覧ください。
やり方がわからない部分がありましたら、slackにて質問いただいても大丈夫です。

皆様のご来場をお待ちしております✨
```

## イベント当日の作業

随時マージ権を持っている方はPRのマージ作業を行ってください。

1. 10:30
    1. 集合、会場設営の開始
    1. 以下のreminderを設定
        1. `/remind #general "@here もうすぐlunch時間です! ランチアンケートへの回答お願いします :pray:" at 12:55`
        1. `/remind #general "@here checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:" at 16:00`
1. 10:45
    1. 集まりが悪い場合は少し(5-10min程度) 開始を遅らせる
    1. 会の趣旨説明と自己紹介のファシリテート
    1. 参加者の出欠をattendance登録
    1. lunch pollerのpost
1. 13:00
    1. ランチのファシリテート
1. 17:00
    1. 発表のファシリテート
    1. KPTのファシリテート
        1. 初参加の人には必ず聞くように
        1. 時間の許す限りなるべく全体から意見を設けたい
1. 18:00
    1. 原状復帰
    1. 翌々回までのイベント準備

## lunch post

ランチ募集

```
/poll 'ランチ案' 'タンタポッカ(イタリアン)' '高瀬(懐石・寿司)' 'バーガーズベース' '野菜を食べるカレーcamp' '山翠楼(中華)' 'オフィスにいます'
```

```
ランチのお店の詳細
https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md

```
