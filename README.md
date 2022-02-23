# 部屋の状態可視化アプリケーション

このプロジェクトは部屋の温度、湿度、明るさを検出し、DB に登録します。ブラウザでは、DB に登録されているデータをグラフ化します。

利用技術は、フロントエンドには nuxt.js、サーバサイドには Node.js、DBには MySQL を利用しています。

このプロジェクトは GCP (Google Cloud Platform) で VM インスタンスを使用し、Docker環境を構築しています。その環境内で本プロジェクトを公開しています。 

## Setup
このプロジェクトでは開発時に Docker 環境で実行することを想定しています。また、 Windows ユーザーは WSL2 環境に Docker が利用可能できることを前提としています。

開発時は、 `docker-compose` により Node.js 環境と MySQL の環境が起動します。起動後、Node.js サービスに接続(`docker-compose exec node sh` コマンドを使用)し、サーバーを起動する流れとなります。
初回実行時は、 `npm install` による依存関係のインストールが必要です。

### 初回実行時

```bash
# イメージをビルドする
$ docker-compose build
# 開発環境用のサービスを起動する
$ bash run.sh up
# Node.js サービスに接続する
$ bash run.sh sh
# >>> コンテナに接続されます
# 依存関係のインストール
~/app $ npm install
# 開発環境モードでサーバを起動
# serve with hot reload at localhost:3000
~/app $ npm run dev
# 終了時
# [Ctrl] + [C]
~/app $ exit
# >>> コンテナ環境から抜け出します
# Docker サービスを終了する
$ bash run.sh down
```

### 開発時( 2 回目以降)

```bash
# 開発環境用のサービスを起動する
$ bash run.sh up
# Node.js サービスに接続する
$ bash run.sh sh
# >>> コンテナに接続されます
# 開発環境モードでサーバを起動
# serve with hot reload at localhost:3000
~/app $ npm run dev
# 終了時
# [Ctrl] + [C]
~/app $ exit
# >>> コンテナ環境から抜け出します
# Docker サービスを終了する
$ bash run.sh down
```

### 本番環境での起動

```bash
# VM インスタンス内で Docker 環境を構築後
# イメージをビルドする
$ docker-compose build
# 依存関係のインストール
$ npm install
# ビルドする（distフォルダが作成される）
$ npm run build
# サービスを起動する
$ bash run.sh up-prod
# 起動したコンテナの Log を確認
$ bash run.sh logs-prod
# Docker サービスを終了する
$ bash run.sh down-prod
```