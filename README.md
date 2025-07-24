## About

<!-- TODO: ブログへのリンクを入れる -->

2025/07/24 (Thu) に公開した「[Next.js Version Skew 真相究明編](https://www.wantedly.com/companies/wantedly/post_articles/991937)」というブログ記事で紹介している、実験のために利用したリポジトリです。

- `repro` ブランチで記事中で紹介した問題の再現ができます。
- `fix` ブランチでは該当の問題を修正しています

### 再現手順

`repro` ブランチでの症状確認方法は以下のとおりです。

- `yarn build && NODE_ENV=production node dist/index.js` で一度アプリケーションをビルドし、サーバーを起動する。
- ブラウザで `http://localhost:3000/foo` を開く
- ブラウザで表示されたページ中で以下の操作を確認する
  - foo ページ中の bar ページへのリンクをクリックして bar ページへ遷移すること
  - bar ページ中の `props` に現在時刻が表示されていること
  - bar ページから foo ページへの遷移が行えること
  - foo ページ中の `props` に現在時刻が表示されていること
- ターミナルに戻り、サーバーをストップする
- もう一度 `yarn build && NODE_ENV=production node dist/index.js` を実行してサーバーを起動し直す (別の buildId が付与されたサーバーを起動する)
- ブラウザに戻り、ページをリロードしないまま、 foo ページまたは bar ページへのリンクをクリックする
- このとき遷移先ページで `props` 表示が `{}` になってしまう
