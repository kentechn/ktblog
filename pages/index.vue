<script setup lang="ts">
import Pagination from "~/components/pagination/Pagination.vue"
import BlogCardList from "~/features/blogs/components/BlogCardList.vue"

useHead({
  title: "home",
  meta: [
    {
      name: "description",
      content: "ホームページ",
    },
  ],
})
// watch(() => route.query, () => location.reload())
const { getBlogs, setBlogsFetchData } = useBlogs()
const { data, pending } = await getBlogs()

watch(
  data,
  (newData) => {
    if (newData) {
      setBlogsFetchData(newData)
    }
  },
)

</script>

<template>
  <div>
    <template v-if="pending">
      loading now...
    </template>
    <template v-else>
      <BlogCardList class="px-2 mb-6" />
      <div>
        <Pagination />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
