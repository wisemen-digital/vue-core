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

export interface DatePickerRangeConfig {
  autoRange?: number | string
  fixedEnd?: boolean // Should not be used in combination with fixedStart
  fixedStart?: boolean // Should not be used in combination with fixedEnd
  maxRange?: number | string
  minRange?: number | string
  noDisabledRange?: boolean // Prevents range selection if the range includes disabled dates
}
