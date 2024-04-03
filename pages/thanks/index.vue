<script setup lang="ts">
import BaseText from "~/components/elements/texts/BaseText.vue"

</script>

<template>
  <div class="container mx-auto">
    <BaseText weight="semibold" size="xl">
      お問い合わせ完了
    </BaseText>
    <div class="mb-6">
      <BaseText>送信完了しました。</BaseText>
    </div>
    <div class="mb-6">
      <BaseText>お問い合わせいただきありがとうございます。</BaseText>
    </div>
    <button class="btn" @click="$router.push('/')">
      homeに戻る
    </button>
  </div>
</template>
