<script setup lang="ts">
interface Props {
  id: string
  isError?: boolean
  name: string
  labelName?: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  isError: false,
  placeholder: "",
  labelName: undefined,
})

const inputValue = defineModel<string>("inputValue")
</script>

<template>
  <label v-if="labelName" :for="id" class="block text-sm font-bold mb-2">
    {{ labelName }}
  </label>
  <textarea
    :id="id"
    v-model="inputValue"
    rows="4"
    :name="name"
    class="block p-2.5 w-full text-sm rounded-lg border-2 border-gray-400 focus:outline-none focus:ring-2"
    :class="{ '!border-danger': isError }"
  />
</template>
