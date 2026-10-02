# Agent Guide

Nuxt 4 starter template with Tailwind CSS v4, Nuxt Color Mode, Nuxt Icon, and atomic design components.

Read only the document needed:
- `docs/architecture.md`: Nuxt 4 `app/` directory structure, atomic design components, modules, and routing.
- `docs/style.md`: Tailwind CSS v4 setup with `@tailwindcss/vite`, dark/light color mode, and theme tokens.
- `docs/testing.md`: linting commands, type preparation (`nuxt prepare`), and build validation.
- `docs/push.md`: branch naming, commit standards, pull request lifecycle, and pre-push validation.
- `docs/status.md`: implemented features, key modules, and roadmap.

## Source Map

- `nuxt.config.ts`: Nuxt 4 configuration, modules registration (`@nuxtjs/color-mode`, `@nuxt/icon`, `@nuxt/devtools`), and Tailwind CSS Vite plugin.
- `app/app.vue`: root Nuxt application layout and page wrapper.
- `app/pages/index.vue`: index route rendering showcase organisms.
- `app/components/Atoms/ColorMode.vue`: atomic dark/light mode toggle with Iconify icons.
- `app/components/Atoms/SpotlightCard.vue`: atomic card component with mouse-tracking radial gradient glow.
- `app/components/molecules/TechStackCard.vue`: molecule displaying tech stack information and links.
- `app/components/organisms/TheExample.vue`: organism combining spotlight card, tech stack items, and theme toggle.
- `app/assets/css/main.css`: Tailwind CSS v4 entry point and dark mode style overrides.
- `eslint.config.mjs`: ESLint flat configuration powered by `@antfu/eslint-config`.
- `package.json`: scripts and dependency declarations.

## Invariants

- Follow the Nuxt 4 directory structure: all source code resides within `app/` (`app/app.vue`, `app/components/`, `app/pages/`, `app/assets/`).
- Use Vue 3 Composition API with `<script setup lang="ts">`.
- Use Atomic Design principles for components (`Atoms/`, `molecules/`, `organisms/`).
- Maintain dark/light mode support using `@nuxtjs/color-mode` with Tailwind `class` or `@variant dark`.
- Adhere to `@antfu/eslint-config` standards (`bun run lint`).

## Change Workflow

Read `package.json` before altering dependencies or scripts. Run `bun run lint` and `bun run build` before committing any code changes. Follow `docs/push.md` for git conventions, and keep `docs/` updated if architectural invariants change.
