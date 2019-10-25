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

- Rustの所有権を完全理解した
  - 移動、コピー、Rc/Arcなど、所有権に関する基礎的な概念と機能が理解できた
  - C++をちょっとかじったときに出てきたmoveセマンティクスがマジでイミフだったけど、rustだとそれなりに腑に落ちた（が、すぐに忘れる自信ある）
- 変数への値の代入に関して、rubyやpythonなどのプログラムとrustとの違いが理解できた
  - rubyの場合、代入は同じメモリ上へのオブジェクトへのポインタが作られる。C/C++だと、値がコピーされる。rustでは所有権が代入先のオブジェクトに移動し、代入元の変数は未初期化状態になるので参照するとエラーになる
