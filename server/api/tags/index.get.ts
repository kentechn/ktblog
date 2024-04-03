import { FetchError } from "ofetch"
import type { TagListResponse } from "~/interfaces"
import { fetcher } from "@/server/utils/api"

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    const res = await fetcher<TagListResponse>("/tags", { query })
    return res
  }
  catch (error) {
    if (error instanceof FetchError) {
      throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage })
    }
    throw error
  }
})
