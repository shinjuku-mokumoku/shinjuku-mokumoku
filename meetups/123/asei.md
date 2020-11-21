# Asei Sugiyama

## 会社や業務で普段やっていること

- Python と GCP
- 統計と機械学習周り

## 相談乗れるかもしれないこと

- 機械学習 (scikit-learn, LightGBM, TensorFlow)

## 今日やること

- NumPyro

## 相談するかもしれないこと

機械学習

## 今日の成果

- 統計学はなぜ哲学の問題になるのか https://youtu.be/Z8eyNzYeEeE
  - 頻度主義 vs 経験主義の論争で述べられた問題について、哲学の観点からの整理
  - 深層学習モデルを信頼することについて、哲学の観点からの整理
- [[1912.11554v1] Composable Effects for Flexible and Accelerated Probabilistic Programming in NumPyro](https://arxiv.org/abs/1912.11554v1)
  - JAX をバックエンドにつかった Pyro と類似したインターフェースの確率的プログラミングフレームワーク NumPyro の紹介
  - Pyro では Python で実装していた部分 (例: MCMC アルゴリズム) を JAX で実装
    - 例えばこのあたり [numpyro/hmc_util.py at master · pyro-ppl/numpyro](https://github.com/pyro-ppl/numpyro/blob/master/numpyro/infer/hmc_util.py)
  - NUTS の高速化に成功した
- [[1111.4246] The No-U-Turn Sampler: Adaptively Setting Path Lengths in Hamiltonian Monte Carlo](https://arxiv.org/abs/1111.4246)
  - MCMC を行う HMC の高速化を行った NUTS の提案
  - 動きの違いは [MCMC Interactive Gallery](http://chi-feng.github.io/mcmc-demo/app.html) がわかりやすい
- その他読んだもの
  - [ハミルトニアンモンテカルロ法の実装 - やったことの説明](https://ksknw.hatenablog.com/entry/2017/07/09/223817)
  - [サンプリング手法について(自分なりに)わかりやすく書くよ！ - Qiita](https://qiita.com/ysekky/items/16cd279c9be0dfb75217)
  - [多項式あてはめで眺めるベイズ推定~今日からきみもベイジアン~](https://www.slideshare.net/tanutarou/ss-80824894)
  - [可視化で理解するマルコフ連鎖モンテカルロ法(MCMC) - ほくそ笑む](https://hoxo-m.hatenablog.com/entry/20140911/p1)
  - [【統計学】マルコフ連鎖モンテカルロ法(MCMC)によるサンプリングをアニメーションで解説してみる。 - Qiita](https://qiita.com/kenmatsu4/items/55e78cc7a5ae2756f9da)
