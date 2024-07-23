import {
  describe,
  expect,
  it,
} from 'vitest'

import { CalendarDate } from '@/objects/calendarDate.object'

describe('calendarDate', () => {
  it('initializes with a given date', () => {
    const value = new CalendarDate(2024, 1, 1)

    expect(value.toString()).toEqual('2024-1-1')
  })

  it('adds days to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ days: 1 })

    expect(value.toString()).toEqual('2024-1-2')
  })

  it('adds months to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ months: 1 })

    expect(value.toString()).toEqual('2024-2-1')
  })

  it('adds weeks to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ weeks: 1 })

    expect(value.toString()).toEqual('2024-1-8')
  })

  it('adds years to a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.add({ years: 1 })

    expect(value.toString()).toEqual('2025-1-1')
  })

  it('subtracts days from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ days: 1 })

    expect(value.toString()).toEqual('2023-12-31')
  })

  it('subtracts months from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ months: 1 })

    expect(value.toString()).toEqual('2023-12-1')
  })

  it('subtracts weeks from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ weeks: 1 })

    expect(value.toString()).toEqual('2023-12-25')
  })

  it('subtracts years from a date', () => {
    const value = new CalendarDate(2024, 1, 1)

    value.subtract({ years: 1 })

    expect(value.toString()).toEqual('2023-1-1')
  })

  it('checks if a date is after another date', () => {
    const value = new CalendarDate(2024, 1, 1)
    const other = new CalendarDate(2023, 1, 1)

    expect(value.isAfter(other)).toEqual(true)
  })

  it('checks if a date is before another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2024, 1, 1)

    expect(value.isBefore(other)).toEqual(true)
  })

  it('checks if a date is equal to another date', () => {
    const value = new CalendarDate(2023, 1, 1)
    const other = new CalendarDate(2023, 1, 1)

    expect(value.isEqualTo(other)).toEqual(true)
  })

  it('gets the day of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.day).toEqual(1)
  })

  it('gets the month of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.month).toEqual(1)
  })

  it('gets the year of a date', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.year).toEqual(2023)
  })

  it('converts a date to a Date object', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.toDate()).toBeInstanceOf(Date)
  })

  it('converts a date to a string', () => {
    const value = new CalendarDate(2023, 1, 1)

    expect(value.toString()).toEqual('2023-1-1')
  })
})
