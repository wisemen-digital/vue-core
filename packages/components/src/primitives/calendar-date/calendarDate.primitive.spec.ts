import {
  describe,
  expect,
  it,
} from 'vitest'

import { CalendarDate } from '@/primitives/calendar-date/calendarDate.primitive'

describe('calendarDate', () => {
  it('initializes with a given date', () => {
    const value = new CalendarDate(2024, 1, 1)

    expect(value.toString()).toEqual('2024-01-01')
  })

  it('adds days to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ days: 1 })

    expect(value.toString()).toEqual('2024-01-02')
  })

  it('adds months to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ months: 1 })

    expect(value.toString()).toEqual('2024-02-01')
  })

  it('adds weeks to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ weeks: 1 })

    expect(value.toString()).toEqual('2024-01-08')
  })

  it('adds years to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ years: 1 })

    expect(value.toString()).toEqual('2025-01-01')
  })

  it('subtracts days from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ days: 1 })

    expect(value.toString()).toEqual('2023-12-31')
  })

  it('subtracts months from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ months: 1 })

    expect(value.toString()).toEqual('2023-12-01')
  })

  it('subtracts weeks from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ weeks: 1 })

    expect(value.toString()).toEqual('2023-12-25')
  })

  it('subtracts years from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ years: 1 })

    expect(value.toString()).toEqual('2023-01-01')
  })

  it('checks if a date is after another date', () => {
    const value = new CalendarDate(2024, 1, 1)
    const other = new CalendarDate(2023, 1, 1)

    expect(value.isAfter(other)).toEqual(true)
    expect(other.isAfter(value)).toEqual(false)
  })

  it('checks if a date is after or equal to another date', () => {
    const value = new CalendarDate(2024, 1, 1)
    const other = new CalendarDate(2023, 1, 1)

    expect(value.isAfterOrEqualTo(other)).toEqual(true)
    expect(other.isAfterOrEqualTo(value)).toEqual(false)
  })

  it('checks if a date is before another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2024, 1, 1)

    expect(value.isBefore(other)).toEqual(true)
    expect(other.isBefore(value)).toEqual(false)
  })

  it('checks if a date is before or equal to another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2024, 1, 1)

    expect(value.isBeforeOrEqualTo(other)).toEqual(true)
    expect(other.isBeforeOrEqualTo(value)).toEqual(false)
  })

  it('checks if a date is equal to another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2023, 1, 1)

    expect(value.isEqualTo(other)).toEqual(true)
  })

  it('checks if a date is not equal to another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2023, 1, 2)

    expect(value.isEqualTo(other)).toEqual(false)
  })

  it('gets the day of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.getDay()).toEqual(1)
  })

  it('gets the month of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.getMonth()).toEqual(1)
  })

  it('gets the year of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.getYear()).toEqual(2023)
  })

  it('converts a date to a Date object', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.toDate()).toBeInstanceOf(Date)
  })

  it('converts a date to a string', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.toString()).toEqual('2023-01-01')
  })

  it('parses a date from a string', () => {
    const value = CalendarDate.parse('2023-1-1')

    expect(value.toString()).toEqual('2023-01-01')
  })

  it('returns a new instance from a date object', () => {
    const value = CalendarDate.fromDate(new Date('2023-01-01'))

    expect(value.toString()).toEqual('2023-01-01')
  })
})
