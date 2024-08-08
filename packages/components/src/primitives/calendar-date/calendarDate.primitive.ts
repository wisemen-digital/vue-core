import { CalendarDateTime } from '@/primitives/calendar-date-time/calendarDateTime.primitive'
import { NumberUtil } from '@/utils/number.util'

export class CalendarDate {
  value: CalendarDateTime = new CalendarDateTime()

  /*
  * Creates a new CalendarDate object
  * @param year - The year of the date
  * @param month - The month of the date (1-12)
  * @param day - The day of the date
  */
  constructor(year?: number, month?: number, day?: number) {
    this.set({ day, month, year })
  }

  /*
  * Creates a new CalendarDate object from a Date object
  * @param date - The Date object to create the CalendarDate from
  * @returns The new CalendarDate object
  */
  static fromDate(date: Date): CalendarDate {
    return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
  }

  /*
  * Parses a date string in the format 'YYYY-MM-DD'
  * @param value - The date string to parse
  * @returns The new CalendarDate object
  */
  static parse(value: string): CalendarDate {
    const [
      year,
      month,
      day,
    ] = value.split('-').map(Number)

    return new CalendarDate(year, month, day)
  }

  /*
  * Adds days, months, weeks, or years to the date
  * @param value - The value to add to the date
  * @returns The updated date
   */
  add(value: { days?: number, months?: number, weeks?: number, years?: number }): CalendarDate {
    this.value.add({
      days: value.days,
      months: value.months,
      weeks: value.weeks,
      years: value.years,
    })

    return this
  }

  /*
  * Returns the day of the date as a number from 1 to 31
  */
  getDay(): number {
    return this.value.getDay()
  }

  /*
  * Returns the month of the date as a number from 1 (January) to 12 (December)
  */
  getMonth(): number {
    return this.value.getMonth() + 1
  }

  /*
  * Returns the year of the date as a number
  */
  getYear(): number {
    return this.value.getYear()
  }

  /*
  * Compares the date with another date and returns true if the date is after the other date
  * @param date - The date to compare with
  */
  isAfter(date: CalendarDate): boolean {
    return this.value.isAfter(date.value)
  }

  /*
  * Compares the date with another date and returns true if the date is after or equal to the other date
  * @param date - The date to compare with
  * @returns True if the date is after or equal to the other date, false otherwise
  */
  isAfterOrEqualTo(date: CalendarDate): boolean {
    return this.value.isAfterOrEqualTo(date.value)
  }

  /*
  * Compares the date with another date and returns true if the date is before the other date
  * @param date - The date to compare with
  */
  isBefore(date: CalendarDate): boolean {
    return this.value.isBefore(date.value)
  }

  /*
  * Compares the date with another date and returns true if the date is after or equal to the other date
  * @param date - The date to compare with
  * @returns True if the date is after or equal to the other date, false otherwise
  */
  isBeforeOrEqualTo(date: CalendarDate): boolean {
    return this.value.isBeforeOrEqualTo(date.value)
  }

  /*
  * Compares the date with another date and returns true if the date is equal to the other date
  * @param date - The date to compare with
  */
  isEqualTo(date: CalendarDate): boolean {
    return this.value.isEqualTo(date.value)
  }

  /*
  * Sets the date to a specific day, month, and year
  * @param value - The value to set the date to
  * @returns The updated date
  */
  set(value: { day?: number, month?: number, year?: number }): CalendarDate {
    this.value.set({
      days: value.day,
      months: value.month,
      years: value.year,
    })

    return this
  }

  /*
  * Subtracts days, months, weeks, or years from the date
  * @param value - The value to subtract from the date
  * @returns The updated date
  */
  subtract(value: { days?: number, months?: number, weeks?: number, years?: number }): CalendarDate {
    this.value.subtract({
      days: value.days,
      months: value.months,
      weeks: value.weeks,
      years: value.years,
    })

    return this
  }

  /*
  * Returns a Date object
  */
  toDate(): Date {
    return this.value.toDate()
  }

  /*
  * Returns the date as a string in the format 'YYYY-MM-DD'
  * @returns The date as a string
  */
  toString(): string {
    const month = NumberUtil.pad(this.getMonth(), 2)
    const day = NumberUtil.pad(this.getDay(), 2)

    return `${this.getYear()}-${month}-${day}`
  }
}
