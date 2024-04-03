<script setup lang="ts">
import { formatUTCToJpDate } from "@/utils"
import TextWithIcon from "~/components/elements/texts/TextWithIcon.vue"

interface Props {
  updatedAt: string
}

defineProps<Props>()
</script>

<template>
  <TextWithIcon icon-name="i-tabler-clock-up" icon-size="16" font-weight="light" text-size="sm">
    {{ formatUTCToJpDate(updatedAt) }}
  </TextWithIcon>
</template>

<style scoped>

</style>
