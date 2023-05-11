# Voronoi Map

位置情報ゲーム「駅メモ」のツールサイトの開発リポジトリ

<img src="./public/ogp.png">

## 開発

### セットアップ

1. Maps JavaScript API keyをGoogle Cloud Consoleから取得する
2. API keyは.gitignoreに指定されている`.env.development.local`に追加する

```txt
REACT_APP_API_KEY=${API_KEY}
```

### 開発用サーバの立ち上げ
```bash
npm run start
```

### Build

Githubのmainブランチにpushするとgh-pageワークフローが自動でビルド＆デプロイします. 手動起動も可能です.

## 技術スタック
<img src="https://user-images.githubusercontent.com/25225028/96458500-f5cb5700-125b-11eb-901c-1aaf0653f999.jpg" height="100"/><img src="https://user-images.githubusercontent.com/25225028/108220336-f9270e80-7179-11eb-9091-c234b1e045be.png" height="100"/><img src="https://user-images.githubusercontent.com/25225028/96458574-0bd91780-125c-11eb-8307-05d60bf3f5f0.png" height="100"/><img src="https://user-images.githubusercontent.com/25225028/96458641-1b586080-125c-11eb-80dd-65ce67712f81.png" height="100"/>


- React + TypeScript による高速開発
- Maps JavaScript API による地図表示機能
- Github Page でホスティング

## 使用データ
このwebアプリで使用しているデータは[このリポジトリ](https://github.com/Seo-4d696b75/station_database)で管理されています。
