# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js (v15.1.7) todo application using:
- **Runtime**: Bun (v1.2.2)
- **Authentication**: Clerk
- **Database ORM**: Drizzle ORM
- **Deployment**: Cloudflare Pages (via @cloudflare/next-on-pages)
- **Styling**: Tailwind CSS

## Key Commands

```bash
# Install dependencies
bun install

# Development server (runs on port 3002)
bun dev

# Build for production
bun build

# Start production server
bun start

# Run linting
bun lint
```

## GitHub Integration

This repository supports Claude Code integration via AWS Bedrock. You can mention `@claude` in PR comments to trigger automated code changes. The integration is configured to use Claude 3.5 Sonnet v2 via AWS Bedrock.

## Architecture

### Authentication
- Clerk authentication is integrated via middleware at `/src/middleware.ts`
- The middleware protects all routes except static assets and Next.js internals
- API routes are always protected

### TypeScript Configuration
- Strict mode enabled
- Path alias configured: `@/*` maps to `./src/*`
- Target: ES2017 with modern DOM libraries

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/middleware.ts` - Clerk authentication middleware
- `/public/` - Static assets (SVG icons)

### Key Dependencies
- **next**: 15.1.7 - React framework
- **@clerk/nextjs**: 6.12.0 - Authentication
- **drizzle-orm**: 0.39.3 - Database ORM
- **@cloudflare/next-on-pages**: 1.13.7 - Cloudflare deployment adapter
- **wrangler**: 3.109.2 - Cloudflare CLI tool

### Development Notes
- The project uses ESM modules (`"type": "module"` in package.json)
- ESLint configured with Next.js recommended rules
- No test framework currently configured

## コード変更ポリシー

### リポジトリへのコード変更ルール
- main ブランチへの直接プッシュは行わないでください
- すべてのコード変更はプルリクエスト（PR）を通して行ってください
- PR作成後はレビュー依頼を行ってください
- PRが承認されてからマージしてください

### Claudeの永続的な指示
- 重要な指示を受けた場合は、このCLAUDE.mdファイルに追記してください
- これにより、すべてのClaudeインスタンスが今後の会話で指示を参照できるようになります
- 特に重要なコード変更や開発方針に関する指示を記録してください