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
      icon-color="primary"
      text-color="primary"
      icon-size="20"
    >
      <slot />
    </TextWithIcon>
  </div>
</template>
