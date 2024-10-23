<script setup lang="ts">
import Card from "../elements/Card/Card.vue"
import TagList from "../tags/TagList.vue"
import SidebarCardBody from "./SidebarCardBody.vue"
import SidebarCardTitle from "./SidebarCardTitle.vue"
import type { Tag } from "@/interfaces"

const { getTags, tags } = useTags()

await getTags()
</script>

<template>
  <Card>
    <SidebarCardTitle icon-name="i-clarity-tag-solid">
      タグ一覧
    </SidebarCardTitle>
    <SidebarCardBody>
      <TagList :tags="(tags as Tag[])" />
    </SidebarCardBody>
  </Card>
</template>

<style scoped></style>
~/interfaces
