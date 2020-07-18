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

RustとJSで類似しているところ

### 1. struct への代入記法

```rs
struct User {
    age: i32,
    name: str
}
```

#### A)

```rs
User { age: 20, name: 'Alice' }
```

#### B)

```rs
let age = 20;
let name = 'Alice'

User { age, name }
```

### 2. Result は Promise っぽい

```rs
enum Result<T, E> {
   Ok(T),
   Err(E),
}
```

https://doc.rust-lang.org/std/result/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
