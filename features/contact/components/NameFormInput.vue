<script setup lang="ts">
import TextInput from "~/components/elements/inputs/TextInput.vue"

const inputValue = defineModel<string>("inputValue")
</script>

<template>
  <TextInput
    id="name"
    v-model:inputValue="inputValue"
    :is-error="false"
    name="name"
    label-name="名前"
  />
</template>
