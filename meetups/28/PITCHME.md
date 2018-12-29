### こんにちは！

admo @ Shinjukuもくもくプログラミング 

Dec 29, 2018

---

# だれ？

* インフラとか情シス系のエンジニア
* [**もくもくスタディ**](https://mokumokustudy.connpass.com/) 主催/運営中

https://mokumokustudy.connpass.com/

機械学習、プロコン/競プロ、インフラ など。
 
参加者、会場提供絶募集中です！

---

![作りながら学ぶReact入門](https://camo.githubusercontent.com/0469c52b142c92f72ea212172644e1a5e126f53f/687474703a2f2f7777772e736875776173797374656d2e636f2e6a702f70726f64756374732f37393830696d672f353037352f612e6a7067)

https://github.com/yuumi3/react_book

---

```
-    "start": "webpack-dev-server",
+    "start": "webpack-dev-server --mode development",
```
```
$ npm start
```

http://localhost:8080/

---

* コンポーネント
Props -> コンポーネント -> Building HTML
  * State
  * react awesome component
  * https://js.coach/

* フォーム
  * Controlled Components（リアルタイム対応）
  * Uncontrolled Components（入力の処理はブラウザ任せ,シンプル）

---

* ルーティング for SPA  
HTML5で履歴(history)オブジェクトに追加されたpushState()メソッドを使う:React Router
* テスト
  * Mocha(like RSpec)
  * Assertion Library
    * nodejs標準
    * Chai(like RSpec) as assertion library
  * stub  
    Sinon.JS
  * E2E  
    Nightmare(based on PhantomJS -> Electron)

---

* MVC solutions(Redux)  
Actions, Components, Containers, Reducers
* Flowtype
* React Native   
Facebook, Instagram and Airbnb are using.
 
---

![](https://images-fe.ssl-images-amazon.com/images/I/51oxM2UYQAL.jpg)

---

* http://kangax.github.io/compat-table/es6/
* Babel(based on Node.js)
```
babel basic.es6.js -o basic.js --presetses2015
babel -w basic.es6.js -o basic.js --presetses2015
```
-wオプションはbasic.es6.jsの変更を監視して変更都度の変換処理を実行する。
* Polyfillの有効化(Promiseなど）
* [簡易インタプリタ](https://babeljs.io/repl/)

---

# 文法
* ブロックスコープ  
```
if (true) {
  let i = 1;
}
```
-> 即時関数は利用しない
* Symbol型
定数値、非公開なプロパティの定義
* 引数のデフォルト値
* 可変長引数
* アロー関数

---
# Promise
It could be solution for callback hell

```
newPromise((resolve,reject)=>{statements})  
resolve：処理の成功を通知するための関数  
reject：処理の失敗を通知するための関数  
statements：処理本体
```

```
then(succcess,failure)  
success：成功コールバック関数  
failure：失敗コールバック関数
```

* allメソッド
* raceメソッド
---
# Proxy
オブジェクトの標準的な操作をアプリ独自の操作で差し替える。
```
newProxy(target,handler)  
target：操作を差し挟む対象のオブジェクト（ターゲット）  
handler：ターゲットの操作を定義したオブジェクト（ハンドラー）
```
---
* ハンドラーメソッド（トラップ）
  * get function(target, prop, receiver) -> any
  * set function(target ,prop, val, receiver) -> boolean
  * enumerate function(target) -> [String]
  * interate function(targrt) -> iterator
  * deleteProperty function(target, prop) -> boolean
---
* コレクション(Map/Set)
Objectに対して、
  * 任意の型でキー設定できる
  * マップのサイズをsizeプロパティで取得できる
  * クリーンなマップを作成できる
* WeakMap/WeakSet
* Unicode対応
  * サロゲートペア
  * エスケープシーケンスが拡張（\u{codepoint}）
---
* Stringオブジェクト
  * fromCodePoint
  * raw`str`
  * codePointAt(pos)
  * normalize([form])
  * repeat(num)
  * startsWith(search[,pos])
  * endsWith(search[,pos])
  * includes(search[,pos])
---
* Arrayオブジェクト
  * *from
  * *of
  * copyWithin
  * find
  * findIndex
  * fill
  * keys
  * values
  * entries

---

* Object
* class
* 組み込みオブジェクを継承可能に
* イテレータ
* モジュール  
import 
* Browserify(babelify)
require関数をブラウザでも利用できるように変換する

---

# 感想

* 流れがわかった！
* 本番で動かすには？
* Babelすごいなー
* Promiseがなんとなくわかった
* GitPitch しんどい

---

おわり
