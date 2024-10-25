<script setup lang="ts">
interface Props {
  name: string
  size?: "12" | "16" | "18" | "20" | "24"
  iconCls?: string
}

withDefaults(defineProps<Props>(), {
  size: "16",
  iconCls: "",
})
</script>

<template>
  <Icon
    :class="iconCls"
    :name="name"
    :size="size"
  />
</template>
