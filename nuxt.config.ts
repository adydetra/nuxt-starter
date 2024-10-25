export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],

  devtools: { enabled: true },

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  /* Uncomments if you can use PWA */
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: "Create Nuxt Complete",
  //     short_name: "Create Nuxt Complete",
  //     theme_color: '#000',
  //     background_color: '#000',
  //     icons: [
  //       {
  //         src: 'pwa/icon_48x48.png',
  //         sizes: '48x48',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_64x64.png',
  //         sizes: '64x64',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_72x72.png',
  //         sizes: '72x72',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_96x96.png',
  //         sizes: '96x96',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_144x144.png',
  //         sizes: '144x144',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa/icon_512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globPatterns: ['*'],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },
});
