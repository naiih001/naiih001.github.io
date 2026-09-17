# AGENTS.md — portfolio

Single-route SvelteKit portfolio (Svelte 5 runes, Tailwind 4, TypeScript strict).
Page composition: `Hero` → `Experience` → `Stack` → `Projects` → `Contact` with `Header`/`Footer` shell.

## Commands (`bun`; `bun.lock` is source of truth)

```bash
bun install            # prefer over npm (npm diverges from bun.lock)
bun run dev -- --open  # dev server
bun run build          # static production build
bun run preview        # preview production build
bun run check          # svelte-kit sync + svelte-check — the only verification gate
```

No `test`, `lint`, or `format` scripts. `bun run check` passes with 0 errors + 1 known
non-blocking warning (`Header.svelte:178` implicit `</span>`). `README.md` is upstream
`sv` template verbatim — trust `package.json` / `vite.config.ts` over it.

## Structure

- Entrypoints: `src/routes/+page.svelte` (section composition), `+layout.svelte` (shell,
  fonts, SEO/JSON-LD), `+layout.ts` (`prerender = true`).
- Content: edit `src/lib/data.ts` (`navItems`, `experiences`, `stack`, `projects`, `socials`);
  components are presentational. Stack icons map via `src/lib/techIcons.ts`
  (`TanStack Query` → `simple-icons` `reactquery` alias).
- **No `svelte.config.*` exists — do not create one.** `adapter-static` is passed
  non-standardly via `sveltekit({ adapter: adapter() })` in `vite.config.ts`; keep that wiring.
- Runes forced on for everything outside `node_modules` (`vite.config.ts`) — use
  `$props()` / `$state`, never legacy `export let`.
- Styling: Tailwind 4 via the Vite plugin, no `tailwind.config.*`; theme tokens in `src/app.css`
  (`@theme`). Fonts load in `+layout.svelte` via `@fontsource/*/latin-*.css` subset paths.
- Assets in `static/` are served at `/` — reference by absolute path (e.g. `/stack-bg.jpeg`).
  `Stack.svelte` art-directs mobile via `<picture media="(max-width: 640px)">`
  (`stack-bg-mobile.webp` → `.jpeg` fallback).

## Gotchas

- Static prerender: `adapter-static` + `prerender = true`. `package.json` still also lists
  `adapter-auto` (migration uncommitted) — do not revert to `adapter-auto`.
- `gsap` is a phantom dep: imported by `src/lib/gsap.ts`, `Header.svelte` (static) and
  `Hero.svelte` (lazy `import('gsap')` on idle), but missing from `package.json` / `bun.lock`.
  Don't trust a clean `bun install` for animations; `bun add gsap` if touching them.
  `gsap.ts` uses `SplitText` (Club plugin) — check licensing before upgrading.
- Anchor scrolling in `+layout.svelte` is **mobile-only** (`max-width: 767px`); desktop relies
  on native `scroll-padding-top: 4.5rem` (`app.css`). Keep the `prefers-reduced-motion` branches
  and the ~70ms delay that waits for the mobile sheet to close before measuring.
- Hero video: `preload="none"`, `poster="/hero-bg.webp"` (preloaded in `<svelte:head>`);
  keep gsap behind `requestIdleCallback` — don't make it a static import.
- Case-duplicate CVs (`static/cv.pdf` + `CV.pdf`, `cv.docx` + `CV.docx`) are all linked from
  the `<svelte:head>` JSON-LD — keep both casings.
- `.svelte-kit/` and `build/` are generated, never edit. `tsconfig.json` extends the generated
  config — `bun run check` re-syncs it when types look stale.
