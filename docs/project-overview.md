# Todo アプリケーション - プロジェクト概要

## プロジェクト構成

このプロジェクトは、Next.js (v15.1.7) を使用したTodoアプリケーションです。

### 技術スタック

- **フレームワーク**: Next.js v15.1.7
- **ランタイム**: Bun v1.2.2
- **認証**: Clerk
- **データベースORM**: Drizzle ORM
- **デプロイメント**: Cloudflare Pages (via @cloudflare/next-on-pages)
- **スタイリング**: Tailwind CSS

### プロジェクト構造

```
/
├── public/            # 静的アセット (SVGアイコンなど)
├── src/
│   ├── app/           # Next.js App Router ページとレイアウト
│   │   ├── layout.tsx # ルートレイアウト (クラーク認証を含む)
│   │   ├── page.tsx   # メインページ
│   │   └── globals.css # グローバルスタイル
│   └── middleware.ts  # Clerk認証ミドルウェア
└── CLAUDE.md          # プロジェクト指示
```

### 主要コマンド

```bash
# 依存関係のインストール
bun install

# 開発サーバー (port 3002)
bun dev

# 本番用ビルド
bun build

# 本番サーバー起動
bun start

# リント実行
bun lint
```

## アーキテクチャ

### 認証

- Clerk認証は `/src/middleware.ts` のミドルウェアを通じて統合されています
- ミドルウェアは静的アセットとNext.jsの内部を除くすべてのルートを保護します
- APIルートは常に保護されています

### TypeScript設定

- 厳格モード有効
- パスエイリアス設定: `@/*` は `./src/*` にマッピング
- ターゲット: ES2017（モダンDOMライブラリ使用）

## 依存関係

### 主要依存関係

- **next**: 15.1.7 - Reactフレームワーク
- **react**: 19.0.0 - UIライブラリ
- **@clerk/nextjs**: 6.12.0 - 認証
- **drizzle-orm**: 0.39.3 - データベースORM
- **tailwindcss**: 3.4.1 - CSSフレームワーク
- **@cloudflare/next-on-pages**: 1.13.7 - Cloudflareデプロイメントアダプター
- **wrangler**: 3.109.2 - Cloudflare CLIツール

## 開発ノート

- プロジェクトはESMモジュールを使用（package.jsonに`"type": "module"`）
- ESLintはNext.jsの推奨ルールで設定
- 現在テストフレームワークは未設定