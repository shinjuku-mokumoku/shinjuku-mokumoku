# yokina

## 会社や業務で普段やっていること
 - スマートロックの開発

## (option) 相談乗れるかもしれないこと
 - ワカラナイ

## 今日やること
 - 現状のスマートロック認証サーバとクライアントサーバでOpenID connectのポリシー違反のところをリストアップ

## (option) もしかしたら相談するかもしれないこと

## 今日の成果

#  ポリシー違反一覧

## Authorization Code FlowをHybrid Flowにする

OpenID connectはresponse_typeごとにアクセストークン(とIDトークン)の発行手順が異なっており
そのresponse_typeはクライアントサーバの挙動によって変わる
うちはBackendServerありのNativeAppを使いたいので
response_typeはバックエンドと認証サーバ間でcodeとアクセストークンの引き換えをする
「code token」をサポートしなければならないが、現実装は「code」フローのみサポートしている

## IDトークンの検証

RP(client server)で期間と署名のチェックがされていない(jwt gem をためす)

## client_id

client_idが一意固定になっているので、アプリごとに別々のclient_idを振る


## Authorization Endpoint をGET,POST双方対応する

>Authorization Server は Authorization Endpoint において RFC 2616 [RFC2616] で定義された HTTP GET メソッドと HTTP POST メソッドをサポートしなければならない (MUST)

http://openid-foundation-japan.github.io/openid-connect-core-1_0.ja.html#QuerySerialization

GETしかサポートしていない

## revoke
https://openid-foundation-japan.github.io/rfc7009.ja.html

現時点では取り消しエンドポイントは実装していない

mustではないが、設計する時どう消込するか決めたほうがやりやすいかも


## Django OAuth ToolkitとOAuthLibを試す

auth,tokenのエンドポイントを簡単に実装出来るらしい

ドキュメント確認までしかいけなかった…