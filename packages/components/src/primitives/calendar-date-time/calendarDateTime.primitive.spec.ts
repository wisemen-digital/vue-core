import {
  describe,
  expect,
  it,
} from 'vitest'

import {
  CalendarDateTime,
  type IsoString,
} from '@/primitives/calendar-date-time/calendarDateTime.primitive'

const firstOfJanuary2024 = {
  day: 1,
  hours: 0,
  milliseconds: 0,
  minutes: 0,
  month: 1,
  seconds: 0,
  year: 2024,
}

describe('calendarDateTime', () => {
  it('initializes with a given iso string', () => {
    const value = new CalendarDateTime('2024-01-01T11:00:00.000Z' as IsoString)

    expect(value.getYear()).toEqual(2024)
    expect(value.getMonth()).toEqual(1)
    expect(value.getDay()).toEqual(1)
    expect(value.getHours()).toEqual(12)
    expect(value.getMinutes()).toEqual(0)
    expect(value.getSeconds()).toEqual(0)
    expect(value.getMilliseconds()).toEqual(0)
  })

  it('initializes with individual values', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    expect(value.getYear()).toEqual(2024)
    expect(value.getMonth()).toEqual(1)
    expect(value.getDay()).toEqual(1)
    expect(value.getHours()).toEqual(0)
    expect(value.getMinutes()).toEqual(0)
    expect(value.getSeconds()).toEqual(0)
    expect(value.getMilliseconds()).toEqual(0)
  })

  it('adds days to a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.add({ days: 1 })

    expect(value.getDay()).toEqual(2)
  })

  it('adds months to a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.add({ months: 1 })

    expect(value.getMonth()).toEqual(2)
  })

  it('adds weeks to a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.add({ weeks: 1 })

    expect(value.getDay()).toEqual(8)
  })

  it('adds years to a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.add({ years: 1 })

    expect(value.getYear()).toEqual(2025)
  })

  it('subtracts days from a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.subtract({ days: 1 })

    expect(value.getDay()).toEqual(31)
  })

  it('subtracts months from a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.subtract({ months: 1 })

    expect(value.getMonth()).toEqual(12)
  })

  it('subtracts weeks from a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.subtract({ weeks: 1 })

    expect(value.getDay()).toEqual(25)
  })

  it('subtracts years from a date time', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)

    value.subtract({ years: 1 })

    expect(value.getYear()).toEqual(2023)
  })

  it('returns true when two date times are equal', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)
    const other = new CalendarDateTime(firstOfJanuary2024)

    expect(value.isEqualTo(other)).toEqual(true)
  })

  it('returns false when two date times are not equal', () => {
    const value = new CalendarDateTime(firstOfJanuary2024)
    const other = new CalendarDateTime({
      day: 1,
      hours: 12,
      milliseconds: 1,
      minutes: 0,
      month: 1,
      seconds: 0,
      year: 2024,
    })

    expect(value.isEqualTo(other)).toEqual(false)
  })
})
