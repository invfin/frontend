import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,

    timeline: {
      enabled: false
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  srcDir: 'src/',
  css: [
    '~/assets/css/main.css',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    /* module options */
  },
  app: {
    head: {
      bodyAttrs: { class: "dark" },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiKey: process.env.API_KEY,
      fakeApiKey: process.env.FAKE_API_KEY,
      apiPath: process.env.API_PATHS,
      domain: process.env.DOMAIN
    }
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: 3600 },
    // Blog post generated on-demand once until next deploy
    '/blogs/**': { isr: true },
    // Blog post generated on-demand once until next deploy
    '/diccionario/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  }
})