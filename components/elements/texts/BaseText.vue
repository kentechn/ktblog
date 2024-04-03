<script setup lang="ts">
import { computed } from "vue"
interface Props {
  weight?: "light" | "normal" | "medium" | "semibold" | "bold"
  color?: string
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"
}

const props = withDefaults(defineProps<Props>(), {
  weight: "normal",
  color: "black",
  size: "base",
})

const fontWeight = computed(() => {
  return `font-${props.weight}`
})

const fontColor = computed(() => {
  return `text-${props.color}`
})

const fontSize = computed(() => {
  return `text-${props.size}`
})
</script>

<template>
  <p :class="[fontColor, fontWeight, fontSize]" class="leading-loose inline">
    <slot />
  </p>
</template>

<style scoped></style>
