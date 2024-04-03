<script setup lang="ts">
import BlogCardList from "~/features/blogs/components/BlogCardList.vue"
import BaseText from "~/components/elements/texts/BaseText.vue"

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
    <h2 class="mb-4">
      <BaseText weight="semibold" size="xl">
        {{ route.params.tagName }}
      </BaseText>
    </h2>
    <template v-if="pending">
      loading now...
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
