<script setup lang="ts">
import BlogCardList from "~/features/blogs/components/BlogCardList.vue"
import BaseText from "~/components/elements/texts/BaseText.vue"

useHead({
  title: "タグ別ブログ一覧",
  meta: [
    {
      name: "description",
      content: "技術ブログ 対象のタグに属する記事一覧ページ",
    },
  ],
})
const route = useRoute()

const { getBlogs, setBlogsFetchData, selectedTagId } = useBlogs()
const { getTagIdForName } = useTags()

selectedTagId.value = await getTagIdForName()

const { data, pending } = await getBlogs()

watch(data, (newData) => {
  if (newData) {
    setBlogsFetchData(newData)
  }
})
</script>

<template>
  <div class="px-2">
    <!-- <BlogSearchForm class="mb-4 md:hidden" /> -->
    <h2 class="mb-4">
      <BaseText weight="semibold" size="xl">
        {{ route.params.tagName }}
      </BaseText>
    </h2>
    <template v-if="pending">
      <span class="loading loading-dots loading-md"></span>
    </template>
    <template v-else>
      <BlogCardList />
      <div class="mt-8">
        <Pagination />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
