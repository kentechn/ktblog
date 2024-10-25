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
    class="border border-base-300 bg-base-100 rounded-lg"
    :class="heightClass"
  >
    <slot />
  </div>
</template>

<style scoped></style>
