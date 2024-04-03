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
