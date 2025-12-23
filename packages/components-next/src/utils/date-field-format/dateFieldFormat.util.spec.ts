import {
  describe,
  expect,
  it,
} from 'vitest'

import type { DateFieldSegment } from '@/components/date-field/dateField.type.ts'

import { formatDateFieldSegments } from './dateFieldFormat.util.ts'

describe('formatDateFieldSegments', () => {
  const day: DateFieldSegment = {
    part: 'day',
    value: '03',
  }
  const month: DateFieldSegment = {
    part: 'month',
    value: '11',
  }
  const year: DateFieldSegment = {
    part: 'year',
    value: '2024',
  }
  const baseSegments: DateFieldSegment[] = [
    day,
    {
      part: 'literal',
      value: '/',
    },
    month,
    {
      part: 'literal',
      value: '/',
    },
    year,
  ]

  it('returns original segments when format is falsy', () => {
    const result = formatDateFieldSegments(baseSegments)

    expect(result).toBe(baseSegments)
  })

  it('reorders segments and injects literals based on format using dashes', () => {
    const result = formatDateFieldSegments(baseSegments, 'MM-DD-YYYY')

    expect(result).toHaveLength(5)
    expect(result[0]).toBe(month)
    expect(result[1]).toEqual({
      part: 'literal',
      value: '-',
    })
    expect(result[2]).toBe(day)
    expect(result[3]).toEqual({
      part: 'literal',
      value: '-',
    })
    expect(result[4]).toBe(year)
  })

  it('reorders segments and injects literals based on format using forward slashes', () => {
    const result = formatDateFieldSegments(baseSegments, 'MM/DD/YYYY')

    expect(result).toHaveLength(5)
    expect(result[0]).toBe(month)
    expect(result[1]).toEqual({
      part: 'literal',
      value: '/',
    })
    expect(result[2]).toBe(day)
    expect(result[3]).toEqual({
      part: 'literal',
      value: '/',
    })
    expect(result[4]).toBe(year)
  })

  it('accepts lowercase tokens and preserves literal runs', () => {
    const result = formatDateFieldSegments(baseSegments, 'dd . mm . yyyy')

    expect(result).toHaveLength(5)
    expect(result[0]).toBe(day)
    expect(result[1]).toEqual({
      part: 'literal',
      value: ' . ',
    })
    expect(result[2]).toBe(month)
    expect(result[3]).toEqual({
      part: 'literal',
      value: ' . ',
    })
    expect(result[4]).toBe(year)
  })

  it('returns original segments for invalid format with repeated tokens', () => {
    const result = formatDateFieldSegments(baseSegments, 'DD/MM/DD/YYYY')

    expect(result).toBe(baseSegments)
  })

  it('returns original segments for format containing non-date letters', () => {
    const result = formatDateFieldSegments(baseSegments, 'MM/DD/YYYY at')

    expect(result).toBe(baseSegments)
  })

  it('returns original segments when required parts are missing in format', () => {
    const result = formatDateFieldSegments(baseSegments, 'MM/DD')

    expect(result).toBe(baseSegments)
  })

  it('returns original segments when input lacks required parts', () => {
    const incompleteSegments: DateFieldSegment[] = [
      day,
      {
        part: 'literal',
        value: '/',
      },
      month,
    ]

    const result = formatDateFieldSegments(incompleteSegments, 'MM/DD/YYYY')

    expect(result).toBe(incompleteSegments)
  })
})
