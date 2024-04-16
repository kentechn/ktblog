<script setup lang="ts">
import NuxtIcon from '../elements/icons/NuxtIcon.vue';
import Logo from './Logo.vue';

interface Item {
  link: string;
  text: string;
}

const items: Item[] = [
  {
    link: '/',
    text: 'ホーム',
  },
  {
    link: '/contact',
    text: 'お問い合わせ',
  },
];

const router = useRouter();

const onClickLogo = async () => {
  await router.push('/');
  reloadNuxtApp();
};
</script>

<template>
  <header>
    <div class="text-right bg-black py-1">
      <div class="container mx-auto d-flex">
        <a href="https://github.com/kentechn" target="_blank">
          <NuxtIcon color="white" size="20" name="uil:github" class="inline mr-2" />
        </a>
        <!-- <a href="https://github.com/kentechn" target="_blank">
          <NuxtIcon color="white" size="18" name="prime:twitter" class="inline max-md:mr-2" />
        </a> -->
      </div>
    </div>
    <div class="navbar bg-base-100 drop-shadow-lg">
      <div class="container mx-auto px-2">
        <div class="flex-1">
          <Logo @click="onClickLogo" />
        </div>
        <ul class="menu menu-horizontal px-1">
          <li v-for="(item, i) in items" :key="i" class="ml-2">
            <NuxtLink :to="item.link">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
