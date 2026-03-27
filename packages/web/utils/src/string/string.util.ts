/**
 * Utility class for common string manipulation operations.
 */
export class StringUtil {
  /**
   * Capitalizes the first character of a string and lowercases the rest.
   *
   * @example
   * StringUtil.capitalize('hELLO') // 'Hello'
   * StringUtil.capitalize('world') // 'World'
   */
  static capitalize(value: string): string {
    if (value.length === 0) {
      return value
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }

  /**
   * Truncates a string to the specified maximum length, appending '...' if truncated.
   *
   * @example
   * StringUtil.truncate('Hello, world!', 5) // 'Hello...'
   * StringUtil.truncate('Hi', 10) // 'Hi'
   */
  static truncate(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value
    }

    return `${value.slice(0, maxLength)}...`
  }

  /**
   * Converts a string to a URL-friendly slug.
   * Lowercases the string, strips special characters, and replaces spaces with hyphens.
   *
   * @example
   * StringUtil.slugify('Hello World!') // 'hello-world'
   * StringUtil.slugify('  Foo & Bar  ') // 'foo-bar'
   */
  static slugify(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  /**
   * Converts a camelCase or PascalCase string to kebab-case.
   *
   * @example
   * StringUtil.camelToKebab('myVariableName') // 'my-variable-name'
   * StringUtil.camelToKebab('MyComponent') // 'my-component'
   */
  static camelToKebab(value: string): string {
    return value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
  }

  /**
   * Converts a camelCase or PascalCase string to snake_case.
   *
   * @example
   * StringUtil.camelToSnake('myVariableName') // 'my_variable_name'
   * StringUtil.camelToSnake('MyComponent') // 'my_component'
   */
  static camelToSnake(value: string): string {
    return value
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .toLowerCase()
  }

  /**
   * Checks whether a string is empty, null, or contains only whitespace.
   *
   * @example
   * StringUtil.isEmpty('') // true
   * StringUtil.isEmpty('  ') // true
   * StringUtil.isEmpty('hello') // false
   */
  static isEmpty(value: string | null | undefined): boolean {
    return value == null || value.trim().length === 0
  }

  /**
   * Checks whether a string is a palindrome (reads the same forwards and backwards).
   * Ignores case and non-alphanumeric characters.
   *
   * @example
   * StringUtil.isPalindrome('racecar') // true
   * StringUtil.isPalindrome('A man a plan a canal Panama') // true
   * StringUtil.isPalindrome('hello') // false
   */
  static isPalindrome(value: string): boolean {
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, '')
    return normalized === normalized.split('').reverse().join('')
  }

  /**
   * Counts the number of words in a string.
   *
   * @example
   * StringUtil.countWords('Hello world') // 2
   * StringUtil.countWords('  foo   bar  baz  ') // 3
   */
  static countWords(value: string): number {
    return value.trim().split(/\s+/).filter(Boolean).length
  }

  /**
   * Strips all HTML tags from a string, returning plain text.
   *
   * @example
   * StringUtil.stripHtml('<p>Hello <b>world</b></p>') // 'Hello world'
   */
  static stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, '')
  }

  /**
   * Pads a string on the left to reach the given total length.
   *
   * @example
   * StringUtil.padStart('5', 3, '0') // '005'
   */
  static padStart(value: string, targetLength: number, padString = ' '): string {
    return value.padStart(targetLength, padString)
  }

  /**
   * Pads a string on the right to reach the given total length.
   *
   * @example
   * StringUtil.padEnd('hi', 5, '.') // 'hi...'
   */
  static padEnd(value: string, targetLength: number, padString = ' '): string {
    return value.padEnd(targetLength, padString)
  }
}
