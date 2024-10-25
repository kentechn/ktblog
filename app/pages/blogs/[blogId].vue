<script setup lang="ts">
import "highlight.js/styles/hybrid.css";
import TagList from "@/components/tags/TagList.vue";

const { blog, isPending, processBlogContent, tocs } = useBlog();

onMounted(() => {
  // ブログコンテンツ表示の前処理
  processBlogContent();
});

useHead({
  title: blog.value?.title,
  meta: [
    {
      name: "description",
      content: "技術ブログ 記事詳細ページ",
    },
  ],
});
</script>

<template>
  <div v-if="isPending"><span class="loading loading-dots loading-md" /></div>
  <div v-else>
    <div class="p-6 mb-6 bg-white dark:bg-slate-800 border rounded">
      <h1 class="text-2xl font-semibold mb-6 break-words">
        {{ blog?.title }}
      </h1>
      <BlogUpdatedAt :updated-at="blog?.updatedAt as string" />
      <div class="my-2">
        <TagList :tags="blog?.tags" />
      </div>
      <div class="divider" />
      <div class="my-8 max-w-xl">
        <BlogToc :tocs="tocs" />
      </div>
      <div class="prose leading-7 mx-auto break-all" v-html="blog?.content" />
    </div>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100%;
}
</style>
