/**
 * Utility class for common numeric operations and formatting.
 */
export class NumberUtil {
  /**
   * Clamps a number between a minimum and maximum value.
   *
   * @example
   * NumberUtil.clamp(15, 0, 10) // 10
   * NumberUtil.clamp(-5, 0, 10) // 0
   * NumberUtil.clamp(5, 0, 10)  // 5
   */
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
  }

  /**
   * Rounds a number to a given number of decimal places.
   *
   * @example
   * NumberUtil.round(3.14159, 2) // 3.14
   * NumberUtil.round(1.005, 2)   // 1.01
   */
  static round(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  }

  /**
   * Formats a number as a currency string using `Intl.NumberFormat`.
   *
   * @example
   * NumberUtil.formatCurrency(1234.5, 'USD', 'en-US') // '$1,234.50'
   * NumberUtil.formatCurrency(9.99, 'EUR', 'nl-BE')   // '€ 9,99'
   */
  static formatCurrency(amount: number, currencyCode: string, locale: string): string {
    return new Intl.NumberFormat(locale, {
      currency: currencyCode,
      style: 'currency',
    }).format(amount)
  }

  /**
   * Checks whether a number is an integer (no fractional part).
   *
   * @example
   * NumberUtil.isInteger(4)   // true
   * NumberUtil.isInteger(4.5) // false
   */
  static isInteger(value: number): boolean {
    return Number.isInteger(value)
  }

  /**
   * Checks whether a number has a fractional part (i.e. is a float).
   *
   * @example
   * NumberUtil.isFloat(4.5) // true
   * NumberUtil.isFloat(4)   // false
   */
  static isFloat(value: number): boolean {
    return !Number.isInteger(value)
  }

  /**
   * Calculates what percentage `value` is of `total`.
   * Returns 0 when `total` is 0 to avoid division by zero.
   *
   * @example
   * NumberUtil.percentage(25, 200) // 12.5
   * NumberUtil.percentage(1, 0)    // 0
   */
  static percentage(value: number, total: number): number {
    if (total === 0) {
      return 0
    }

    return (value / total) * 100
  }

  /**
   * Returns a random integer between `min` (inclusive) and `max` (inclusive).
   *
   * @example
   * NumberUtil.randomBetween(1, 6) // e.g. 4
   */
  static randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  /**
   * Returns the sum of all numbers in an array.
   * Returns 0 for an empty array.
   *
   * @example
   * NumberUtil.sum([1, 2, 3, 4]) // 10
   */
  static sum(values: number[]): number {
    return values.reduce((acc, n) => acc + n, 0)
  }

  /**
   * Returns the arithmetic mean (average) of all numbers in an array.
   * Returns 0 for an empty array.
   *
   * @example
   * NumberUtil.average([1, 2, 3, 4]) // 2.5
   */
  static average(values: number[]): number {
    if (values.length === 0) {
      return 0
    }

    return NumberUtil.sum(values) / values.length
  }

  /**
   * Formats a number with grouped thousands separators using `Intl.NumberFormat`.
   *
   * @example
   * NumberUtil.format(1234567.89, 'en-US') // '1,234,567.89'
   * NumberUtil.format(1234567.89, 'nl-BE') // '1.234.567,89'
   */
  static format(value: number, locale: string): string {
    return new Intl.NumberFormat(locale).format(value)
  }

  /**
   * Checks whether a value is a finite, non-NaN number.
   *
   * @example
   * NumberUtil.isValid(42)       // true
   * NumberUtil.isValid(NaN)      // false
   * NumberUtil.isValid(Infinity) // false
   */
  static isValid(value: number): boolean {
    return Number.isFinite(value)
  }
}
