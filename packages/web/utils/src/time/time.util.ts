import { Temporal } from 'temporal-polyfill'

/**
 * Utility class for common date and time operations using the Temporal API.
 *
 * Methods are grouped by the Temporal type they operate on:
 * - **`Temporal.PlainDate`** — calendar date only (no time, no timezone). The primary type used throughout the project.
 * - **`Temporal.PlainDateTime`** — date plus wall-clock time, no timezone (e.g. "meeting at 09:00 on 2024-01-15").
 * - **`Temporal.ZonedDateTime`** — fully timezone-aware instant (e.g. for scheduling across zones, API timestamps).
 */
export class TimeUtil {
  // ---------------------------------------------------------------------------
  // Temporal.PlainDate
  // ---------------------------------------------------------------------------

  /**
   * Returns today's date as a `Temporal.PlainDate` in the ISO calendar,
   * resolved in the local system timezone.
   *
   * @example
   * TimeUtil.today() // Temporal.PlainDate { 2024-01-15 }
   */
  static today(): Temporal.PlainDate {
    return Temporal.Now.plainDateISO()
  }

  /**
   * Formats a `Temporal.PlainDate` using `Intl.DateTimeFormat` options.
   *
   * @example
   * TimeUtil.format(date, { dateStyle: 'long' }, 'en-US') // 'January 15, 2024'
   * TimeUtil.format(date, { month: 'short', year: 'numeric' }, 'nl-BE') // 'jan. 2024'
   */
  static format(date: Temporal.PlainDate, options: Intl.DateTimeFormatOptions, locale: string = 'en-US'): string {
    return date.toLocaleString(locale, options)
  }

  /**
   * Formats a `Temporal.PlainDate` relative to today using `Intl.RelativeTimeFormat`.
   * Picks the largest meaningful unit (days → weeks → months → years).
   *
   * @example
   * // If today is 2024-01-15:
   * TimeUtil.formatRelative(Temporal.PlainDate.from('2024-01-13'), 'en-US') // '2 days ago'
   * TimeUtil.formatRelative(Temporal.PlainDate.from('2024-01-17'), 'en-US') // 'in 2 days'
   */
  static formatRelative(date: Temporal.PlainDate, locale: string = 'en-US'): string {
    const today = Temporal.Now.plainDateISO()
    const diffDays = today.until(date).total({ unit: 'day' })
    const absDays = Math.abs(diffDays)
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

    if (absDays < 7) {
      return rtf.format(Math.round(diffDays), 'day')
    }

    if (absDays < 30) {
      return rtf.format(Math.round(diffDays / 7), 'week')
    }

    if (absDays < 365) {
      return rtf.format(Math.round(diffDays / 30), 'month')
    }

    return rtf.format(Math.round(diffDays / 365), 'year')
  }

  /**
   * Returns `true` if the given date is today.
   *
   * @example
   * TimeUtil.isToday(Temporal.Now.plainDateISO()) // true
   */
  static isToday(date: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(date, Temporal.Now.plainDateISO()) === 0
  }

  /**
   * Returns `true` if the given date is strictly after today.
   *
   * @example
   * TimeUtil.isFuture(Temporal.Now.plainDateISO().add({ days: 1 })) // true
   */
  static isFuture(date: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(date, Temporal.Now.plainDateISO()) > 0
  }

  /**
   * Returns `true` if the given date is strictly before today.
   *
   * @example
   * TimeUtil.isPast(Temporal.Now.plainDateISO().subtract({ days: 1 })) // true
   */
  static isPast(date: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(date, Temporal.Now.plainDateISO()) < 0
  }

  /**
   * Returns a new `Temporal.PlainDate` with the given number of days added.
   * Temporal values are immutable — the original is never mutated.
   *
   * @example
   * TimeUtil.addDays(Temporal.PlainDate.from('2024-01-01'), 5) // 2024-01-06
   */
  static addDays(date: Temporal.PlainDate, days: number): Temporal.PlainDate {
    return date.add({ days })
  }

  /**
   * Returns a new `Temporal.PlainDate` with the given number of days subtracted.
   *
   * @example
   * TimeUtil.subtractDays(Temporal.PlainDate.from('2024-01-10'), 5) // 2024-01-05
   */
  static subtractDays(date: Temporal.PlainDate, days: number): Temporal.PlainDate {
    return date.subtract({ days })
  }

