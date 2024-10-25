<script setup lang="ts">
import type * as cheerio from "cheerio"
import BaseText from "../elements/texts/BaseText.vue"

interface Props {
  headings: cheerio.Element[]
}

interface Toc {
  id: string
  name: string
  text: string
}

interface ParentToc extends Toc {
  children: Toc[]
}

const props = defineProps<Props>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tocs: ParentToc[] = props.headings.map((item: any) => ({
  id: item.attribs.id,
  name: item.name,
  text: item.children[0].data,
  children: [],
}))

const parentTocList: ParentToc[] = []

tocs.forEach((toc) => {
  if (toc.name === "h2") {
    parentTocList.push(toc)
  }
  else if (toc.name === "h3" && parentTocList.at(-1) !== undefined) {
    parentTocList.at(-1)!.children.push(toc)
  }
})
</script>

<template>
  <div class="p-4 bg-base-200 rounded-md break-words">
    <BaseText
      size="lg"
      weight="bold"
    >
      目次
    </BaseText>
    <ul
      class="bg-base-200 rounded-box mt-3"
    >
      <li
        v-for="item in parentTocList"
        :key="item.id"
        class="pb-3"
      >
        <a
          :href="`#${item.id}`"
          class="link link-hover"
        >{{ item.text }}</a>
        <ul v-if="item.children.length > 0">
          <li
            v-for="childToc in item.children"
            :key="childToc.id"
            class="py-2 ml-4"
          >
            <a
              :href="`#${childToc.id}`"
              class="link link-hover"
            >{{ childToc.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
