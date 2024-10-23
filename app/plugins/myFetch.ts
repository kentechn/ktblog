export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()

  const $myFetch = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    retry: 3,
  })

  return {
    provide: {
      myFetch: $myFetch,
    },
  }
})
