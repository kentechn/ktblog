<script setup lang="ts">
import Pagination from "~/components/pagination/Pagination.vue"
import BlogCardList from "~/features/blogs/components/BlogCardList.vue"
import BlogSearchForm from "~/features/blogs/components/BlogSearchForm.vue";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "技術ブログ ホームページ",
    },
  ],
})
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
      <span class="loading loading-dots loading-md"></span>
    </template>
    <template v-else>
      <!-- <BlogSearchForm class="mb-4 md:hidden" /> -->
      <BlogCardList class="mb-6" />
      <div>
        <Pagination />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
