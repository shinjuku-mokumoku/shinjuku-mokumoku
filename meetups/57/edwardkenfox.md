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

- 生存期間パラメータ、なるほど分からん
- 参照と生存期間ムズい
  - 参照には共有参照と可変参照の2種類がある
    - 共有参照が借用した値は読み出しのみのアクセスになる
    - 可変参照で借用した値は、その参照を通じてのみアクセスすることができる
- いかに普段自分がRuby/JavaScriptを書くときに富豪的にメモリを使っているか身にしみた

```rb
def extend(collection, slice)
  slice.each do |elt|
    collection.push(elt)
  end
  return collection
end

arr = ("a".."c").to_a
extend(arr, ["d", "e"]) # OK
extend(arr, arr[0..-1]) # OK

arr == ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"]
arr[0].object_id == arr[0..-1][0].object_id
```

```rs
fn extend(vec: &mut Vec<f64>, slice: &[f64]) {
  for elt in slice {
    vec.push(*elt);
  }
}

let mut wave = Vec::new();

extend(&mut wave, &vec![0.0, 1.0]); // OK
extend(&mut wave, &wave[0..1]);     // error[E0502]: cannot borrow `wave` as immutable because it is also borrowed as mutable
```
