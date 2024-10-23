<script setup lang="ts">
interface Props {
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  height: "auto",
})

const heightClass = computed(() => {
  return `h-${props.height}`
})
</script>

<template>
  <div
    class="border border-base-300 bg-base-100 rounded-lg shadow-md shadow-base-300 p-0"
    :class="heightClass"
  >
    <slot />
  </div>
</template>

<style scoped></style>
