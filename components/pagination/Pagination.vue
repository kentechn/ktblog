<script setup lang="ts">
import { FETCH_BLOGS_LIMIT } from "@/constants/constants"
const { currentPage, totalCount } = useBlogs()
const router = useRouter()
const route = useRoute()

const onClickPageNum = (page: number) => {
  if (route.params.tagName) {
    router.push({ path: `/tags/${route.params.tagName}`, query: { page } })
  }
  else {
    router.push({ path: "/", query: { page } })
  }

  currentPage.value = page
}

</script>

<template>
  <vue-awesome-paginate
    v-model="currentPage"
    :total-items="totalCount"
    :items-per-page=FETCH_BLOGS_LIMIT
    :max-pages-shown="4"
    :on-click="onClickPageNum"
  />
</template>

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
    justify-content: center;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #1e40af;
    border: 1px solid #1e40af;
    color: white;
  }
  .active-page:hover {
    background-color: #1e40af;
  }
</style>
