<script setup lang="ts">
interface Props {
  isDisabled: boolean
}
withDefaults(defineProps<Props>(), {
  isDisabled: false,
})

</script>

<template>
  <button type="submit" class="btn px-8 btn-outline " :disabled="isDisabled">
    送信
  </button>
</template>
