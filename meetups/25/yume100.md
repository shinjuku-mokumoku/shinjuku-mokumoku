# <yume100>

## javaを使った大規模webアプリケーションの保守、運用。使用しているFWはStruts,最近、Springbootを使った開発も行っている


## 今日やること
###　※以前プルリクした内容から変更します。
### Botアプリを作るための基礎学習
### ・Netlifyを使うための勉強：Node.jsの基礎学習。
### ・インプットして、実際に手を動かしてみる

##今日の成果
###本日学習した内容について、ブログ記事にかけるように下書きしました。
###URLも取得済み
###内容のサンプル
###■Node.jsについて

Node.jsってそもそもどんなもの？
→結論から言ってしまうとサーバーサイドで使えるjavaScript

javaScriptというとホームページに動きを加えるものというイメージが先行すると思います。

Node.jsとはサーバーサイドで動くjavaScriptです。
これを勉強して学んだことについて、簡単にメモしておきます。

●node.jsでhello!Worldを出力するサンプルコード

・コンソールに直接出力
console.log("Hello World");
このコードをhelloworldで保存して実行


・サーバーにHTTPリクエストを送信し、ブラウザから出力

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

これをhelloworldに上書き保存して実行

##これはごく一部です。
