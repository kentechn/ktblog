<script setup lang="ts">
import TextWithIcon from "../elements/texts/TextWithIcon.vue"
</script>

<template>
  <div>
    <TextWithIcon
      icon-name="i-clarity-tag-solid"
      icon-size="16"
      text-size="sm"
      class="rounded-md bg-base-200 hover:bg-base-300 transition-all duration-500 cursor-pointer px-2"
    >
      <slot />
    </TextWithIcon>
  </div>
</template>

<style scoped></style>
