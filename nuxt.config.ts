// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint", "@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image",
  ],
  css: ["~/assets/css/main.css", "~/assets/css/blog-detail.css"],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    serviceDomain: process.env.NUXT_SERVICE_DOMAIN,
    public: {},
  },
  image: {
    dir: "assets/img",
  },
  routeRules: {
    "/tags/**": { ssr: true },
    "/": { ssr: true },
    "/contact": { prerender: true },
    "/thanks": { prerender: true },
    "/blogs/**": { ssr: true },
  },
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

})