<script setup lang="ts">
interface Props {
  name: string
  size?: "12" | "16" | "18" | "20"
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: "16",
  color: "black",
})
</script>

<template>
  <div>
    <Icon :name="name" :color="color" :size="size"/>
  </div>
</template>