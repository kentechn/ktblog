export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()

  const $myFetch = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    retry: 3,
    retryDelay: 1000,
    timeout: 5000,
  })

  return {
    provide: {
      myFetch: $myFetch,
    },
  }
})
