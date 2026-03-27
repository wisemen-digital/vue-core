import { Temporal } from 'temporal-polyfill'

/**
 * Utility class for common date and time operations using the Temporal API.
 *
 */
export class TimeUtil {
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
   * Returns the absolute number of calendar days between two dates.
   *
   * @example
   * TimeUtil.diffInDays(
   *   Temporal.PlainDate.from('2024-01-01'),
   *   Temporal.PlainDate.from('2024-01-10'),
   * ) // 9
   */
  static diffInDays(a: Temporal.PlainDate, b: Temporal.PlainDate): number {
    return Math.abs(a.until(b).total({
      unit: 'day',
    }))
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
   * Returns a new `Temporal.ZonedDateTime` at the very end of the day in its own timezone
   * (one nanosecond before the next day begins). Correctly handles DST transitions.
   *
   * @example
   * TimeUtil.endOfDayZoned(zdt) // same date, 23:59:59.999999999 (or last valid instant)
   */
  static endOfDayZoned(zdt: Temporal.ZonedDateTime): Temporal.ZonedDateTime {
    return zdt.startOfDay().add({
      days: 1,
    }).subtract({
      nanoseconds: 1,
    })
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
    const diffDays = today.until(date).total({
      unit: 'day',
    })
    const absDays = Math.abs(diffDays)
    const rtf = new Intl.RelativeTimeFormat(locale, {
      numeric: 'auto',
    })

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
   * Returns `true` if `a` is strictly after `b`.
   */
  static isAfter(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) > 0
  }

  /**
   * Returns `true` if `a` is strictly before `b`.
   */
  static isBefore(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) < 0
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
   * Returns `true` if two dates fall on the same calendar day.
   */
  static isSameDay(a: Temporal.PlainDate, b: Temporal.PlainDate): boolean {
    return Temporal.PlainDate.compare(a, b) === 0
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
}
