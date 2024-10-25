import type { BlogResponse, Toc } from "~~/interfaces";
import * as cheerio from "cheerio";
import { generateToc, highlightHtml } from "@/utils";
import DOMPurify from "dompurify";


export const useBlog = () => {
  const route = useRoute()
  const blogId = route.params.blogId

  const { data: blog, status } = useMyFetch<BlogResponse>(`/blogs/${blogId}`);
  const tocs = ref<Toc[]>([]);

  const isPending = computed(() => status.value === "pending");

  const processBlogContent = () => {
    if (blog.value) {
      // サニタイズ処理
      const cleanContent = DOMPurify.sanitize(blog.value.content);

      // html解析
      const $ = cheerio.load(cleanContent);

      // 目次生成
      tocs.value = generateToc($);

      // ハイライト処理
      blog.value.content = highlightHtml($).html();
    }
  };

  return {
    blog,
    isPending,
    processBlogContent,
    tocs,
  };
};
