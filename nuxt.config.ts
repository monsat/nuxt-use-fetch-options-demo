// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  compatibilityDate: '2024-07-13',
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  experimental: {
    payloadExtraction: true,
  },
})
