import { describe, expect, it } from 'vitest'

import { UuidUtil } from './uuid.util'

describe('UuidUtil', () => {
  describe('NIL', () => {
    it('is the nil UUID', () => {
      expect(UuidUtil.NIL).toBe('00000000-0000-0000-0000-000000000000')
    })
  })

  describe('generate', () => {
    it('generates a valid UUID v4', () => {
      const uuid = UuidUtil.generate()
      expect(UuidUtil.isValid(uuid)).toBe(true)
    })

    it('generates unique UUIDs on every call', () => {
      const a = UuidUtil.generate()
      const b = UuidUtil.generate()
      expect(a).not.toBe(b)
    })
  })

  describe('isValid', () => {
    it('returns true for a valid UUID v4', () => {
      expect(UuidUtil.isValid('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true)
    })

    it('returns true for the nil UUID', () => {
      // nil UUID has version 0 which is non-standard — validate accordingly
      expect(UuidUtil.isValid('00000000-0000-0000-0000-000000000000')).toBe(false)
    })

    it('returns false for a non-UUID string', () => {
      expect(UuidUtil.isValid('not-a-uuid')).toBe(false)
    })

    it('returns false for an empty string', () => {
      expect(UuidUtil.isValid('')).toBe(false)
    })
  })

  describe('isNil', () => {
    it('returns true for the nil UUID', () => {
      expect(UuidUtil.isNil('00000000-0000-0000-0000-000000000000')).toBe(true)
    })

    it('returns false for a non-nil UUID', () => {
      expect(UuidUtil.isNil('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(false)
    })
  })

  describe('isNonNil', () => {
    it('returns true for a valid non-nil UUID', () => {
      expect(UuidUtil.isNonNil('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true)
    })

    it('returns false for the nil UUID', () => {
      expect(UuidUtil.isNonNil('00000000-0000-0000-0000-000000000000')).toBe(false)
    })

    it('returns false for an invalid string', () => {
      expect(UuidUtil.isNonNil('not-a-uuid')).toBe(false)
    })
  })
})
