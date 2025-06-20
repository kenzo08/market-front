// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';
import tailwindcss from "@tailwindcss/vite";

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

  css: ["~/assets/css/style.css"],

  nitro: {
    compressPublicAssets: true,
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_API_BASE,

    },
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt']
})