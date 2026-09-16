# AGENTS.md — Project Context for lean

> Loaded every lean session. Keep concise, factual, actionable.

## Project Overview
- **Name:** `portfolio` (`package.json` v0.0.1, private, `"type": "module"`)
- **Purpose:** Personal portfolio site — single-page SvelteKit app showcasing experience, stack, projects, and contact. Composed of `Hero` → `Experience` → `Stack` → `Projects` → `Contact` with `Header`/`Footer` shell.
- **Status:** Active — built from `sv create --template minimal --types ts --install bun` (see `README.md`), scaffold commit only; no deployed adapter configured beyond `adapter-auto`.
- **Source of truth:** `src/routes/+page.svelte` + `src/lib/data.ts`; `README.md` is upstream SvelteKit template verbatim.

## Tech Stack
- **Language:** TypeScript 6.0.3 (`strict: true`, `moduleResolution: bundler`, `rewriteRelativeImportExtensions: true`)
- **Framework:** Svelte 5.56.1 + SvelteKit 2.63.0 + Vite 8.0.16 (`@sveltejs/vite-plugin-svelte 7.1.2`)
- **Styling:** Tailwind CSS 4.3.3 via `@tailwindcss/vite 4.3.3` (Vite plugin, no `tailwind.config.*` file)
- **Adapter:** `@sveltejs/adapter-auto 7.0.1`
- **Fonts:** `@fontsource/instrument-sans`, `@fontsource/geist-mono`, `@fontsource/prata`
- **Icons:** `simple-icons 16.31.0` + local `TechIcon`/`SocialIcon` wrappers
- **Package manager:** `bun` (`bun.lock` present, `.npmrc` present) — also works with `npm`/`pnpm` per `README.md`
- **Tooling:** `svelte-check 4.6.0`, `vite`, `svelte-kit sync`

## Commands
Exact scripts from `package.json` — prefer `bun` (lockfile is `bun.lock`):
```bash
bun install            # install (or npm install / pnpm install)
bun run dev            # vite dev — dev server (README: npm run dev -- --open)
bun run build          # vite build — production build
bun run preview        # vite preview — preview production build
bun run check          # svelte-kit sync && svelte-check --tsconfig ./tsconfig.json
bun run check:watch    # svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch
bun run prepare        # svelte-kit sync || echo ''
```
No `test`, `lint`, or `format` scripts defined. No `Cargo.toml`/`pyproject.toml`/`go.mod` in repo.

## Project Structure
```
.
├── src/
│   ├── app.html              # SvelteKit shell
│   ├── app.css               # global styles (Tailwind)
│   ├── app.d.ts              # SvelteKit type augmentations
│   ├── lib/
│   │   ├── data.ts           # navItems, experiences, stack, projects (content source)
│   │   ├── techIcons.ts      # icon mapping for stack
│   │   ├── gsap.ts           # animation helper
│   │   ├── index.ts          # lib barrel
│   │   ├── assets/favicon.svg
│   │   └── components/
│   │       ├── Header.svelte
│   │       ├── Hero.svelte
│   │       ├── Experience.svelte
│   │       ├── Stack.svelte      # uses static/stack-bg.jpeg + stack-bg-mobile.{jpeg,webp} via <picture>
│   │       ├── Projects.svelte
│   │       ├── Contact.svelte
│   │       ├── Footer.svelte
│   │       ├── TechIcon.svelte
│   │       └── SocialIcon.svelte
│   └── routes/
│       ├── +layout.svelte    # imports app.css + @fontsource, renders Header/Footer, #contact centering logic
│       └── +page.svelte      # page composition: Hero/Experience/Stack/Projects/Contact
├── static/                   # served at / — not bundled
│   ├── hero-bg.jpg / hero-vid.mp4
│   ├── stack-bg.jpeg / stack-bg-mobile.jpeg / stack-bg-mobile.webp
│   ├── footer-bg.jpg / contact-bg.jpg / profile.jpeg
│   ├── projects/             # project images
│   ├── cv.pdf / CV.pdf / cv.docx / CV.docx
│   └── robots.txt / llms.txt / ai.txt
├── .svelte-kit/              # generated (gitignored via SvelteKit)
├── vite.config.ts            # tailwindcss() + sveltekit() with runes enabled outside node_modules
├── tsconfig.json             # extends .svelte-kit/tsconfig.json, strict/bundler
├── svelte.config.js          # (standard SvelteKit config — adapter-auto)
├── package.json / bun.lock / .npmrc / .gitignore
└── README.md                 # sv template README (not project-specific)
```
- **Entry points:** `src/routes/+layout.svelte` (shell), `src/routes/+page.svelte` (page)
- **Content editing:** Change `src/lib/data.ts` for experience/stack/projects; components are presentational.

