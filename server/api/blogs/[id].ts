import { FetchError } from "ofetch"
import type { BlogResponse } from "~/interfaces"
import { fetcher } from "@/server/utils/api"

export default defineEventHandler(async (event) => {
  try {
    const blogId = getRouterParam(event, "id")
    const res = await fetcher<BlogResponse>(`/blogs/${blogId}`)
    return res
  }
  catch (error) {
    if (error instanceof FetchError) {
      throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage })
    }
    throw error
  }
})
