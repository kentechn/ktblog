<script setup lang="ts">
interface Props {
  name: string
  size?: "12" | "16" | "18" | "20" | "24"
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: "16",
  color: "black",
})
</script>

<template>
  <Icon :name="name" :size="size"/>
</template>
