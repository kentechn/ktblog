import type { FetchOptions } from "ofetch"

const config = useRuntimeConfig()

const defaultOptions: FetchOptions = {
  method: "GET",
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
  parseResponse: JSON.parse,
  retry: 3,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async <T>(path: string, fetchOptions?: any): Promise<T> => {
  return await $fetch(path, {
    ...defaultOptions,
    ...fetchOptions,
  })
}
