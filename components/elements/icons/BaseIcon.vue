<script setup lang="ts">
interface Props {
  name: string
  size?: "12" | "16" | "20"
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: "16",
  color: "base-content",
})

const iconColor = computed(() => {
  return `text-${props.color}`
})
</script>

<template>
  <div>
    <Icon :name="name" :size="size" :class="iconColor" />
  </div>
</template>
