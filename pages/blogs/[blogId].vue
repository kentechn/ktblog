<script setup lang="ts">
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import BlogUpdatedAt from '@/features/blogs/components/BlogUpdatedAt.vue';
import TagList from '@/components/tags/TagList.vue';



const { getBlog } = useBlogs();

const { data: blog, pending } = await getBlog();

useHead({
  title: blog.value?.title,
  meta: [
    {
      name: 'description',
      content: '技術ブログ 記事詳細ページ',
    },
  ],
});


const content = blog.value !== null ? blog.value.content : '';

// hljsクラスをつける
const $ = cheerio.load(content);
$('pre code').each((_, elm) => {
  const result = hljs.highlightAuto($(elm).text());
  $(elm).html(result.value);
  $(elm).addClass('hljs');
});
const body = $.html();

const headings = $('h1, h2, h3').toArray();
</script>

<template>
    <div v-if="pending"><span class="loading loading-dots loading-md"></span></div>
    <div v-else>
      <div>
        <div class="p-4 mb-6 bg-white border rounded">
          <h1 class="text-2xl font-semibold mb-6 break-words">
            {{ blog?.title }}
          </h1>
          <BlogUpdatedAt :updated-at="blog?.updatedAt as string" />
          <div class="my-2">
            <TagList :tags="blog?.tags" />
          </div>
          <div class="divider" />
          <div class="my-12 mx-auto max-w-xl">
            <Toc :headings="headings" />
          </div>
          <div class="prose leading-7 mx-auto break-all" v-html="body" />
        </div>
      </div>
    </div>
</template>

<style scoped>
.prose {
  max-width: 80ch;
}
</style>