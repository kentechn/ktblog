<script setup lang="ts">
import BlogCard from "./BlogCard.vue"
import type { Blog } from "@/interfaces"

const { blogs } = useBlogs()

const onClickCard = (blogId: string) => {
  navigateTo(`/blogs/${blogId}`)
}

</script>

<template>
  <template v-if="blogs.length === 0">
    <div>記事がありません</div>
  </template>
  <template v-else>
    <div class="grid gap-4 grid-cols-1 xl:grid-cols-2">
      <template v-for="blog in blogs" :key="blog.id">
        <BlogCard
          :blog-card-item="(blog as Blog)"
          @click="onClickCard(blog.id)"
        />
      </template>
    </div>
  </template>
</template>

<style scoped></style>
~/interfaces
