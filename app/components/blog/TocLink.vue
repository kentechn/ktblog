<script lang="ts" setup>
interface Props {
  id: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <a
    :href="`#${id}`"
    class="link link-hover hover:opacity-50 hover:duration-300"
  >{{ text }}</a>
</template>

<style scoped></style>
