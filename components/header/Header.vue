<script setup lang="ts">
import Logo from "./Logo.vue"

interface Item {
  link: string
  text: string
}

const items: Item[] = [
  {
    link: "/",
    text: "ホーム",
  },
  // {
  //   link: "/contact",
  //   text: "お問い合わせ",
  // },
]

const router = useRouter()

const onClickLogo = async () => {
  await router.push("/")
  reloadNuxtApp()
}
</script>

<template>
  <header>
    <div class="navbar bg-base-100 drop-shadow-lg">
      <div class="container mx-auto px-2">
        <div class="flex-1">
          <Logo @click="onClickLogo" />
        </div>
        <ul class="menu menu-horizontal px-1">
          <li v-for="(item, i) in items" :key="i">
            <NuxtLink :to="item.link">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
