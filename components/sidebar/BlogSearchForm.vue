<script setup lang="ts">
import BaseIcon from '../elements/icons/BaseIcon.vue';
import { useBlogs } from '@/composables/useBlogs';

const { searchQuery } = useBlogs();

const inputValue = ref('');

const searchBlogs = async () => {
  searchQuery.value = inputValue.value
  await navigateTo({ path: '/', query: { q: searchQuery.value } });
};
</script>

<template>
  <form @submit.prevent>
    <div class="flex">
      <input
        v-model="inputValue"
        type="text"
        class="border border-base-300 focus:border-base-300 p-2 focus:outline-none w-full"
        placeholder="記事検索"
      />
      <span
        class="inline-flex items-center px-3 text-sm bg-primary rounded-r-md cursor-pointer transition duration-700 hover:bg-primary-content"
        @click="searchBlogs"
      >
        <BaseIcon name="i-eva-search-fill" class="text-base-100" size="20" />
      </span>
    </div>
  </form>
</template>

<style scoped></style>
