export interface MonthPickerValue {
  month: number | string
  year: number | string
}
export interface TimePickerValue {
  hours: number | string
  minutes: number | string
  seconds?: number | string
}

export interface DatePickerRangeValue {
  end: Date | string
  start: Date | string
}
