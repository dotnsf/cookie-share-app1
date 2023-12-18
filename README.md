# Cookie Share between two hosts


## Overview

- ２つの異なるホスト（app1.domain.com, app2.domain.com）間でクッキー情報を共有するサンプル


## Setup

### app1, app2 共通

- `$ git clone https://github.com/dotnsf/cookie-share`

- `$ cd cookie-share`

### app1（クッキー設定側）

- `app1.domain.com` というホスト名で動作させる前提とする

  - `domain.com` 部分は環境変数で設定する

- `$ cd app1`

- 環境変数 `DOMAIN` に `domain.com` を指定して起動し、`app1.domain.com` で接続できるようにする


### app2（クッキー取得側）

- `app2.domain.com` というホスト名で動作させる前提とする

- `$ cd app2`

- `app2.domain.com` で接続できるように起動する


## References

- [サブドメインの異なるサイトでクッキーを共有する](https://dotnsf.blog.jp/archives/1034926433.html)


## Licensing

This code is licensed under MIT.


## Copyright

2023  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
