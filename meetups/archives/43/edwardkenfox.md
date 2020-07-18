# edwardkenfox

- https://twitter.com/EdwardKenFox
- https://github.com/edwardkenfox/

## 会社や業務で普段やっていること

ReproのWeb SDKの開発・保守

## (option) 相談乗れるかもしれないこと

- Web全般
- ブラウザ、JavaScript
- Ruby/Rails

## 今日やること

- Rust

## (option) もしかしたら相談するかもしれないこと

- Rust

## 今日の成果

学んだこと・思ったことのメモ

- trait: 型パラメータに追加してtraitを指定することで、ジェネリック関数が受け取る型の振る舞いを確約することができる
  - https://doc.rust-jp.rs/the-rust-programming-language-ja/1.6/book/traits.html
- unit型: `()` でunit型を表し、値は `()` しかない。返り値がないときにこれを返す。`void`（あと`nil`も？）に近いもの。
  - https://doc.rust-lang.org/std/primitive.unit.html
  - 空のタプルってことらしい
  - 意味のある値を渡す必要がないにもかかわらずコンテキストが何らかの型を要求する場合にunit型を用いる
- 次のような省略記法がある

```rs
// before
let output = match File::create(filename) {
  Ok(f) => { f }
  Err(e) => { return Err(e); }
};

// after
let output = match File::create(filename)?;
```

- Rustは型推論が強い
- ジェネリクスを使うと抽象度が高い分プログラムの効率は落ちそうなイメージがあるけど、Rustではそうならないのはコンパイラが優秀だから？
- 配列の要素はすべて同じ型でなければならない
- 実行時に長さを変更できる配列が欲しいなら配列ではなくベクタを使う必要がある