## Conventions
- **Svelte 5 runes:** Enabled for all files except `node_modules` (`vite.config.ts: runes: ({filename}) => filename.includes('node_modules') ? undefined : true`). Use `$props()`, `$state`, `onMount` etc. No legacy `export let`.
- **Styling:** Utility-first Tailwind 4 via Vite plugin. No separate Tailwind config; prefer `class` strings in Svelte. Global CSS in `src/app.css`.
- **Imports:** `$lib` alias for `src/lib` (SvelteKit default). Fonts imported in `+layout.svelte` via `@fontsource`.
- **TypeScript:** `strict: true`, `allowJs/checkJs`, `skipLibCheck`, `esModuleInterop`, `forceConsistentCasingInFileNames`.
- **Formatting/commits:** No formatter/linter config in repo. Keep diffs minimal; read before edit; use unique `oldText` for edits.
- **Assets:** Large media lives in `static/` and is referenced by absolute `/` paths (e.g., `/stack-bg.jpeg`). Recently added art-directed mobile variant uses `<picture media="(max-width: 640px)">`.

## Architecture Notes
- **Rendering:** SvelteKit SPA/SSR with `adapter-auto` — no custom server. Single route (`/`) composing sections by anchor (`#hero`, `#experience`, `#stack`, `#projects`, `#contact`).
- **Layout behavior:** `+layout.svelte:onMount` intercepts `a[href="#contact"]` clicks, centers `#contact-card` (or `#contact`) vertically with `scrollTo({behavior: smooth|instant})`, respects `prefers-reduced-motion`, and handles direct `#contact` hash on load via `requestAnimationFrame`.
- **Stack section:** Background uses `<picture>` with `max-width: 640px` sources (`stack-bg-mobile.webp` → `stack-bg-mobile.jpeg` fallback) and `object-[center_38%]` on mobile / `object-center` on desktop; wash overlay `bg-[#fbf8f2]/32`.
- **No backend/API:** All data is static in `src/lib/data.ts`. No env vars or DB.

## Gotchas
- **Runes scope:** `vite.config.ts` forces `runes: true` outside `node_modules` — writing non-runes Svelte will warn/fail. Check `svelte-check` output for the existing `Header.svelte:178` implicit-close warning (known, non-blocking).
- **Package manager mismatch:** Lockfile is `bun.lock`; `npm install` works but will generate `package-lock.json` divergence — prefer `bun install` for reproducibility.
- **Static duplicates:** `static/cv.pdf`+`CV.pdf` and `cv.docx`+`CV.docx` are identical pairs (31KB PDF, 39KB DOCX) — keep case consistent when linking.
- **Large assets in `static/`:** `hero-vid.mp4` (1.0 MB), `footer-bg.jpg` (243 KB), `hero-bg.jpg` (666 KB), `contact-bg.jpg` (196 KB) — avoid re-committing larger variants; mobile has separate `stack-bg-mobile.*` (58 KB JPEG / 42 KB WebP).
- **Generated files:** `.svelte-kit/` and `build/` are generated — never edit; `tsconfig.json` extends `.svelte-kit/tsconfig.json` so type errors may require `svelte-kit sync` first (`bun run prepare` / `bun run check` does it).
- **No tests/lint:** `bun run check` (`svelte-check`) is the only verification gate; `vite build` is the build gate.
