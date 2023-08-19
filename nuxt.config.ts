import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
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
      companiesPath: process.env.COMPANIES_PATHS
    }
  }
})