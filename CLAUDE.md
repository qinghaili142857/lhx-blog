# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:4321)
pnpm dev

# Type-check + build + generate search index
pnpm build

# Type-check only
pnpm check

# Preview production build
pnpm preview

# Regenerate pagefind search index (after content changes)
pnpm search:index

# Create a new moments entry (prompts for JSON input or pass file path)
pnpm moment:create [path/to/payload.json]

# Lint
pnpm run eslint .

# Format
pnpm run eslint . --fix
```

## Tech Stack

- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS 3 + daisyUI 4 + SCSS
- **Content**: Astro Content Collections (MDX)
- **Icons**: Iconify (lucide, material-symbols, ri, simple-icons, etc.)
- **Search**: Pagefind (post-build index)
- **View Transitions**: @swup/astro
- **Plugins**: remark-math, remark-gfm, rehype-katex, expressive-code (with line numbers)
- **Other**: satori (OG images), medium-zoom, @playform/compress

## Project Architecture

### Configuration-Driven Site
All user-facing config lives in `frosti.config.yaml` (site info, menu, theme, social links, user profile). At build time, `src/config.ts` reads it + `src/i18n/translations.yaml` and exports typed constants. An Astro integration (`src/integration/updateConfig.ts`) watches both YAML files for HMR.

### Content Collections (`src/content/`)
- **`blog`** — MDX blog posts with frontmatter: title, description, pubDate, updated, image, badge, draft, categories[], tags[]
- **`moments`** — MDX micro-entries with type (Photo/Note/Video/Live/Sayings), mood, accent color, gallery, location, music
- Both validate schemas via `src/content/config.ts`
- Draft posts are hidden in production (`import.meta.env.PROD`)

### Pages (`src/pages/`)
- **`index.astro`** — homepage with latest posts
- **`blog/[...page].astro`** — paginated blog listing
- **`blog/[...slug].astro`** — individual blog post
- **`blog/category/[category]/[...page].astro`** — category-filtered listing
- **`blog/tag/[tag]/[...page].astro`** — tag-filtered listing
- **`blog/archives.astro`** — archive view (grouped by year/month)
- **`blog/categories.astro`** / **`blog/tags.astro`** — overview pages
- **`blog/search.astro`** — pagefind search page
- **`moments.astro`** / **`moments/[slug].astro`** / **`moments/studio.astro`** — moments micro-blog
- **`about.astro`**, **`project.astro`**, **`friend.astro`**, **`404.astro`**
- **`og/[...slug].png.ts`** — dynamic OG image generation via satori
- **`rss.xml.ts`**, **`sitemap.xml.ts`**, **`robots.txt.ts`** — SEO feeds

### Key Patterns
- **Layout**: `src/layouts/BaseLayout.astro` wraps all pages with navbar, sidebar (profile + search + TOC + toolbar), footer, mobile TOC, click particle effects, and theme persistence via `localStorage`
- **Sidebar**: modular widgets (`ProfileBar`, `SearchBar`, `TOCBar`, `ToolBar`) composed in `Sidebar.astro`, toggled via `astro-vtbot` for view transitions
- **Pagination**: `src/utils/paginationUtils.ts` drives paginated routes for blog, tags, and categories, all using `BLOG_PAGE_SIZE` from config
- **i18n**: translations live in `src/i18n/translations.yaml`, accessed via `t("label.key")` from `src/config.ts`
- **Path aliases**: `@/` → `src/`, `@components/` → `src/components/`, `@layouts/` → `src/layouts/`, `@config` → `src/config.ts`, `@interfaces/` → `src/interface/`, `@utils/` → `src/utils/`
- **Types**: `src/interface/site.ts` (config), `src/interface/data.ts` (Post, Page, component props, MomentEntry)
- **Scripts**: `scripts/create-moment.mjs` generates a moments MDX file from a JSON payload (used by `pnpm moment:create`)
