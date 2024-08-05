export interface DatePickerHighlightConfig {
  dates: Date[]
  months: { month: number, year: number }[]
  options: { highlightDisabled: boolean }
  quarters: { quarter: number, year: number }[]
  weekdays: number[]
  years: number[]
}

export interface DatePickerMarker {
  color?: string
  // el is a HTML element of a calendar cell
  customPosition?: (el: HTMLElement) => Record<string, number | string>
  date: Date | string
  tooltip?: { color?: string, text: string }[]
  type?: 'dot' | 'line'
}
