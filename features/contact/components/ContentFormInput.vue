<script setup lang="ts">
import Textarea from "~/components/elements/inputs/Textarea.vue"

const inputValue = defineModel<string>("inputValue")
</script>

<template>
  <Textarea id="content" v-model:input-value="inputValue" name="content" label-name="お問い合わせ内容" />
</template>
