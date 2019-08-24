# Sugiyama

## 会社や業務で普段やっていること

- Python と GCP
- 統計と機械学習周り

## (option) 相談乗れるかもしれないこと

- 機械学習 (scikit learn とか、LightGBM とか)

## 今日やること

1. 自然言語処理の論文を読む

## 今日の成果

- [A Structural Probe for Finding Syntax in Word Representations](https://nlp.stanford.edu/pubs/hewitt2019structural.pdf) を読んだ
  - BERT や ELMo が学習した特徴量の部分空間を見てみると、構文木のような構造が見つけられた、という論文
  - 構文木のノード間の距離と特徴量との距離を比較した
  - 構文木を埋め込むときに、ユークリッド空間上の距離の2乗で近似した方が単純に距離を使うよりもなぜか良かったが理由はわからない、としている
- [Visualizing and Measuring the Geometry of BERT](https://arxiv.org/pdf/1906.02715.pdf)
  - 距離の2乗を使うほうが良いという理論的な証明を与えている
  - 同じような実験を行い、確かに構文木的な構造を学習していることを確認した
