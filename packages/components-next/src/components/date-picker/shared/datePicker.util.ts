import {
  CalendarDate,
  getLocalTimeZone,
} from '@internationalized/date'
import type { DateValue } from 'reka-ui'

export function dateToDateValue(date: Date): DateValue {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate()) as unknown as DateValue
}

export function dateValueToDate(value: DateValue): Date {
  return value.toDate(getLocalTimeZone())
}

// 0-based
export function getMonthName(month: number, locale: string, format: 'long' | 'short'): string {
  return new Intl.DateTimeFormat(locale, { month: format }).format(new Date(1, month))
}

// 0-based
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}
