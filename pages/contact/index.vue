<script setup lang="ts">
import BaseText from "~/components/elements/texts/BaseText.vue"
import ContactForm from "~/features/contact/components/ContactForm.vue"

useHead({
  title: "contact",
  meta: [
    {
      name: "description",
      content: "お問い合わせページ",
    },
  ],
})
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-5">
      <BaseText weight="semibold" size="xl">
        お問い合わせ
      </BaseText>
    </div>
    <ContactForm />
  </div>
</template>
