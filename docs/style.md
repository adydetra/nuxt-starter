# Style & Design System

The application uses Tailwind CSS v4 integrated into Nuxt via `@tailwindcss/vite` in `nuxt.config.ts`.

## Setup & Configuration

- Styles are loaded in `app/assets/css/main.css` via `@import "tailwindcss";`.
- Configured in `nuxt.config.ts` under `css: ['~/assets/css/main.css']`.

## Theme & Dark Mode

- Dark/Light mode is powered by `@nuxtjs/color-mode` with `preference: 'system'` and `classSuffix: ''`.
- When switching between light and dark modes, classes are toggled on the `<html>` element (`class="dark"`).
- Components use Tailwind's `dark:` variant (e.g. `bg-white dark:bg-zinc-900`) for seamless responsive styling.
