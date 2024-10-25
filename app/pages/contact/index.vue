<script setup lang="ts">
useHead({
  title: "contact",
  meta: [
    {
      name: "description",
      content: "技術ブログ お問い合わせページ",
    },
  ],
})
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-5">
      <p class="text-xl font-semibold">
        お問い合わせ
      </p>
    </div>
    <ContactForm />
  </div>
</template>
