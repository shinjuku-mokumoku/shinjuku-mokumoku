# murata

## 会社や業務で普段やっていること
- toC自社サービス開発で↓のようなことを
- ruby
- scala （難しすぎるやつは分かりません :innocent: ）
- 設計
- 要件定義
- TypeScript / React ( FE足りない時の片手間 )

## (option) 相談乗れるかもしれないこと
- 上記
- 以外にもラバーダッキングのアヒル代わりに話しかけてください

## 今日やること
- 開発環境 vim -> vscode など

## (option) もしかしたら相談するかもしれないこと

## 今日の成果
# vscodeに再入門しようとしたがsorbetと戯れていて一日が終わった

# vimに不満はない
- これまでずっとvim使ってた
- vscode の remote development が良すぎたので乗り換えを考える
    - vscode出た頃はvim pluginの痒いところに手が届かず乗り換えなかった
        - 今もだけど 😇 （ macro からの  `:normal @q`  とか、insert modeの  `ctrl-o p`  とか）
    - remote development があることでメリットが勝ったように感じた
        - docker上に開発環境を構築するとvimかemacsしか選択肢がなかったので
        - docker mount は遅い、 rsync 等でゴリゴリ頑張るのはなんだか気が引けた
    - ついでにscala書くときだけ立ち上げるintellijもvscodeに置き換えられたらいいな
        - ensimeを使う？
        - これは今日はやらない
# 目指したい状態
- remote(docker)側でsorbetのLSPが動いてて、client側のvscodeからattachしてruby開発
- vscode vim pluginの微妙な挙動の解決策を調べる（今回は時間足りず・・）
# vscodeでLSPサンプル動かす（ローカル）
- https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
- 動いた
# vscode remote developmentでLSPの恩恵を受ける（未完）
- わからん
    - vscode extensionとLSP設計思想への理解が浅く、ソースコードリーディングに手こずる 😔 
- 妄想していたのは
    - remoteでLSP serverが動いてて
    - clientは言語のランタイムなしでソースコード静的解析の恩恵が受けられる状態
- 適当にコマンド打ってれば幸せになれる時代ではないことが分かったのが収穫
    - 大変興味が湧いたので明日以降も続ける
# ターミナルとvimでsorbet
    ```
    # https://qiita.com/KtheS/items/0204045290372c26f82c
    
    # typed: true
    
    class Main
      # (2) sig アノテーションを利用するためT::Sigをextend:
      extend T::Sig
    
      # (3) メソッドにsigアノテーションを追加:
      sig {params(x: String).returns(Integer)}
      def self.main(x)
        x.length
      end
    
      # 引数がないメソッドはこうも書ける:
      sig {returns(Integer)}
      def no_params
        42
      end
    end
    
    Main.main('foo').times
    ```


    ```
    bundle init
    nvim Gemfile
    bundle install --path vendor/bundle --without staging production --jobs=4
    bundle exec srb
    bundle exec srb typecheck -e 'puts "Hello, world!"'
    No errors! Great job.
    bundle exec ruby -e 'puts(require "sorbet-runtime")'
    true
    bundle exec srb init
    bundle exec srb tc
    foo/main.rb:20: Method hoge does not exist on Integer https://srb.help/7003
        20 |Main.main('foo').hoge
            ^^^^^^^^^^^^^^^^^^^^^
    Errors: 1
    ```
# sorbetのビルド
- sorbetのLSPは現状sorbetをビルドしないとできない？
    -  `srb tc --lsp` オプションがあったけど今の所ファイル1つしか監視できないみたい
- sorbetのbuildにbazelがいるようなのでインストール


    ```
    # bazel
    # https://docs.bazel.build/versions/master/install-ubuntu.html
    curl -OL https://github.com/bazelbuild/bazel/releases/download/0.28.1/bazel-0.28.1-installer-linux-x86_64.sh
    # ここでキーボードのxが反応悪くなる・・・・
    chmod +x ./bazel-0.28.1-installer-linux-x86_64.sh
    ./bazel-0.28.1-installer-linux-x86_64.sh
    ./bazel-0.28.1-installer-linux-x86_64.sh --user
    ```


    ```
    # http://mjhd.hatenablog.com/entry/2019/06/22/122637
    root@8b51b565034b: bazel build //main:sorbet --config=release-linux
    WARNING: The following configs were expanded more than once: [static-libs, lto, debugsymbols, versioned, lto-linux, release-common]. For repeatable flags, repeats are counted twice and may lead to unexpected behavior.
    INFO: Invocation ID: 0d67fd7a-cb35-4461-bc5f-742a69fe180f
    ERROR: Analysis of target '//main:sorbet' failed; build aborted: no such package '@llvm_toolchain//': Traceback (most recent call last):
            File "/root/.cache/bazel/_bazel_root/0de782f9bd4bec9f381fd9bb0d9901f1/external/com_grail_bazel_toolchain/toolchain/internal/configure.bzl", line 87
                    _download_llvm_preconfigured(rctx)
            File "/root/.cache/bazel/_bazel_root/0de782f9bd4bec9f381fd9bb0d9901f1/external/com_grail_bazel_toolchain/toolchain/internal/llvm_distributions.bzl", line 86, in _download_llvm_preconfigured
                    fail(("Unknown LLVM release: %s\nPlea...))
    Unknown LLVM release: clang+llvm-8.0.0-x86_64-linux-gnu-debian8.tar.xz
    Please ensure file name is correct.
    INFO: Elapsed time: 0.286s
    INFO: 0 processes.
    FAILED: Build did NOT complete successfully (0 packages loaded, 0 targets configured)
        Fetching @llvm_toolchain; fetching
        Fetching ; Cloning b0b3e49a54ec29e32636f4577d9d5a896d67fd20 of https://github.com/jemalloc/jemall\
    oc.git
    ```


