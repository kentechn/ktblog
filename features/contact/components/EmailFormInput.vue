<script setup lang="ts">
import TextInput from "~/components/elements/inputs/TextInput.vue"

const inputValue = defineModel<string>("inputValue")
</script>

<template>
  <TextInput
    id="email"
    v-model:inputValue="inputValue"
    :is-error="false"
    name="email"
    label-name="メールアドレス"
  />
</template>
