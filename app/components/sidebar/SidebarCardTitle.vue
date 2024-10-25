<script setup lang="ts">
import TextWithIcon from "../elements/texts/TextWithIcon.vue"

interface Props {
  iconName: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-primary-content">
    <TextWithIcon
      :icon-name="iconName"
      font-weight="semibold"
      icon-cls="text-black dark:text-slate-400"
      text-color="primary"
      icon-size="20"
    >
      <slot />
    </TextWithIcon>
  </div>
</template>