- llvm_distributions.bzl がどうとか言われる。


    ```
    # llvm_distributions.bzl
    
     64 def download_llvm_preconfigured(rctx):
     65     llvm_version = rctx.attr.llvm_version
     66
     67     url_base = []
     68     if rctx.attr.llvm_mirror:
     69         url_base += [rctx.attr.llvm_mirror]
     70     url_base += ["https://releases.llvm.org"]
     71
     72     if rctx.attr.distribution == "auto":
     73         exec_result = rctx.execute([
     74             rctx.path(rctx.attr._llvm_release_name),
     75             llvm_version,
     76         ])
     77         if exec_result.return_code:
     78             fail("Failed to detect host OS version: \n%s\n%s" % (exec_result.stdout, exec_result.st    derr))
     79         if exec_result.stderr:
     80             print(exec_result.stderr)
     81         basename = exec_result.stdout.strip()
     82     else:
     83         basename = rctx.attr.distribution
     84     basename = "clang+llvm-8.0.0-x86_64-linux-gnu-ubuntu-18.04.tar.xz" # <- add
     ```

 `* FROM buildpack-deps:stretch ← ベース debian` 


    ```
    root@8b51b565034b: bazel build //main:sorbet --config=release-linux
    WARNING: The following configs were expanded more than once: [static-libs, lto, debugsymbols, versioned, lto-linux, release-common]. For repeatable flags, repeats are counted twice and may lead to unexpected behavior.
    INFO: Invocation ID: 3621834d-094d-4679-b6d1-ace05324d002
    INFO: Analysed target //main:sorbet (0 packages loaded, 0 targets configured).
    INFO: Found 1 target...
    ERROR: /root/.cache/bazel/_bazel_root/0de782f9bd4bec9f381fd9bb0d9901f1/external/parser/BUILD.bazel:16:1: Executing genrule @parser//:gen_cpp_diagnostics failed (Exit 127)
    /usr/bin/env: 'ruby': No such file or directory
    Target //main:sorbet failed to build
    Use --verbose_failures to see the command lines of failed build steps.
    INFO: Elapsed time: 77.607s, Critical Path: 14.27s
    INFO: 167 processes: 167 local.
    FAILED: Build did NOT complete successfully
    ```


- rubyが見つからない・・


    ```
    $ rbenv install 2.4.0
    $ cat .ruby-version
    2.4
    $ rm .ruby-version
    $ echo "2.4.0" > .ruby-version
    # エラー変わらず
    $ nvim /etc/bash.bashrc # anyenvで入れてるrubyのパス通してみる
    # エラー変わらず
    $ apt-get install ruby
    ```


    ```
    root@8b51b565034b: bazel build //main:sorbet --config=release-linux
    WARNING: The following configs were expanded more than once: [static-libs, lto, debugsymbols, versioned, lto-linux, release-common]. For repeatable flags, repeats are counted twice and may lead to unexpected behavior.
    INFO: Invocation ID: 57085a26-8230-4d83-87c6-5d3c30b293a8
    INFO: Analysed target //main:sorbet (0 packages loaded, 0 targets configured).
    INFO: Found 1 target...
    [678 / 724] 4 actions, 3 running
        Compiling dsl/MixinEncryptedProp.cc [for host]; 5s local
        Compiling dsl/Rails.cc [for host]; 2s local
        Compiling core/Names_gen.cc [for host]; 0s local
        [-----] Compiling third_party/licenses/licenses.cc [for host]
    ```


    ```
    root@8b51b565034b: bazel build //main:sorbet --config=release-linux
    WARNING: The following configs were expanded more than once: [static-libs, lto, debugsymbols, versioned, lto-linux, release-common]. For repeatable flags, repeats are counted twice and may lead to unexpected behavior.
    INFO: Invocation ID: 57085a26-8230-4d83-87c6-5d3c30b293a8
    INFO: Analysed target //main:sorbet (0 packages loaded, 0 targets configured).
    INFO: Found 1 target...
    [787 / 788] Linking main/sorbet; 22s local
    ```

August 10, 2019, 4:39 PM 

    ```
    root@8b51b565034b: bazel build //main:sorbet --config=release-linux
    WARNING: The following configs were expanded more than once: [static-libs, lto, debugsymbols, versioned, lto-linux, release-common]. For repeatable flags, repeats are counted twice and may lead to unexpected behavior.
    INFO: Invocation ID: 57085a26-8230-4d83-87c6-5d3c30b293a8
    INFO: Analysed target //main:sorbet (0 packages loaded, 0 targets configured).
    INFO: Found 1 target...
    Target //main:sorbet up-to-date:
      bazel-bin/main/sorbet
    INFO: Elapsed time: 630.883s, Critical Path: 240.61s
    INFO: 557 processes: 557 local.
    INFO: Build completed successfully, 612 total actions
    ```

🎉 


- 動いているような気がする
    ```
    root@8b51b565034b: ./sorbet --lsp .
    Error running Watchman (with `watchman -j -p--no-pretty`).
    Watchman is required for Sorbet to detect changes to files made outside of your code editor.
    Don't need Watchman? Run Sorbet with `--disable-watchman`.
    
    root@8b51b565034b: ./sorbet --disable-watchman --lsp .
    ```

