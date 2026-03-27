import { Temporal } from 'temporal-polyfill'
import { describe, expect, it } from 'vitest'

import { TimeUtil } from './time.util'

const date = (iso: string): Temporal.PlainDate => Temporal.PlainDate.from(iso)
const dateTime = (iso: string): Temporal.PlainDateTime => Temporal.PlainDateTime.from(iso)
const zoned = (iso: string): Temporal.ZonedDateTime => Temporal.ZonedDateTime.from(iso)

describe('TimeUtil', () => {
  // -------------------------------------------------------------------------
  // Temporal.PlainDate
  // -------------------------------------------------------------------------

  describe('today', () => {
    it('returns a PlainDate matching the current date', () => {
      expect(TimeUtil.isSameDay(TimeUtil.today(), Temporal.Now.plainDateISO())).toBe(true)
    })
  })

  describe('format', () => {
    it('formats a date with the given options and locale', () => {
      const result = TimeUtil.format(date('2024-01-15'), { month: 'long', year: 'numeric' }, 'en-US')
      expect(result).toContain('January')
      expect(result).toContain('2024')
    })
  })

  describe('isToday', () => {
    it('returns true for today', () => {
      expect(TimeUtil.isToday(Temporal.Now.plainDateISO())).toBe(true)
    })

    it('returns false for yesterday', () => {
      expect(TimeUtil.isToday(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(false)
    })
  })

  describe('isFuture', () => {
    it('returns true for a date in the future', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(true)
    })

    it('returns false for today', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO())).toBe(false)
    })

    it('returns false for a past date', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(false)
    })
  })

  describe('isPast', () => {
    it('returns true for a date in the past', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(true)
    })

    it('returns false for today', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO())).toBe(false)
    })

    it('returns false for a future date', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(false)
    })
  })

  describe('addDays', () => {
    it('adds the given number of days', () => {
      expect(TimeUtil.addDays(date('2024-01-01'), 5).toString()).toBe('2024-01-06')
    })

    it('handles month rollovers', () => {
      expect(TimeUtil.addDays(date('2024-01-30'), 5).toString()).toBe('2024-02-04')
    })
  })

  describe('subtractDays', () => {
    it('subtracts the given number of days', () => {
      expect(TimeUtil.subtractDays(date('2024-01-10'), 5).toString()).toBe('2024-01-05')
    })
  })

  describe('diffInDays', () => {
    it('returns the absolute difference in calendar days', () => {
      expect(TimeUtil.diffInDays(date('2024-01-01'), date('2024-01-10'))).toBe(9)
    })

    it('returns the same value regardless of argument order', () => {
      expect(TimeUtil.diffInDays(date('2024-01-10'), date('2024-01-01'))).toBe(9)
    })

    it('returns 0 for the same date', () => {
      expect(TimeUtil.diffInDays(date('2024-06-15'), date('2024-06-15'))).toBe(0)
    })
  })

  describe('isSameDay', () => {
    it('returns true for the same date', () => {
      expect(TimeUtil.isSameDay(date('2024-01-15'), date('2024-01-15'))).toBe(true)
    })

    it('returns false for different dates', () => {
      expect(TimeUtil.isSameDay(date('2024-01-15'), date('2024-01-16'))).toBe(false)
    })
  })

  describe('isBefore', () => {
    it('returns true when a is before b', () => {
      expect(TimeUtil.isBefore(date('2024-01-01'), date('2024-01-10'))).toBe(true)
    })

    it('returns false when dates are equal', () => {
      expect(TimeUtil.isBefore(date('2024-01-01'), date('2024-01-01'))).toBe(false)
    })

    it('returns false when a is after b', () => {
      expect(TimeUtil.isBefore(date('2024-01-10'), date('2024-01-01'))).toBe(false)
    })
  })

  describe('isAfter', () => {
    it('returns true when a is after b', () => {
      expect(TimeUtil.isAfter(date('2024-01-10'), date('2024-01-01'))).toBe(true)
    })

    it('returns false when dates are equal', () => {
      expect(TimeUtil.isAfter(date('2024-01-01'), date('2024-01-01'))).toBe(false)
    })

    it('returns false when a is before b', () => {
      expect(TimeUtil.isAfter(date('2024-01-01'), date('2024-01-10'))).toBe(false)
    })
  })

  describe('clamp', () => {
    const min = date('2024-01-01')
    const max = date('2024-01-31')

    it('returns the date unchanged when within range', () => {
      expect(TimeUtil.clamp(date('2024-01-15'), min, max).toString()).toBe('2024-01-15')
    })

    it('returns min when date is before min', () => {
      expect(TimeUtil.clamp(date('2023-12-01'), min, max).toString()).toBe('2024-01-01')
    })

    it('returns max when date is after max', () => {
      expect(TimeUtil.clamp(date('2024-03-01'), min, max).toString()).toBe('2024-01-31')
    })
  })

  // -------------------------------------------------------------------------
  // Temporal.PlainDateTime
  // -------------------------------------------------------------------------

  describe('nowDateTime', () => {
    it('returns a PlainDateTime close to the current time', () => {
      const now = TimeUtil.nowDateTime()
      const expected = Temporal.Now.plainDateTimeISO()
      // Allow 1-second tolerance for slow test environments
      expect(Math.abs(now.until(expected).total({ unit: 'second' }))).toBeLessThan(2)
    })
  })

  describe('combineDateTime', () => {
    it('combines a PlainDate and PlainTime into a PlainDateTime', () => {
      const d = date('2024-01-15')
      const t = Temporal.PlainTime.from('09:30')
      expect(TimeUtil.combineDateTime(d, t).toString()).toBe('2024-01-15T09:30:00')
    })
  })

  describe('formatDateTime', () => {
    it('formats a PlainDateTime with the given options', () => {
      const dt = dateTime('2024-01-15T09:30:00')
      const result = TimeUtil.formatDateTime(dt, { dateStyle: 'short', timeStyle: 'short' }, 'en-US')
      expect(result).toContain('24') // short year in en-US
      expect(result).toContain('9:30')
    })
  })

  describe('startOfDay', () => {
    it('sets the time to midnight', () => {
      const result = TimeUtil.startOfDay(dateTime('2024-01-15T14:30:45.123'))
      expect(result.hour).toBe(0)
      expect(result.minute).toBe(0)
      expect(result.second).toBe(0)
      expect(result.millisecond).toBe(0)
      expect(result.microsecond).toBe(0)
      expect(result.nanosecond).toBe(0)
    })

    it('preserves the date', () => {
      const result = TimeUtil.startOfDay(dateTime('2024-01-15T14:30:00'))
      expect(result.toPlainDate().toString()).toBe('2024-01-15')
    })
  })

  describe('endOfDay', () => {
    it('sets the time to the last nanosecond of the day', () => {
      const result = TimeUtil.endOfDay(dateTime('2024-01-15T08:00:00'))
      expect(result.hour).toBe(23)
      expect(result.minute).toBe(59)
      expect(result.second).toBe(59)
      expect(result.millisecond).toBe(999)
      expect(result.microsecond).toBe(999)
      expect(result.nanosecond).toBe(999)
    })

    it('preserves the date', () => {
      const result = TimeUtil.endOfDay(dateTime('2024-01-15T08:00:00'))
      expect(result.toPlainDate().toString()).toBe('2024-01-15')
    })
  })

  describe('addHours', () => {
    it('adds the given number of hours', () => {
      expect(TimeUtil.addHours(dateTime('2024-01-15T10:00:00'), 3).toString()).toBe('2024-01-15T13:00:00')
    })

    it('rolls over to the next day', () => {
      expect(TimeUtil.addHours(dateTime('2024-01-15T22:00:00'), 3).toString()).toBe('2024-01-16T01:00:00')
    })
  })

  describe('addMinutes', () => {
    it('adds the given number of minutes', () => {
      expect(TimeUtil.addMinutes(dateTime('2024-01-15T10:00:00'), 90).toString()).toBe('2024-01-15T11:30:00')
    })
  })

  // -------------------------------------------------------------------------
  // Temporal.ZonedDateTime
  // -------------------------------------------------------------------------

  describe('localTimeZone', () => {
    it('returns a non-empty IANA timezone string', () => {
      expect(TimeUtil.localTimeZone().length).toBeGreaterThan(0)
    })
  })

  describe('nowZoned', () => {
    it('returns a ZonedDateTime in the local timezone by default', () => {
      const now = TimeUtil.nowZoned()
      expect(now.timeZoneId).toBe(Temporal.Now.timeZoneId())
    })

    it('returns a ZonedDateTime in the specified timezone', () => {
      const now = TimeUtil.nowZoned('UTC')
      expect(now.timeZoneId).toBe('UTC')
    })
  })

  describe('startOfDayZoned', () => {
    it('sets time to the start of the day in the same timezone', () => {
      const zdt = zoned('2024-01-15T14:30:00[UTC]')
      const result = TimeUtil.startOfDayZoned(zdt)
      expect(result.hour).toBe(0)
      expect(result.minute).toBe(0)
      expect(result.second).toBe(0)
      expect(result.timeZoneId).toBe('UTC')
    })
  })

  describe('endOfDayZoned', () => {
    it('is one nanosecond before the start of the next day', () => {
      const zdt = zoned('2024-01-15T08:00:00[UTC]')
      const endOfDay = TimeUtil.endOfDayZoned(zdt)
      const startOfNextDay = TimeUtil.startOfDayZoned(zdt).add({ days: 1 })
      expect(endOfDay.add({ nanoseconds: 1 }).epochNanoseconds).toBe(startOfNextDay.epochNanoseconds)
    })

    it('preserves the timezone', () => {
      const zdt = zoned('2024-01-15T08:00:00[UTC]')
      expect(TimeUtil.endOfDayZoned(zdt).timeZoneId).toBe('UTC')
    })
  })

  describe('toUtc', () => {
    it('converts to UTC while preserving the instant', () => {
      const zdt = zoned('2024-01-15T12:00:00+01:00[Europe/Paris]')
      const utc = TimeUtil.toUtc(zdt)
      expect(utc.timeZoneId).toBe('UTC')
      expect(utc.epochSeconds).toBe(zdt.epochSeconds)
    })
  })

  describe('toTimeZone', () => {
    it('converts to the target timezone while preserving the instant', () => {
      const utc = zoned('2024-01-15T11:00:00[UTC]')
      const tokyo = TimeUtil.toTimeZone(utc, 'Asia/Tokyo')
      expect(tokyo.timeZoneId).toBe('Asia/Tokyo')
      expect(tokyo.epochSeconds).toBe(utc.epochSeconds)
    })
  })

  describe('toPlainDate', () => {
    it('extracts the date portion from a ZonedDateTime', () => {
      const zdt = zoned('2024-01-15T14:30:00[UTC]')
      expect(TimeUtil.toPlainDate(zdt).toString()).toBe('2024-01-15')
    })
  })

  describe('toPlainDateTime', () => {
    it('extracts date and time without timezone from a ZonedDateTime', () => {
      const zdt = zoned('2024-01-15T14:30:00[UTC]')
      expect(TimeUtil.toPlainDateTime(zdt).toString()).toBe('2024-01-15T14:30:00')
    })
  })
})
