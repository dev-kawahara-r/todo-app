# Todo App - Project Overview

## Introduction
This document provides an overview of the Todo App project, its architecture, and technical specifications based on analysis of the codebase.

## Tech Stack

### Core Technologies
- **Framework**: Next.js (v15.1.7)
- **Runtime**: Bun (v1.2.2)
- **Authentication**: Clerk
- **Database ORM**: Drizzle ORM (configured but not implemented)
- **Deployment**: Cloudflare Pages (via @cloudflare/next-on-pages)
- **Styling**: Tailwind CSS

### Project Configuration
- **Module System**: ESM modules (`"type": "module"` in package.json)
- **TypeScript**: Configured with strict mode
- **Path Alias**: `@/*` maps to `./src/*`

## Project Structure
The project follows a standard Next.js App Router structure:

```
todo-app/
├── public/             # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/            # Next.js App Router components
│   │   ├── favicon.ico
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout with Clerk auth
│   │   └── page.tsx    # Home page
│   └── middleware.ts   # Clerk authentication middleware
└── [config files]      # Various configuration files
```

## Authentication
Authentication is handled by Clerk:
- Configured via ClerkProvider in the root layout
- Middleware protects all routes except static assets and Next.js internals
- API routes are always protected
- User interface includes SignInButton and UserButton components

## Current State
The application is currently in a boilerplate state:
- Basic Next.js setup with Clerk authentication
- Default Next.js landing page with modified styling
- No actual Todo functionality implemented yet
- Database layer is included as a dependency but not set up with schema or models

## Edge Runtime
The application is configured to use Edge Runtime:
- Both page.tsx and layout.tsx export `runtime = 'edge'` 
- Middleware is also set up to work with Edge Runtime (commented out)
- Configuration supports Cloudflare deployment

## Development Commands
```bash
# Install dependencies
bun install

# Start development server (with Turbopack on port 3002)
bun dev

# Build for production
bun build

# Start production server
bun start

# Run linting
bun lint
```