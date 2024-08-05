import {
  describe,
  expect,
  it,
} from 'vitest'

import { CalendarTime } from '@/primitives/time/calendarTime.primitive'

describe('calendarTime', () => {
  it('initializes with a given time', () => {
    const value = new CalendarTime(12, 0)

    expect(value.toString()).toEqual('12:00')
  })

  it('adds hours to a time', () => {
    const value = new CalendarTime(12, 0)

    value.add({ hours: 1 })

    expect(value.toString()).toEqual('13:00')
  })

  it('adds minutes to a time', () => {
    const value = new CalendarTime(12, 0)

    value.add({ minutes: 1 })

    expect(value.toString()).toEqual('12:01')
  })

  it('adds seconds to a time', () => {
    const value = new CalendarTime(12, 0, 0)

    value.add({ seconds: 1 })

    expect(value.toISOString()).toEqual('12:00:01')
  })

  it('adds milliseconds to a time', () => {
    const value = new CalendarTime(12, 0, 0, 0)

    value.add({ milliseconds: 1 })

    expect(value.toFullISOString()).toEqual('12:00:00.001')
  })

  it('subtracts hours from a time', () => {
    const value = new CalendarTime(12, 0)

    value.subtract({ hours: 1 })

    expect(value.toString()).toEqual('11:00')
  })

  it('subtracts minutes from a time', () => {
    const value = new CalendarTime(12, 0)

    value.subtract({ minutes: 1 })

    expect(value.toString()).toEqual('11:59')
  })

  it('subtracts seconds from a time', () => {
    const value = new CalendarTime(12, 0, 0)

    value.subtract({ seconds: 1 })

    expect(value.toISOString()).toEqual('11:59:59')
  })

  it('subtracts milliseconds from a time', () => {
    const value = new CalendarTime(12, 0, 0, 0)

    value.subtract({ milliseconds: 1 })

    expect(value.toFullISOString()).toEqual('11:59:59.999')
  })

  it('returns true when comparing two times with the default accuracy', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(12, 0)

    expect(value.isEqualTo(other)).toBe(true)
  })

  it('returns true when comparing two times with the hour accuracy', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(12, 1)

    expect(value.isEqualTo(other, 'hours')).toBe(true)
  })

  it('returns true when comparing two times with the minute accuracy', () => {
    const value = new CalendarTime(12, 0, 1)
    const other = new CalendarTime(12, 0, 2)

    expect(value.isEqualTo(other, 'minutes')).toBe(true)
  })

  it('returns true when comparing two times with the second accuracy', () => {
    const value = new CalendarTime(12, 0, 0, 1)
    const other = new CalendarTime(12, 0, 0, 2)

    expect(value.isEqualTo(other, 'seconds')).toBe(true)
  })

  it('returns true when comparing two times with the millisecond accuracy', () => {
    const value = new CalendarTime(12, 0, 0, 1)
    const other = new CalendarTime(12, 0, 0, 1)

    expect(value.isEqualTo(other, 'milliseconds')).toBe(true)
  })

  it('returns false when comparing two different times with the default accuracy', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(12, 1)

    expect(value.isEqualTo(other)).toBe(false)
  })

  it('returns false when comparing two different times with the hour accuracy', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(13, 0)

    expect(value.isEqualTo(other, 'hours')).toBe(false)
  })

  it('returns false when comparing two different times with the minute accuracy', () => {
    const value = new CalendarTime(12, 0, 0)
    const other = new CalendarTime(12, 1, 0)

    expect(value.isEqualTo(other, 'minutes')).toBe(false)
  })

  it('returns false when comparing two different times with the second accuracy', () => {
    const value = new CalendarTime(12, 0, 0, 0)
    const other = new CalendarTime(12, 0, 1, 0)

    expect(value.isEqualTo(other, 'seconds')).toBe(false)
  })

  it('returns false when comparing two different times with the millisecond accuracy', () => {
    const value = new CalendarTime(12, 0, 0, 1)
    const other = new CalendarTime(12, 0, 0, 2)

    expect(value.isEqualTo(other, 'milliseconds')).toBe(false)
  })

  it('returns the hours of the time', () => {
    const value = new CalendarTime(12, 0)

    expect(value.hours).toBe(12)
  })

  it('returns the minutes of the time', () => {
    const value = new CalendarTime(12, 0)

    expect(value.minutes).toBe(0)
  })

  it('returns the seconds of the time', () => {
    const value = new CalendarTime(12, 0, 0)

    expect(value.seconds).toBe(0)
  })

  it('returns the milliseconds of the time', () => {
    const value = new CalendarTime(12, 0, 0, 0)

    expect(value.milliseconds).toBe(0)
  })

  it('sets the hours of the time', () => {
    const value = new CalendarTime(12, 0)

    value.set({ hours: 13 })

    expect(value.toString()).toEqual('13:00')
  })

  it('sets the minutes of the time', () => {
    const value = new CalendarTime(12, 0)

    value.set({ minutes: 1 })

    expect(value.toString()).toEqual('12:01')
  })

  it('sets the seconds of the time', () => {
    const value = new CalendarTime(12, 0, 0)

    value.set({ seconds: 1 })

    expect(value.toISOString()).toEqual('12:00:01')
  })

  it('sets the milliseconds of the time', () => {
    const value = new CalendarTime(12, 0, 0, 0)

    value.set({ milliseconds: 1 })

    expect(value.toFullISOString()).toEqual('12:00:00.001')
  })

  it('returns true when the given time is before another time', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(13, 0)

    expect(value.isBefore(other)).toBe(true)
  })

  it('returns false when the given time is not before another time', () => {
    const value = new CalendarTime(13, 0)
    const other = new CalendarTime(12, 0)

    expect(value.isBefore(other)).toBe(false)
  })

  it('returns true when the given time is after another time', () => {
    const value = new CalendarTime(13, 0)
    const other = new CalendarTime(12, 0)

    expect(value.isAfter(other)).toBe(true)
  })

  it('returns false when the given time is not after another time', () => {
    const value = new CalendarTime(12, 0)
    const other = new CalendarTime(13, 0)

    expect(value.isAfter(other)).toBe(false)
  })
})
