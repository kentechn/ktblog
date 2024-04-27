<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KtBlog` : 'KtBlog';
  }
})

useSeoMeta({
  title: '技術ブログ KtBlog',
  ogTitle: '技術ブログ KtBlog',
  description: 'This is my technical blog site.',
  ogDescription: 'This is my technical blog site.',
})
</script>

<template>
  <div class="overflow-hidden">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>