<script setup lang="ts">
import BlogUpdatedAt from "./BlogUpdatedAt.vue"
import type { BlogCardItem } from "@/interfaces"
import Card from "~/components/elements/Card/Card.vue"
import TagList from "@/components/tags/TagList.vue"

interface Props {
  blogCardItem: BlogCardItem
}

defineProps<Props>()
</script>

<template>
  <Card class="w-full mx-auto cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
    <div class="p-2 h-60 break-words">
      <div class="text-right">
        <BlogUpdatedAt :updated-at="blogCardItem.updatedAt" />
      </div>
      <h2 class="text-xl font-semibold px-2 mb-1">
        {{ blogCardItem.title }}
      </h2>
      <div class="divider my-1" />
      <TagList :tags="blogCardItem.tags" />
    </div>
  </Card>
</template>

<style scoped></style>
~/interfaces
