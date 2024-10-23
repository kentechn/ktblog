import { FetchError } from "ofetch"
import type { BlogListResponse } from "~~/interfaces"
import { fetcher } from "~~/server/utils/api"

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    console.log(query)
    const res = await fetcher<BlogListResponse>("/blogs", { params: query })
    return res
  }
  catch (error) {
    if (error instanceof FetchError) {
      throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage })
    }
    throw error
  }
})
