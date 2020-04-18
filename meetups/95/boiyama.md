# @boiyama

![](https://avatars2.githubusercontent.com/u/12344093?s=100&v=4)

## 会社や業務で普段やっていること
コーポレートエンジニア的なこと

## (option) 相談乗れるかもしれないこと
- React, Hyperapp
- JavaScirpt, TypeScript, Elm
- AWS, GCP
- GAS
- Salesforce

## 今日やること
- Rust The Book を進める

## (option) もしかしたら相談するかもしれないこと
- Rust

## 今日の成果
### [6. Enums and Pattern Matching](https://doc.rust-lang.org/book/ch06-00-enums.html)
- Rust の列挙型は Haskell の代数的データ型に近い
- たしかに
```rust
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);

let loopback = IpAddr::V6(String::from("::1"));
```
- よってイケてるパターンマッチ機能がある
```rust
enum UsState {
   Alabama,
   Alaska,
}

enum Coin {
   Penny,
   Nickel,
   Dime,
   Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        },
    }
}
```
- ちゃんとパターン網羅しなければエラーになる
- _プレースホルダもある

### [7. Managing Growing Projects with Packages, Crates, and Modules](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)
- ライブラリの話
- モジュールの作り方
- モジュールはツリー構造にできる
- モジュールの関数を呼び出す時のパス指定は絶対パスと相対パスがある
```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::add_to_waitlist();
}
```
- super で親モジュールの相対パス指定
```rust
fn serve_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::serve_order();
    }

    fn cook_order() {}
}
```
- 定義と呼び出しを今後どう移動する可能性があるかどうかで使い分ける
- use でパスをスコープに追加して冗長な記述を減らす
```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}
```
- Rustの慣習として、関数は直でスコープにいれないが、構造体、列挙型は直でスコープにいれる。強い理由はないらしい。
```rust
use crate::front_of_house::hosting::add_to_waitlist;

pub fn eat_at_restaurant() {
    add_to_waitlist();
    add_to_waitlist();
    add_to_waitlist();
}
```
```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(1, 2);
}
```
- as キーワード
```rust
use std::fmt::Result;
use std::io::Result as IoResult;
```
- ネステッドパス
```diff
- use std::io;
- use std::cmp::Ordering;
+ use std::{cmp::Ordering, io};

- use std::io;
- use std::io::Write;
+ use std::io::{self, Write};
```
- Glob
```rust
use std::collections::*;
```
- mod でブロックを使わずセミコロンを使うと、モジュールと同じ名前の別のファイルからモジュールのコンテンツをロードする

lib.rs
```rust
mod front_of_house;

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}
```
front_of_house.rs
```rust
pub mod hosting;
```
front_of_house/hosting.rs
```rust
pub fn add_to_waitlist() {}
```
