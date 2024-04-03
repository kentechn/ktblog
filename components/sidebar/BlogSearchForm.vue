<script setup lang="ts">
import BaseIcon from "../elements/icons/BaseIcon.vue"
import SearchInput from "./SearchInput.vue"
import { useBlogs } from "@/composables/useBlogs"

const { searchQuery } = useBlogs()

const updateSearchValue = (value: string) => {
  searchQuery.value = value
}

const searchArticle = () => {
  navigateTo({ path: "/", query: { q: searchQuery.value } })
}
</script>

<template>
  <form @submit.prevent>
    <div class="flex">
      <SearchInput @update="updateSearchValue" />
      <span
        class="inline-flex items-center px-3 text-sm bg-primary rounded-r-md cursor-pointer"
        @click="searchArticle"
      >
        <BaseIcon name="i-eva-search-fill" class="text-base-100" size="20" />
      </span>
    </div>
  </form>
</template>

<style scoped></style>
