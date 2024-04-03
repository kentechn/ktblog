<script setup lang="ts">
import { object, string, setLocale } from "yup"
import { useField, useForm, ErrorMessage } from "vee-validate"
import EmailFormInput from "./EmailFormInput.vue"
import NameFormInput from "./NameFormInput.vue"
import ContentFormInput from "./ContentFormInput.vue"
import SubmitBtn from "./SubmitBtn.vue"

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

const { isSubmitting, submitForm } = useForm({
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
    <div class="mb-5">
      <NameFormInput v-model:inputValue="name" />
      <ErrorMessage name="name" class="text-error" />
    </div>
    <div class="mb-5">
      <EmailFormInput v-model:inputValue="email" />
      <ErrorMessage name="email" class="text-error" />
    </div>

    <div class="mb-8">
      <ContentFormInput v-model:inputValue="content" />
      <ErrorMessage name="content" class="text-error" />
    </div>
    <div v-show="false" class="contact_item">
      <label for="message">スパムでない場合は空欄</label>
      <input v-model="botFieldValue" type="text" name="bot-field">
    </div>
    <div class="text-center">
      <SubmitBtn :is-disabled="isSubmitting" />
    </div>
  </form>
</template>

<style scoped></style>
