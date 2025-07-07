// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';
import tailwindcss from "@tailwindcss/vite";
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'LocaFun — найди лучшие места для отдыха и развлечений рядом',
      meta: [
        {
          name: 'description',
          content:
            'Платформа LocaFun поможет найти бассейны, рестораны, компьютерные клубы, боулинги и другие развлечения рядом с вами. Открой для себя активный отдых в своём городе!',
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
      link: [],
      script: [],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ["~/assets/css/style.css", 'vue-final-modal/style.css'],

  nitro: {
    compressPublicAssets: true,
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  vite: {
      plugins: [
        tailwindcss(),
        svgLoader({
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    convertColors: {
                      currentColor: true,
                    },
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        }),
      ],
  },

  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.NUXT_API_BASE,

    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', 'nuxt-lucide-icons', '@pinia/nuxt', 'nuxt-swiper']
})