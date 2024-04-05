import type { Blog, BlogListResponse, BlogCardItem } from "@/interfaces"
import { FETCH_BLOGS_LIMIT } from "@/constants/constants"

export const setSelectedTagId = (selectedTagId: Ref<string>) => (tagId: string) => {
    selectedTagId.value = tagId
  }

export const setBlogsFetchData
  = (blogs: Ref<BlogCardItem[]>, totalCount: Ref<number>) =>
    (newData: BlogListResponse) => {
      blogs.value = newData.contents.map((blog) => {
        return {
          id: blog.id,
          title: blog.title,
          updatedAt: blog.updatedAt,
          tags: blog.tags,
        }
      })
      totalCount.value = newData.totalCount
    }

export const getBlog = (blog: Ref<Blog>) => async () => {
  const route = useRoute()
  const blogId = route.params.blogId

  const { data, pending, error, refresh } = await useAsyncData(
    `/api/blogs/${blogId}`,
    () => {
      return $fetch(`/api/blogs/${blogId}`)
    },
    {
      transform: (data) => {
        const transformedData = {
          id: data.id,
          title: data.title,
          content: data.content,
          updatedAt: data.updatedAt,
          tags: data.tags,
        }

        return transformedData
      },
    },
  )

  if (data.value) {
    blog.value = data.value
  }

  return { data, error, pending, refresh }
}

export const getBlogs
  = (
    blogs: Ref<BlogCardItem[]>,
    currentPage: Ref<number>,
    selectedTagId: Ref<string>,
    totalCount: Ref<number>,
    searchQuery: Ref<string>,
  ) =>
    async () => {
      const route = useRoute()

      currentPage.value = Number(route.query.page) || 1
      searchQuery.value = route.query.q as string
      const offset = computed(() => {
        return (currentPage.value - 1) * FETCH_BLOGS_LIMIT
      })

      const query = reactive({
        orders: "-createdAt",
        limit: FETCH_BLOGS_LIMIT,
        offset,
        ...(selectedTagId.value !== "" && {
          filters: `tags[contains]${selectedTagId.value}`,
        }),
        q: searchQuery,
      })

      const { data, pending, error, refresh } = await useAsyncData(
      `/api/blogs/${query}`,
      () => {
        return $fetch("/api/blogs", { query })
      },
      {
        // transform: (data) => {
        //   const transformedData = data.contents.map((blog) => {
        //     return {
        //       id: blog.id,
        //       title: blog.title,
        //       updatedAt: blog.updatedAt,
        //       tags: blog.tags
        //     }
        //   })

        //   return transformedData
        // },
        watch: [query],
      },
      )

      if (data.value) {
        blogs.value = data.value.contents
        totalCount.value = data.value.totalCount
      }

      return { data, error, pending, refresh }
    }

export const useBlogs = () => {
  const blogs = useState<BlogCardItem[]>("blogs", () => [])
  const totalCount = useState<number>("totalCount", () => 0)
  const currentPage = useState<number>("currentPage", () => 1)
  const searchQuery = useState<string>("searchQuery")
  const selectedTagId = useState<string>(() => "")
  const blog = useState<Blog>("blog")

  return {
    blogs: readonly(blogs),
    blog,
    totalCount,
    currentPage,
    searchQuery,
    selectedTagId,
    setBlogsFetchData: setBlogsFetchData(blogs, totalCount),
    getBlogs: getBlogs(
      blogs,
      currentPage,
      selectedTagId,
      totalCount,
      searchQuery,
    ),
    setSelectedTagId: setSelectedTagId(selectedTagId),
    getBlog: getBlog(blog),
  }
}
