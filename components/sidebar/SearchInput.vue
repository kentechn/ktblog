<script setup lang="ts">
const inputValue = ref("")

const emit = defineEmits(["update"])
const onInput = () => {
  emit("update", inputValue.value)
}
</script>

<template>
  <input
    v-model.trim="inputValue"
    type="text"
    class="border border-base-300 focus:border-base-300 p-2 focus:outline-none w-full"
    placeholder="記事検索"
    @input="onInput"
  >
</template>

<style scoped></style>
