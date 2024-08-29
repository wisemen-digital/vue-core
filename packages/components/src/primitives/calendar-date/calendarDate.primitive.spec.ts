import {
  describe,
  expect,
  it,
} from 'vitest'

import { CalendarDate } from '@/primitives/calendar-date/calendarDate.primitive'

const firstOfJanuary2024 = {
  day: 1,
  month: 1,
  year: 2024,
}

const firstOfJanuary2023 = {
  day: 1,
  month: 1,
  year: 2023,
}

describe('calendarDate', () => {
  it('initializes with a given date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    expect(value.toString()).toEqual('2024-01-01')
  })

  it('adds days to a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.add({ days: 1 })

    expect(value.toString()).toEqual('2024-01-02')
  })

  it('adds months to a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.add({ months: 1 })

    expect(value.toString()).toEqual('2024-02-01')
  })

  it('adds weeks to a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.add({ weeks: 1 })

    expect(value.toString()).toEqual('2024-01-08')
  })

  it('adds years to a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.add({ years: 1 })

    expect(value.toString()).toEqual('2025-01-01')
  })

  it('subtracts days from a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.subtract({ days: 1 })

    expect(value.toString()).toEqual('2023-12-31')
  })

  it('subtracts months from a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.subtract({ months: 1 })

    expect(value.toString()).toEqual('2023-12-01')
  })

  it('subtracts weeks from a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.subtract({ weeks: 1 })

    expect(value.toString()).toEqual('2023-12-25')
  })

  it('subtracts years from a date', () => {
    const value = new CalendarDate(firstOfJanuary2024)

    value.subtract({ years: 1 })

    expect(value.toString()).toEqual('2023-01-01')
  })

  it('checks if a date is after another date', () => {
    const first = new CalendarDate(firstOfJanuary2023)
    const second = new CalendarDate(firstOfJanuary2024)

    expect(second.isAfter(first)).toEqual(true)
    expect(first.isAfter(second)).toEqual(false)
  })

  it('checks if a date is after or equal to another date', () => {
    const first = new CalendarDate(firstOfJanuary2023)
    const second = new CalendarDate(firstOfJanuary2024)

    expect(second.isAfterOrEqualTo(first)).toEqual(true)
    expect(first.isBeforeOrEqualTo(second)).toEqual(true)
  })

  it('checks if a date is before another date', () => {
    const first = new CalendarDate(firstOfJanuary2023)
    const second = new CalendarDate(firstOfJanuary2024)

    expect(first.isBefore(second)).toEqual(true)
    expect(second.isBefore(first)).toEqual(false)
  })

  it('checks if a date is before or equal to another date', () => {
    const first = new CalendarDate(firstOfJanuary2023)
    const second = new CalendarDate(firstOfJanuary2024)

    expect(first.isBeforeOrEqualTo(second)).toEqual(true)
    expect(second.isBeforeOrEqualTo(first)).toEqual(false)
  })
})
