import type { Tag } from "@/interfaces"

const fetchTags = () => {
  const query = reactive({
    limit: 100,
    offset: 0,
  })

  return useAsyncData(
    "/api/tags",
    () => {
      return $fetch("/api/tags", { query })
    },
  )
}

const fetchTagIdForName = () => {
  const route = useRoute()
  const tagName = route.params.tagName as string

  const query = reactive({
    limit: 100,
    offset: 0,
    filters: `name[equals]${tagName}`,
  })

  return useAsyncData(
    `/api/tags/${tagName}`,
    () => {
      return $fetch("/api/tags", { query })
    },
    {
      watch: [query],
    },
  )
}

export const getTagIdForName = () => async () => {
  const { data } = await fetchTagIdForName()

  const tag = data.value?.contents.map((content) => {
    return {
      id: content.id,
      name: content.name,
    }
  })[0]

  return tag?.id ?? ""
}

export const getTags = (tags: Ref<Tag[]>) => async () => {
  const { data, pending, error, refresh } = await fetchTags()

  if (data.value) {
    tags.value = data.value.contents.map((tag) => {
      return {
        id: tag.id,
        name: tag.name,
      }
    })
  }

  return { data, error, pending, refresh }
}

export const useTags = () => {
  const tags = useState<Tag[]>("tags")
  return {
    tags: readonly(tags),
    getTags: getTags(tags),
    getTagIdForName: getTagIdForName(),
  }
}
