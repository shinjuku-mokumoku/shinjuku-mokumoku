# 今日やったこと
## CythonによるPythonコードの高速化
- 題材として、2分割線形フィットを用いた。
  - まず普通の線形フィットをCythonで高速化できるか試した。
    - この部分はうまくいった。
  - 次に、適当な点で二分割して2本の直線でフィットするアルゴリズムの高速化を試した。
    - この時に繰り返し処理が発生するため、ここをうまく並列化したかった。
    - OpenMPでの並列化を試みたが、記法の制限が強くうまくいかなかった。
    

---

# 1.普通の線形フィット : 実行内容
まずはnumpyで線形フィットを行う関数を作成し、これをcythonizeした。

```Python
import numpy as np

def py_linear_fit(x, y):
    N_ = len(x)
    y_ = np.array(y)
    X_ = np.vstack([x, np.ones(N_)]).T

    fit_results = np.linalg.lstsq(X_, y_)

    a_, b_ = fit_results[0]
    r2error_ = fit_results[1][0]

    return a_, b_, r2error_
```

---

# 1.普通の線形フィット：実装
```Python
cimport cython

import numpy as np
cimport numpy as np
from cython.parallel import prange

def linear_fit(np.ndarray[double, ndim=1] x, np.ndarray[double, ndim=1] y):
    cdef unsigned int N_ = len(x)
    cdef double[:,:] X_ = np.zeros([N_, 2])
    cdef double a_, b_, r2error_
    
    X_ = np.vstack([x, np.ones(N_)]).T

    fit_results = np.linalg.lstsq(X_, y, rcond=None)

    a_, b_ = fit_results[0]
    r2error_ = fit_results[1][0]

    output = np.array((a_, b_, r2error_))

    return output
```
基本的には、cdefにより指定してやる。

--- 
# 1.普通の線形フィット：実行結果
Cにコンパイルしたコードをcalculateとしてライブラリ化（コンパイルコードは割愛）。

$$y = 0.5x + 1.5$$
にランダムノイズ（標準偏差1の正規分布）を乗せたデータを作成し、
PythonオリジナルコードとCythonコードとでフィットを行った。

```Python
x = np.array([0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0])
y = 0.5 * x + 1.5 + np.random.randn()

start_t = time.time()
(a_py, b_py, error_py) = py_linear_fit(x,y)
time_py = time.time() - start_t

start_t = time.time()
output_cy = calculate.linear_fit(x, y)
time_cy = time.time() - start_t

print('# Normal Python')
print('running time :', time_py)

print('# Cython')
print('running time :', time_cy)
```

実行結果
```
# Normal Python
running time :0.0017087459564208984
# Cython
running time :0.000881195068359375
```
**2倍速くなった！**

---
#2. 2分割線型フィット：課題

```Python
(中略)
    for i in range(2, data_len-2):#分割点を指定するループ
        left_slope, left_r2error, right_slope, right_r2error = piece_wise_linear_fit(x, y, i)#適当な点で二分割して両切片を線形フィット

        results_dict[i] = ((left_slope, right_slope), (left_r2error, right_r2error))
        error_sum_list.append(left_r2error + right_r2error)

    optimal_index = np.argmin(error_sum_list)+2#最終的に二乗誤差が少なくなるフィットを採用
    fit_results = results_dict[optimal_index]

    return optimal_index, fit_results
```
forループ部分を並列化したい！

---

#2. 2分割フィット：試行

```Python
import numpy as np
cimport numpy as np
from cython.parallel import prange #OpenMPによる並列化

#(中略)
#ループ部分
    for i in prange(0, data_len-4, nogil=True):# GILを解除
        division_point = 2 + i

        for x_i in range(0, division_point+1):
            x_left[0] = 

        left_fit_result = linear_fit(x[0:division_point + 1], y[0:division_point + 1])
        right_fit_result = linear_fit(x[division_point:], y[division_point:])

        error_sum[i] = left_fit_result[2] + right_fit_result[2]

        for k in range(0,3):
            results_all[2*k] = left_fit_result[k]
            results_all[2*k+1] = right_fit_result[k]
#（以降略）
```
---
#2. 2分割フィット：実行結果

怒られた。。。
```
linear_plot_cython.pyx:36:8: Memoryview slices can only be shared in parallel sections

Error compiling Cython file:
------------------------------------------------------------
...

    for i in prange(0, data_len-4, nogil=True):
        division_point = 2 + i

        left_fit_result = linear_fit(x[0:division_point + 1], y[0:division_point + 1])
        right_fit_result = linear_fit(x[division_point:], y[division_point:])
       ^
------------------------------------------------------------
```