  /**
   * Returns the absolute number of calendar days between two dates.
   *
   * @example
   * TimeUtil.diffInDays(
   *   Temporal.PlainDate.from('2024-01-01'),
   *   Temporal.PlainDate.from('2024-01-10'),
   * ) // 9
   */
  static diffInDays(a: Temporal.PlainDate, b: Temporal.PlainDate): number {
    return Math.abs(a.until(b).total({ unit: 'day' }))
  }

  /**
   * Returns `true` if two dates fall on the same calendar day.
   */
  static isSameDay(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) === 0
  }

  /**
   * Returns `true` if `a` is strictly before `b`.
   */
  static isBefore(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) < 0
  }

  /**
   * Returns `true` if `a` is strictly after `b`.
   */
  static isAfter(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) > 0
  }

  /**
   * Clamps a date between a minimum and maximum (both inclusive).
   *
   * @example
   * TimeUtil.clamp(
   *   Temporal.PlainDate.from('2024-01-20'),
   *   Temporal.PlainDate.from('2024-01-01'),
   *   Temporal.PlainDate.from('2024-01-15'),
   * ) // 2024-01-15
   */
  static clamp(date: Temporal.PlainDate, min: Temporal.PlainDate, max: Temporal.PlainDate): Temporal.PlainDate {
    if (Temporal.PlainDate.compare(date, min) < 0) {
      return min
    }

    if (Temporal.PlainDate.compare(date, max) > 0) {
      return max
    }

    return date
  }

  // ---------------------------------------------------------------------------
  // Temporal.PlainDateTime
  // ---------------------------------------------------------------------------

  /**
   * Returns the current local date and time as a `Temporal.PlainDateTime` (no timezone).
   * Use `TimeUtil.nowZoned()` when timezone context matters.
   *
   * @example
   * TimeUtil.nowDateTime() // Temporal.PlainDateTime { 2024-01-15T14:30:00 }
   */
  static nowDateTime(): Temporal.PlainDateTime {
    return Temporal.Now.plainDateTimeISO()
  }

  /**
   * Combines a `Temporal.PlainDate` and a `Temporal.PlainTime` into a `Temporal.PlainDateTime`.
   *
   * @example
   * const date = Temporal.PlainDate.from('2024-01-15')
   * const time = Temporal.PlainTime.from('09:30')
   * TimeUtil.combineDateTime(date, time) // 2024-01-15T09:30:00
   */
  static combineDateTime(date: Temporal.PlainDate, time: Temporal.PlainTime): Temporal.PlainDateTime {
    return date.toPlainDateTime(time)
  }

  /**
   * Formats a `Temporal.PlainDateTime` using `Intl.DateTimeFormat` options.
   *
   * @example
   * TimeUtil.formatDateTime(dt, { dateStyle: 'short', timeStyle: 'short' }, 'en-US')
   * // '1/15/24, 9:30 AM'
   */
  static formatDateTime(dt: Temporal.PlainDateTime, options: Intl.DateTimeFormatOptions, locale: string = 'en-US'): string {
    return dt.toLocaleString(locale, options)
  }

  /**
   * Returns a new `Temporal.PlainDateTime` with the time component set to midnight (00:00:00).
   *
   * @example
   * TimeUtil.startOfDay(Temporal.PlainDateTime.from('2024-01-15T14:30:00'))
   * // 2024-01-15T00:00:00
   */
  static startOfDay(dt: Temporal.PlainDateTime): Temporal.PlainDateTime {
    return dt.with({
      hour: 0,
      microsecond: 0,
      millisecond: 0,
      minute: 0,
      nanosecond: 0,
      second: 0,
    })
  }

  /**
   * Returns a new `Temporal.PlainDateTime` with the time component set to one nanosecond
   * before midnight (23:59:59.999999999).
   *
   * @example
   * TimeUtil.endOfDay(Temporal.PlainDateTime.from('2024-01-15T08:00:00'))
   * // 2024-01-15T23:59:59.999999999
   */
  static endOfDay(dt: Temporal.PlainDateTime): Temporal.PlainDateTime {
    return dt.with({
      hour: 23,
      microsecond: 999,
      millisecond: 999,
      minute: 59,
      nanosecond: 999,
      second: 59,
    })
  }

  /**
   * Returns a new `Temporal.PlainDateTime` with the given number of hours added.
   *
   * @example
   * TimeUtil.addHours(Temporal.PlainDateTime.from('2024-01-15T10:00'), 3)
   * // 2024-01-15T13:00:00
   */
  static addHours(dt: Temporal.PlainDateTime, hours: number): Temporal.PlainDateTime {
    return dt.add({ hours })
  }

  /**
   * Returns a new `Temporal.PlainDateTime` with the given number of minutes added.
   *
   * @example
   * TimeUtil.addMinutes(Temporal.PlainDateTime.from('2024-01-15T10:00'), 90)
   * // 2024-01-15T11:30:00
   */
  static addMinutes(dt: Temporal.PlainDateTime, minutes: number): Temporal.PlainDateTime {
    return dt.add({ minutes })
  }

  // ---------------------------------------------------------------------------
  // Temporal.ZonedDateTime
  // ---------------------------------------------------------------------------

  /**
   * Returns the IANA identifier of the local system timezone (e.g. `"Europe/Brussels"`).
   *
   * @example
   * TimeUtil.localTimeZone() // 'Europe/Brussels'
   */
  static localTimeZone(): string {
    return Temporal.Now.timeZoneId()
  }

  /**
   * Returns the current instant as a `Temporal.ZonedDateTime` in the given timezone.
   * Defaults to the local system timezone when no argument is provided.
   *
   * @example
   * TimeUtil.nowZoned()              // current local ZonedDateTime
   * TimeUtil.nowZoned('UTC')         // current UTC ZonedDateTime
   * TimeUtil.nowZoned('Asia/Tokyo')  // current Tokyo ZonedDateTime
   */
  static nowZoned(timeZone?: string): Temporal.ZonedDateTime {
    return Temporal.Now.zonedDateTimeISO(timeZone ?? Temporal.Now.timeZoneId())
  }

  /**
   * Returns a new `Temporal.ZonedDateTime` at the start of the day in its own timezone.
   * Correctly handles DST transitions (the day is not assumed to be 24 hours).
   *
   * @example
   * TimeUtil.startOfDayZoned(zdt) // same date, 00:00:00 in zdt's timezone
   */
  static startOfDayZoned(zdt: Temporal.ZonedDateTime): Temporal.ZonedDateTime {
    return zdt.startOfDay()
  }

  /**
   * Returns a new `Temporal.ZonedDateTime` at the very end of the day in its own timezone
   * (one nanosecond before the next day begins). Correctly handles DST transitions.
   *
   * @example
   * TimeUtil.endOfDayZoned(zdt) // same date, 23:59:59.999999999 (or last valid instant)
   */
  static endOfDayZoned(zdt: Temporal.ZonedDateTime): Temporal.ZonedDateTime {
    return zdt.startOfDay().add({ days: 1 }).subtract({ nanoseconds: 1 })
  }

  /**
   * Converts a `Temporal.ZonedDateTime` to UTC, preserving the same instant in time.
   *
   * @example
   * TimeUtil.toUtc(brusselsNoon) // same instant expressed in UTC
   */
  static toUtc(zdt: Temporal.ZonedDateTime): Temporal.ZonedDateTime {
    return zdt.withTimeZone('UTC')
  }

  /**
   * Re-expresses a `Temporal.ZonedDateTime` in a different timezone.
   * The underlying instant does not change — only the "view" changes.
   *
   * @example
   * TimeUtil.toTimeZone(utcNoon, 'Asia/Tokyo') // same instant, Tokyo local time
   */
  static toTimeZone(zdt: Temporal.ZonedDateTime, timeZone: string): Temporal.ZonedDateTime {
    return zdt.withTimeZone(timeZone)
  }

  /**
   * Formats a `Temporal.ZonedDateTime` using `Intl.DateTimeFormat` options.
   *
   * @example
   * TimeUtil.formatZoned(zdt, { dateStyle: 'full', timeStyle: 'long' }, 'en-US')
   * // 'Monday, January 15, 2024 at 2:30:00 PM GMT+1'
   */
  static formatZoned(zdt: Temporal.ZonedDateTime, options: Intl.DateTimeFormatOptions, locale: string = 'en-US'): string {
    return zdt.toLocaleString(locale, options)
  }

  /**
   * Extracts the `Temporal.PlainDate` portion from a `Temporal.ZonedDateTime`.
   *
   * @example
   * TimeUtil.toPlainDate(zdt) // Temporal.PlainDate { 2024-01-15 }
   */
  static toPlainDate(zdt: Temporal.ZonedDateTime): Temporal.PlainDate {
    return zdt.toPlainDate()
  }

  /**
   * Extracts the `Temporal.PlainDateTime` portion (date + time, no timezone) from a
   * `Temporal.ZonedDateTime`.
   *
   * @example
   * TimeUtil.toPlainDateTime(zdt) // Temporal.PlainDateTime { 2024-01-15T14:30:00 }
   */
  static toPlainDateTime(zdt: Temporal.ZonedDateTime): Temporal.PlainDateTime {
    return zdt.toPlainDateTime()
  }
}
