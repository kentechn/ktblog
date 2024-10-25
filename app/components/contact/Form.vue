<script setup lang="ts">
import { object, string, setLocale } from "yup"
import { useField, useForm, ErrorMessage } from "vee-validate"

setLocale({
  mixed: {
    required: ({ label }) => `${label}は必須項目です。`,
  },
  string: {
    email: "メールアドレスの形式ではありません。",
  },
})

const schema = object({
  name: string().required().label("名前"),
  email: string().required().email().label("メールアドレス"),
  content: string().required().label("お問い合わせ内容"),
})

const { isSubmitting, submitForm, isFieldDirty } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    content: "",
  },
})

const botFieldValue = ref("")
const { value: name } = useField<string>("name")
const { value: email } = useField<string>("email")
const { value: content } = useField<string>("content")
</script>

<template>
  <form
    novalidate
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    action="/thanks"
    @submit="submitForm"
  >
    <!-- 下記がないとpage not foundになる -->
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >
    <div class="mb-5">
      <!-- <ContactFormEmailInput v-model:input-value="name" /> -->
      <FormInput
        id="name"
        v-model:input-value="name"
        :is-error="isFieldDirty('name')"
        name="name"
        label-name="名前"
      />
      <ErrorMessage
        name="name"
        class="text-error"
      />
    </div>
    <div class="mb-5">
      <FormInput
        id="email"
        v-model:input-value="email"
        :is-error="isFieldDirty('email')"
        name="email"
        label-name="メールアドレス"
      />
      <ErrorMessage
        name="email"
        class="text-error"
      />
    </div>

    <div class="mb-8">
      <FormTextarea
        id="content"
        v-model:input-value="content"
        :is-error="isFieldDirty('content')"
        name="content"
        label-name="お問い合わせ内容"
      />
      <ErrorMessage
        name="content"
        class="text-error"
      />
    </div>
    <div
      v-show="false"
      class="contact_item"
    >
      <label for="message">スパムでない場合は空欄</label>
      <input
        v-model="botFieldValue"
        type="text"
        name="bot-field"
      >
    </div>
    <div class="text-center">
      <button
        type="submit"
        class="btn px-8 btn-outline"
        :disabled="isSubmitting"
      >
        送信
      </button>
    </div>
  </form>
</template>

<style scoped></style>
