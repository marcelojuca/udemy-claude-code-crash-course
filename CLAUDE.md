# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing:
- **hookhub/**: Next.js 15 application with TypeScript and Tailwind CSS v4

## Development Commands

### HookHub (Next.js App)
All commands should be run from the `hookhub/` directory:

```bash
# Development server (with Turbopack)
npm run dev

# Production build (with Turbopack)
npm run build

# Start production server
npm start
```

Note: This project uses Turbopack (Next.js's new bundler) for both dev and build.

## Technology Stack

### HookHub
- **Framework**: Next.js 15.5.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **React**: Version 19.1.0
- **Fonts**: Geist Sans and Geist Mono (via next/font)

## Code Architecture

### Next.js App Router Structure
The project uses Next.js 15's App Router with the following organization:
- `src/app/`: App router pages and layouts
  - `layout.tsx`: Root layout with font configuration
  - `page.tsx`: Home page component
  - `globals.css`: Global styles with Tailwind directives

### TypeScript Configuration
- Path alias `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled

### Styling Approach
- Tailwind CSS v4 (latest major version)
- PostCSS for processing
- Utility-first CSS classes in components
- Dark mode support via Tailwind's `dark:` modifier

## Key Conventions

1. **Component Structure**: React Server Components by default (Next.js 15 App Router)
2. **Imports**: Use `@/` path alias for imports from src directory
3. **Styling**: Tailwind utility classes directly in JSX
4. **Fonts**: Geist font family loaded via next/font/google with CSS variables
