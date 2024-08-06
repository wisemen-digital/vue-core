import {
  describe,
  expect,
  it,
} from 'vitest'

import { CalendarDateTime } from '@/primitives/calendar-date-time/calendarDateTime.primitive'

describe('calendarDateTime', () => {
  it('initializes with a given date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    expect(value.toISOString()).toEqual('2024-01-01T11:00:00.000Z')
  })

  it('adds days to a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.add({ days: 1 })

    expect(value.toISOString()).toEqual('2024-01-02T11:00:00.000Z')
  })

  it('adds months to a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.add({ months: 1 })

    expect(value.toISOString()).toEqual('2024-02-01T11:00:00.000Z')
  })

  it('adds weeks to a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.add({ weeks: 1 })

    expect(value.toISOString()).toEqual('2024-01-08T11:00:00.000Z')
  })

  it('adds years to a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.add({ years: 1 })

    expect(value.toISOString()).toEqual('2025-01-01T11:00:00.000Z')
  })

  it('subtracts days from a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.subtract({ days: 1 })

    expect(value.toISOString()).toEqual('2023-12-31T11:00:00.000Z')
  })

  it('subtracts months from a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.subtract({ months: 1 })

    expect(value.toISOString()).toEqual('2023-12-01T11:00:00.000Z')
  })

  it('subtracts weeks from a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.subtract({ weeks: 1 })

    expect(value.toISOString()).toEqual('2023-12-25T11:00:00.000Z')
  })

  it('subtracts years from a date time', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    value.subtract({ years: 1 })

    expect(value.toISOString()).toEqual('2023-01-01T11:00:00.000Z')
  })

  it('returns true when two date times are equal', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)
    const other = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)

    expect(value.isEqualTo(other)).toEqual(true)
  })

  it('returns false when two date times are not equal', () => {
    const value = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 0)
    const other = new CalendarDateTime(2024, 1, 1, 12, 0, 0, 1)

    expect(value.isEqualTo(other)).toEqual(false)
  })
})
