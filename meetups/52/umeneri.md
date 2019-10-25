## 普段やってること
HR系会社にてscalaを用いたサーバーサイド、インフラの開発に従事しています。
[umeneriさんのプロフィール（申し込みイベント一覧） - connpass](https://connpass.com/user/umeneri/)

## 今日やること
- scala akka httpの勉強のためslack用bot開発

## もしかしたら相談するかもしれないこと(option)
* scala

## (option) 教えてもいいよという領域
* rails
* terraform
* elasticsearch


## 成果

---

# Akkaとは
- «resilient elastic distributed real-time transaction processing»
- Actorどうしがメッセージをやり取りするActor model
  - 他の例：Elixir
- 対応：java, scala

https://akka-ja-2411-translated.netlify.com/intro/what-is-akka.html

---

# Akka Httpとは
- ActorでHTTPのハンドリング
- Play framework(2.7)のバックエンドとしてデフォルトで使用されている

---
# 作ったもの
- SlackのEvent APIをつかって、echo botを作る

/slack/eventのパスに対してSlackのEventを待ち受ける

---

## 流れ
ユーザーがメッセージをチャネルに流す → SlackのEventApiが検知し、メッセージのEventをbotに送る

## bot仕様
- ユーザーからのメッセージに対しては、メッセージの内容をそのままSlackに流す
- 自分を含むbotのメッセージが来たら、なにもしない (statusCode:200)

---

# 中身：Akka HttpのRoutes

```scala
  lazy val slackEventRoute: Route =
    pathPrefix("slack") { // => /slack
      pathPrefix("event") { // => /event
        pathEnd {
          post { // => POST
            entity(as[ChallengeEvent]) { event =>
              complete(slackClient.verifyChallengeToken(event))
            } ~
              entity(as[CallbackEvent]) { callbackEvent =>
                callbackEvent.event match {
                  case v: MessageSlackEvent =>
                    onSuccess(replyEchoResponse(v)) { _ => complete("Ok") }
                  case _: BotMessageSlackEvent => complete("Ok")
                }
              }
          }
        }
      }
    }
```

---
# slack

