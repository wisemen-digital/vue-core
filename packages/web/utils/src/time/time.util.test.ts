import { Temporal } from 'temporal-polyfill'
import {
  describe,
  expect,
  it,
} from 'vitest'

import { TimeUtil } from './time.util'

function date(iso: string): Temporal.PlainDate {
  return Temporal.PlainDate.from(iso)
}

function dateTime(iso: string): Temporal.PlainDateTime {
  return Temporal.PlainDateTime.from(iso)
}

function zoned(iso: string): Temporal.ZonedDateTime {
  return Temporal.ZonedDateTime.from(iso)
}

describe('timeUtil', () => {
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

  describe('combineDateTime', () => {
    it('combines a PlainDate and PlainTime into a PlainDateTime', () => {
      const d = date('2024-01-15')
      const t = Temporal.PlainTime.from('09:30')

      expect(TimeUtil.combineDateTime(d, t).toString()).toBe('2024-01-15T09:30:00')
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

  describe('endOfDayZoned', () => {
    it('is one nanosecond before the start of the next day', () => {
      const zdt = zoned('2024-01-15T08:00:00[UTC]')
      const endOfDay = TimeUtil.endOfDayZoned(zdt)
      const startOfNextDay = zdt.startOfDay().add({
        days: 1,
      })

      expect(endOfDay.add({
        nanoseconds: 1,
      }).epochNanoseconds).toBe(startOfNextDay.epochNanoseconds)
    })

    it('preserves the timezone', () => {
      const zdt = zoned('2024-01-15T08:00:00[UTC]')

      expect(TimeUtil.endOfDayZoned(zdt).timeZoneId).toBe('UTC')
    })
  })

  describe('isAfter', () => {
    it('returns true when a is after b', () => {
      expect(TimeUtil.isAfter(date('2024-01-10'), date('2024-01-01'))).toBeTruthy()
    })

    it('returns false when dates are equal', () => {
      expect(TimeUtil.isAfter(date('2024-01-01'), date('2024-01-01'))).toBeFalsy()
    })

    it('returns false when a is before b', () => {
      expect(TimeUtil.isAfter(date('2024-01-01'), date('2024-01-10'))).toBeFalsy()
    })
  })

  describe('isBefore', () => {
    it('returns true when a is before b', () => {
      expect(TimeUtil.isBefore(date('2024-01-01'), date('2024-01-10'))).toBeTruthy()
    })

    it('returns false when dates are equal', () => {
      expect(TimeUtil.isBefore(date('2024-01-01'), date('2024-01-01'))).toBeFalsy()
    })

    it('returns false when a is after b', () => {
      expect(TimeUtil.isBefore(date('2024-01-10'), date('2024-01-01'))).toBeFalsy()
    })
  })

  describe('isSameDay', () => {
    it('returns true for the same date', () => {
      expect(TimeUtil.isSameDay(date('2024-01-15'), date('2024-01-15'))).toBeTruthy()
    })

    it('returns false for different dates', () => {
      expect(TimeUtil.isSameDay(date('2024-01-15'), date('2024-01-16'))).toBeFalsy()
    })
  })

  describe('isToday', () => {
    it('returns true for today', () => {
      expect(TimeUtil.isToday(Temporal.Now.plainDateISO())).toBeTruthy()
    })

    it('returns false for yesterday', () => {
      expect(TimeUtil.isToday(Temporal.Now.plainDateISO().subtract({
        days: 1,
      }))).toBeFalsy()
    })
  })

  describe('isFuture', () => {
    it('returns true for a date in the future', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO().add({
        days: 1,
      }))).toBeTruthy()
    })

    it('returns false for today', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO())).toBeFalsy()
    })

    it('returns false for a past date', () => {
      expect(TimeUtil.isFuture(Temporal.Now.plainDateISO().subtract({
        days: 1,
      }))).toBeFalsy()
    })
  })

  describe('isPast', () => {
    it('returns true for a date in the past', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO().subtract({
        days: 1,
      }))).toBeTruthy()
    })

    it('returns false for today', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO())).toBeFalsy()
    })

    it('returns false for a future date', () => {
      expect(TimeUtil.isPast(Temporal.Now.plainDateISO().add({
        days: 1,
      }))).toBeFalsy()
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
})
