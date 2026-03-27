import { describe, expect, it } from 'vitest'

import { StringUtil } from './string.util'

describe('StringUtil', () => {
  describe('capitalize', () => {
    it('capitalizes the first character and lowercases the rest', () => {
      expect(StringUtil.capitalize('hELLO')).toBe('Hello')
    })

    it('handles already-capitalized strings', () => {
      expect(StringUtil.capitalize('WORLD')).toBe('World')
    })

    it('handles lowercase strings', () => {
      expect(StringUtil.capitalize('foo')).toBe('Foo')
    })

    it('returns an empty string unchanged', () => {
      expect(StringUtil.capitalize('')).toBe('')
    })
  })

  describe('truncate', () => {
    it('truncates a string that exceeds maxLength', () => {
      expect(StringUtil.truncate('Hello, world!', 5)).toBe('Hello...')
    })

    it('returns the string unchanged when within maxLength', () => {
      expect(StringUtil.truncate('Hi', 10)).toBe('Hi')
    })

    it('returns the string unchanged when exactly at maxLength', () => {
      expect(StringUtil.truncate('Hello', 5)).toBe('Hello')
    })
  })

  describe('slugify', () => {
    it('converts a string to a slug', () => {
      expect(StringUtil.slugify('Hello World!')).toBe('hello-world')
    })

    it('strips leading and trailing spaces', () => {
      expect(StringUtil.slugify('  Foo & Bar  ')).toBe('foo-bar')
    })

    it('converts accented characters', () => {
      expect(StringUtil.slugify('café')).toBe('cafe')
    })

    it('collapses multiple spaces into a single hyphen', () => {
      expect(StringUtil.slugify('foo   bar')).toBe('foo-bar')
    })
  })

  describe('camelToKebab', () => {
    it('converts camelCase to kebab-case', () => {
      expect(StringUtil.camelToKebab('myVariableName')).toBe('my-variable-name')
    })

    it('converts PascalCase to kebab-case', () => {
      expect(StringUtil.camelToKebab('MyComponent')).toBe('my-component')
    })
  })

  describe('camelToSnake', () => {
    it('converts camelCase to snake_case', () => {
      expect(StringUtil.camelToSnake('myVariableName')).toBe('my_variable_name')
    })

    it('converts PascalCase to snake_case', () => {
      expect(StringUtil.camelToSnake('MyComponent')).toBe('my_component')
    })
  })

  describe('isEmpty', () => {
    it('returns true for an empty string', () => {
      expect(StringUtil.isEmpty('')).toBe(true)
    })

    it('returns true for a whitespace-only string', () => {
      expect(StringUtil.isEmpty('   ')).toBe(true)
    })

    it('returns true for null', () => {
      expect(StringUtil.isEmpty(null)).toBe(true)
    })

    it('returns true for undefined', () => {
      expect(StringUtil.isEmpty(undefined)).toBe(true)
    })

    it('returns false for a non-empty string', () => {
      expect(StringUtil.isEmpty('hello')).toBe(false)
    })
  })

  describe('isPalindrome', () => {
    it('detects a simple palindrome', () => {
      expect(StringUtil.isPalindrome('racecar')).toBe(true)
    })

    it('detects a palindrome ignoring case and spaces', () => {
      expect(StringUtil.isPalindrome('A man a plan a canal Panama')).toBe(true)
    })

    it('returns false for a non-palindrome', () => {
      expect(StringUtil.isPalindrome('hello')).toBe(false)
    })
  })

  describe('countWords', () => {
    it('counts words in a normal sentence', () => {
      expect(StringUtil.countWords('Hello world')).toBe(2)
    })

    it('handles multiple spaces between words', () => {
      expect(StringUtil.countWords('  foo   bar  baz  ')).toBe(3)
    })

    it('returns 0 for an empty string', () => {
      expect(StringUtil.countWords('')).toBe(0)
    })
  })

  describe('stripHtml', () => {
    it('removes HTML tags from a string', () => {
      expect(StringUtil.stripHtml('<p>Hello <b>world</b></p>')).toBe('Hello world')
    })

    it('returns a plain string unchanged', () => {
      expect(StringUtil.stripHtml('no tags here')).toBe('no tags here')
    })
  })

  describe('padStart', () => {
    it('pads a string on the left', () => {
      expect(StringUtil.padStart('5', 3, '0')).toBe('005')
    })

    it('does not pad when already at target length', () => {
      expect(StringUtil.padStart('hello', 5)).toBe('hello')
    })
  })

  describe('padEnd', () => {
    it('pads a string on the right', () => {
      expect(StringUtil.padEnd('hi', 5, '.')).toBe('hi...')
    })

    it('does not pad when already at target length', () => {
      expect(StringUtil.padEnd('hello', 5)).toBe('hello')
    })
  })
})
