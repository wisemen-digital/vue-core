import { describe, expect, it } from 'vitest'

import { NumberUtil } from './number.util'

describe('NumberUtil', () => {
  describe('clamp', () => {
    it('clamps a value above the maximum', () => {
      expect(NumberUtil.clamp(15, 0, 10)).toBe(10)
    })

    it('clamps a value below the minimum', () => {
      expect(NumberUtil.clamp(-5, 0, 10)).toBe(0)
    })

    it('returns the value when within bounds', () => {
      expect(NumberUtil.clamp(5, 0, 10)).toBe(5)
    })
  })

  describe('round', () => {
    it('rounds to the given decimal places', () => {
      expect(NumberUtil.round(3.14159, 2)).toBe(3.14)
    })

    it('rounds to zero decimal places by default', () => {
      expect(NumberUtil.round(3.7)).toBe(4)
    })

    it('handles rounding up', () => {
      expect(NumberUtil.round(2.675, 2)).toBe(2.68)
    })
  })

  describe('formatCurrency', () => {
    it('formats a number as USD', () => {
      expect(NumberUtil.formatCurrency(1234.5, 'USD', 'en-US')).toBe('$1,234.50')
    })
  })

  describe('isInteger', () => {
    it('returns true for an integer', () => {
      expect(NumberUtil.isInteger(4)).toBe(true)
    })

    it('returns false for a float', () => {
      expect(NumberUtil.isInteger(4.5)).toBe(false)
    })
  })

  describe('isFloat', () => {
    it('returns true for a float', () => {
      expect(NumberUtil.isFloat(4.5)).toBe(true)
    })

    it('returns false for an integer', () => {
      expect(NumberUtil.isFloat(4)).toBe(false)
    })
  })

  describe('percentage', () => {
    it('calculates the percentage correctly', () => {
      expect(NumberUtil.percentage(25, 200)).toBe(12.5)
    })

    it('returns 0 when total is 0', () => {
      expect(NumberUtil.percentage(1, 0)).toBe(0)
    })
  })

  describe('randomBetween', () => {
    it('returns a number within the given range', () => {
      const result = NumberUtil.randomBetween(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
    })

    it('returns the only possible value when min equals max', () => {
      expect(NumberUtil.randomBetween(5, 5)).toBe(5)
    })
  })

  describe('sum', () => {
    it('sums an array of numbers', () => {
      expect(NumberUtil.sum([1, 2, 3, 4])).toBe(10)
    })

    it('returns 0 for an empty array', () => {
      expect(NumberUtil.sum([])).toBe(0)
    })
  })

  describe('average', () => {
    it('calculates the average of an array', () => {
      expect(NumberUtil.average([1, 2, 3, 4])).toBe(2.5)
    })

    it('returns 0 for an empty array', () => {
      expect(NumberUtil.average([])).toBe(0)
    })
  })

  describe('isValid', () => {
    it('returns true for a regular number', () => {
      expect(NumberUtil.isValid(42)).toBe(true)
    })

    it('returns false for NaN', () => {
      expect(NumberUtil.isValid(Number.NaN)).toBe(false)
    })

    it('returns false for Infinity', () => {
      expect(NumberUtil.isValid(Number.POSITIVE_INFINITY)).toBe(false)
    })
  })
})
