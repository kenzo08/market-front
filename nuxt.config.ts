// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Market',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [],
      script: [],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_API_BASE,

    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
