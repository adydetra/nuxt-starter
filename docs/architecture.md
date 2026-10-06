# Architecture

Server-side rendered (SSR) or statically generated (SSG) web application built with Nuxt 4, Vue 3, and Tailwind CSS v4.

## Directory Structure (Nuxt 4)

This project adopts the Nuxt 4 convention where application code is located in `app/`:

```text
app/
├── app.vue (Root application shell)
├── assets/
│   └── css/main.css (Tailwind CSS v4 & custom styles)
├── components/
│   ├── atoms/ (Primitive components e.g. ColorMode.vue, SpotlightCard.vue)
│   ├── molecules/ (Composite UI blocks e.g. TechStackCard.vue)
│   └── organisms/ (Page sections e.g. TheExample.vue)
└── pages/
    └── index.vue (Home page route)
```

## Modules & Ecosystem

- **`@nuxtjs/color-mode`**: Manages system/light/dark mode classes on the root HTML element.
- **`@nuxt/icon`**: Iconify integration rendering SVG icons on-demand (`@iconify-json/line-md`).
- **`@nuxt/devtools`**: Local developer tooling and inspection bar.
- **`@tailwindcss/vite`**: Vite plugin powering Tailwind CSS v4 compilation.
