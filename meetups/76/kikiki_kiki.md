```
# @KiKiKi_KiKi

GitHub: @chaika-design (アカウント名変えようか迷い中:snail:)

## 会社や業務で普段やっていること

フリーのデザイナーっぽい何かをしています。
デザインとかUX設計とかDesignSystemの構築とかイラストとか北欧の歴史研究やってます。

## 相談乗れるかもしれないこと

- :cat2: Design
- :cat2: JavaScript (少し)
- :cat2: CSS

## 今日やること

- React hooks
- 関数型の本読みすすめたい [関数型プログラミングの基礎](https://amzn.to/341jSaR)

## 相談するかもしれないこと

関数型の数学的な質問

## 今日の成果

### React Hooks Portal

Portal は親コンポーネントのDOM外にコンポーネントを追加することができる  
`ReactDOM.createPortal(追加する要素, parentNode)`  

React Hooks 内で動的にコンポーネントを追加する parentNode を作成する場合は、 再描画時に、parentNode への参照が切れないように保持させる必要がある
  
:thumbsup:
​```js
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({children}) {
  const el = document.createElement('div');
  // useEffect 内で DOM を追加しているので、初期値が無いとエラーになる
  const [portal, setPortal] = useState(el);

  useEffect(() => {
    // DOM に parentNode を追加する
    const body = document.querySelector('body');
    body.appendChild(el);
    setPortal(el);
  }, []);

  return ReactDOM.createPortal(
    children,
    portal
  );
}
​```

次のような書き方は再描画の際に 親 Node への参照が切れてしまい Portal で追加したコンポーネントが描画されなくなる

:scream_cat:
​```js
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({children}) {
  const el = document.createElement('div');

  useEffect(() => {
    const body = document.querySelector('body');
    body.appendChild(el);
  }, []);

  return ReactDOM.createPortal(
    children,
    el
  );
}
​```

cf. 
- https://ja.reactjs.org/docs/portals.html
- https://qiita.com/yuuyun/items/7edc544361df3ec3455d
```

