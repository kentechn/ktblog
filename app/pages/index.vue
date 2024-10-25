<script setup lang="ts">
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
      <span class="loading loading-dots loading-md" />
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
