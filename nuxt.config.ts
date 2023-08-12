import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
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
  app: {
    head: {
      bodyAttrs: { class: "dark" }
    }
  }
})
