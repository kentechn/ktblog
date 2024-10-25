<script setup lang="ts">
interface Props {
  id: string;
  type?: string;
  isError?: boolean;
  name: string;
  labelName?: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  isError: false,
  labelName: undefined,
});

const inputValue = defineModel<string>("inputValue");
</script>

<template>
  <label v-if="labelName" :for="id" class="block text-sm font-bold mb-1">
    {{ labelName }}
  </label>
  <input
    :id="id"
    v-model="inputValue"
    :type="type"
    :name="name"
    class="rounded-lg border-2 p-2 w-full focus:outline-none focus:ring-2"
    :class="{ '!border-danger': isError }"
  ></template>

<style scoped></style>
