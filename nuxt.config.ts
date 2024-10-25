// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint", "@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image",
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "KtBlog",
      meta: [
        // <meta name="description" content="My amazing site.">
        { name: "description", content: "tech blog site." },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    serviceDomain: process.env.NUXT_SERVICE_DOMAIN,
    public: {
      apiBaseUrl: "/api",
    },
  },
  routeRules: {
    "/tags/**": { ssr: true },
    "/": { ssr: true },
    "/contact": { prerender: true },
    "/thanks": { prerender: true },
    "/blogs/**": { ssr: true },
  },
  future: {
    compatibilityVersion: 4,
  }, compatibilityDate: "2024-04-03",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
})
