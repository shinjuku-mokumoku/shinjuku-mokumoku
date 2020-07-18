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
- Rust The Book を進める (11章〜)

## (option) もしかしたら相談するかもしれないこと
- Rust

## 今日の成果
### [11. Writing Automated Tests](https://doc.rust-lang.org/book/ch11-00-testing.html)
- 公式がテストツールを同梱
- 公式によって単体テスト、統合テストの定義が決められている
- 単体テストはモジュール単位、プライベートインターフェイスをテスト可能で、`src`ディレクトリに配置する
- 統合テストはライブラリの外部、複数モジュールをまたいで実行でき、`tests`ディレクトに配置する
- モジュールに`#[cfg(test)]`アノテーションを付けるとテスト時のみコンパイルされる
- 関数に`#[test]`アノテーションを付けるとテスト関数になる
```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```
- `cargo test`でテスト実行
```sh
$ cargo test
running 1 test
test tests::it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```
- expected, actual は left, right で表現されるので、引数の順番に意味がない
```sh
$ cargo test
running 1 test
test tests::it_adds_two ... FAILED

failures:

---- tests::it_adds_two stdout ----
thread 'main' panicked at 'assertion failed: `(left == right)`
  left: `4`,
 right: `5`', src/lib.rs:11:9
```
- デフォルトではスレッドを使用して並行して実行される
- 並行したくない時はスレッド数を1にする: `cargo test -- --test-threads=1`
- 合格時の出力も表示: `cargo test -- --show-output`
- 実行するテストを関数名部分一致でフィルタリングできる
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_two_and_two() {
        assert_eq!(4, add_two(2));
    }

    #[test]
    fn add_three_and_two() {
        assert_eq!(5, add_two(3));
    }

    #[test]
    fn one_hundred() {
        assert_eq!(102, add_two(100));
    }
}
```
```sh
$ cargo test add
running 2 tests
test tests::add_three_and_two ... ok
test tests::add_two_and_two ... ok
```
