import {
  CalendarDate,
  getLocalTimeZone,
} from '@internationalized/date'
import type { DateValue } from 'reka-ui'
import { Temporal } from 'temporal-polyfill'

function plainDateToDate(plainDate: Temporal.PlainDate): Date {
  return new Date(plainDate.toString())
}

export function dateToDateValue(date: Date): DateValue {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate()) as unknown as DateValue
}

export function dateValueToPlainDate(value: DateValue): Temporal.PlainDate {
  const date = value.toDate(getLocalTimeZone())

  return new Temporal.PlainDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

export function plainDateToDateValue(plainDate: Temporal.PlainDate): DateValue {
  return dateToDateValue(plainDateToDate(plainDate))
}

export function dateValueToDate(value: DateValue): Date {
  return value.toDate(getLocalTimeZone())
}

// 0-based
export function getMonthName(month: number, locale: string, format: 'long' | 'short'): string {
  return new Intl.DateTimeFormat(locale, {
    month: format,
  }).format(new Date(1, month))
}

// 0-based
export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate()
}
