<script setup lang="ts">
import TagListItem from "./TagListItem.vue"
import type { Tag } from "@/interfaces"

interface Props {
  tags?: Tag[]
}
defineProps<Props>()

const onClickTag = (name: string) => {
  navigateTo(`/tags/${name}`)
}
</script>

<template>
  <div class="flex flex-wrap">
    <TagListItem
      v-for="tag in tags"
      :key="tag.name"
      class="m-1"
      @click="onClickTag(tag.name)"
    >
      {{ tag.name }}
    </TagListItem>
  </div>
</template>

<style scoped></style>
~/interfaces
