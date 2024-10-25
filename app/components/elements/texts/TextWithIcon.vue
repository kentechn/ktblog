<script setup lang="ts">
import NuxtIcon from "../icons/NuxtIcon.vue";

interface Props {
  iconName: string
  iconSize?: "12" | "16" | "20"
  iconColor?: string
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold"
  textColor?: string
  textSize?: "xs" | "sm" | "base" | "lg" | "xl"
}

withDefaults(defineProps<Props>(), {
  iconSize: "16",
  iconColor: "black",
  fontWeight: "normal",
  textColor: "black",
  textSize: "base",
})
</script>

<template>
  <div class="inline-block">
    <div class="flex rounded-sm items-baseline">
      <div>
        <NuxtIcon
        :name="iconName"
        :size="iconSize"
        :color="iconColor"
        class="mx-2"
      />
      </div>
      <p :color="textColor" :weight="fontWeight" :size="textSize" class="leading-loose inline">
        <slot />
      </p>
    </div>
  </div>
</template>
