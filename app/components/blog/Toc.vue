<script lang="ts" setup>
import type { Toc } from "~~/interfaces";

interface Props {
  tocs: Toc[];
}

defineProps<Props>();
</script>

<template>
  <div class="p-4 bg-gray-200 dark:bg-slate-950 rounded-md break-words max-w-3xl">
    <h4 class="text-lg font-bold">目次</h4>
    <ul class="rounded-box mt-3">
      <li v-for="toc in tocs" :key="toc.id" class="pb-2">
        <BlogTocLink :id="toc.id" :text="toc.text" />
        <ul v-if="toc.children && toc.children.length > 0">
          <li
            v-for="childToc in toc.children"
            :key="childToc.id"
            class="py-1 ml-4"
          >
            <BlogTocLink :id="childToc.id" :text="childToc.text" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
