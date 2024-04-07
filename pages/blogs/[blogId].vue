<script setup lang="ts">
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import BlogUpdatedAt from '@/features/blogs/components/BlogUpdatedAt.vue';
import TagList from '@/components/tags/TagList.vue';

useHead({
  title: 'blog',
  meta: [
    {
      name: 'description',
      content: '記事詳細ページ',
    },
  ],
});

const { getBlog } = useBlogs();

const { data: blog, pending } = await getBlog();

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
  <div class="container mx-auto">
    <div v-if="pending">loading now...</div>
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
          <div class="prose leading-7 mx-auto" v-html="body" />
        </div>
      </div>
    </div>
  </div>
</template>
