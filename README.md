# Cookie Share between two hosts


## Overview

- ２つの異なるホスト（app1.domain.com, app2.domain.com）間でクッキー情報を共有するサンプル


## Setup

- `$ git clone https://github.com/dotnsf/cookie-share-app1`

- `$ cd cookie-share-app1`

- `http(s)://app1.domain.com` というホスト名で動作させる

  - `domain.com` 部分は環境変数 `DOMAIN` で設定する

- app2 側も起動する


## Run

- `http(s)://app1.domain.com/` と `http(s)://app2.domain.com/` をブラウザの異なるタブで起動する

- app1 の `Set nomally` ボタンをクリックしてから、app2 の `getMyCookie` ボタンをクリックする

  - app1 側で普通にクッキーを設定してから app2 側で同じクッキーの取得を試みている

  - 設定したクッキーが取得できないことを確認する（通常の挙動）

- app1 の `Set with domain` ボタンをクリックしてから、app2 の `getMyCookie` ボタンをクリックする

  - app1 側で工夫を伴うクッキーを設定してから app2 側で同じクッキーの取得を試みている

  - 設定したクッキーが取得できること（２つの異なるホスト間でクッキーの共有ができる）ことを確認する


## References

- [サブドメインの異なるサイトでクッキーを共有する](https://dotnsf.blog.jp/archives/1034926433.html)


## Licensing

This code is licensed under MIT.


## Copyright

2023  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
