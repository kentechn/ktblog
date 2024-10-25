import type { CheerioAPI } from "cheerio"
import hljs from "highlight.js"
import type { Toc } from "~~/interfaces"

/**
 * UTC時間の日付(string型)を日本時間の日付(string型)に変換
 *
 * @param date
 * @returns string
 */
export const formatUTCToJpDate = (date: string) => {
  const utcDate = new Date(date)

  // UTCから日本時間への変換
  const japanTimeOffset = 9 * 60 // 日本時間はUTC+9（分単位）
  const japanDate = new Date(utcDate.getTime() + japanTimeOffset * 60000)

  const year = japanDate.getFullYear()
  const month = japanDate.getMonth() + 1
  const day = japanDate.getDate()

  // "yyyy/mm/dd" 形式の日付文字列を作成
  const japanDateString = year + "/" + month + "/" + day

  return japanDateString
}

export function generateToc($: CheerioAPI) {
  const tocs: Toc[] = []
  const headings = $("h2, h3").toArray()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headings.forEach((heading: any) => {
    const id = heading.attribs.id
    const text
      = heading.children[0].data ?? heading.children[0].children[0].data

    if (heading.name === "h2") {
      tocs.push({ id, text, children: [] })
    }
    else if (heading.name === "h3") {
      const parentToc = tocs[tocs.length - 1]
      parentToc?.children?.push({ id, text })
    }
  })

  return tocs
}

export function highlightHtml($: CheerioAPI) {
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass("hljs")
  })

  return $
}
