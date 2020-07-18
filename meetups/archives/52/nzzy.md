# nzzy
https://connpass.com/user/nzzy/

## 会社や業務で普段やっていること
- 業務は社内SEのようなことをしています。
	- プログラムは一切書きません。
	- Excelガントチャート、PowerPointで会議資料、稟議書を書き、会議ばかりの毎日です。
- 家ではDebianいじってます。

## (option) 相談乗れるかもしれないこと

## 今日やること
- ELFとptraceを相手に自分専用のツールを作ります。 
- [Practical Binary Analysis](https://www.amazon.co.jp/gp/product/B07BPKWJVT) を読みます。

## (option) もしかしたら相談するかもしれないこと
- OSSのソース読みが得意な方いらっしゃいましたらお話したいです。

## 今日の成果
- gitpichの使い方を覚える
        -めっちゃ便利だと思った。MarkDown作って、github.comで公開するだけでさら>っとプレゼン作れる。
- [Practical Binary Analysis](https://www.amazon.co.jp/gp/product/B07BPKWJVT)を>第6章まで読む。だいたいkindleで220ページぐらい読んだ？
        - ELFの.got/.plt/.got.pltの仕組みがあらためてわかる。
        - GOTによるDynamicLinkingがセキュリティの要請からも必要であることがわか>った。
        - DisassemblyについてDynamic DisassemblyとかRecursive Disassemblyという>のがあり、その利点がわかった。
- ELFのdebigging symbol tableを読み下しできるライブラリの写経をした。
- ptraceで/bin/lsのsystem callトレースして、Writeシステムコールにフックするサンプルを書いた。
