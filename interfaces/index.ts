import type { MicroCMSListResponse, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

export interface TagResponse extends MicroCMSListContent {
  name: string
}

export interface Tag extends Pick<TagResponse, "id" | "name"> {}

export interface TagListResponse extends MicroCMSListResponse<TagResponse> {}

export interface BlogResponse extends MicroCMSListContent {
  title: string
  content: string
  eyecatch?: MicroCMSImage
  tags?: Tag[]
  updatedAt: string
}

export interface Blog extends Pick<BlogResponse, "id" | "title" | "tags" | "updatedAt"> {}

export interface BlogListResponse extends MicroCMSListResponse<BlogResponse> {}

export interface BlogCardItem extends Pick<BlogResponse, "id" | "tags" | "updatedAt" | "title"> {}
