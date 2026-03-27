import { describe, expect, it } from 'vitest'

import { ArrayUtil } from './array.util'

describe('ArrayUtil', () => {
  describe('isEmpty', () => {
    it('returns true for an empty array', () => {
      expect(ArrayUtil.isEmpty([])).toBe(true)
    })

    it('returns false for a non-empty array', () => {
      expect(ArrayUtil.isEmpty([1])).toBe(false)
    })
  })

  describe('unique', () => {
    it('removes duplicate values', () => {
      expect(ArrayUtil.unique([1, 2, 2, 3])).toEqual([1, 2, 3])
    })

    it('returns the same array when no duplicates', () => {
      expect(ArrayUtil.unique([1, 2, 3])).toEqual([1, 2, 3])
    })
  })

  describe('chunk', () => {
    it('splits an array into chunks', () => {
      expect(ArrayUtil.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    it('returns one chunk when size >= array length', () => {
      expect(ArrayUtil.chunk([1, 2], 5)).toEqual([[1, 2]])
    })

    it('returns empty array when size <= 0', () => {
      expect(ArrayUtil.chunk([1, 2, 3], 0)).toEqual([])
    })
  })

  describe('flatten', () => {
    it('flattens one level of nesting', () => {
      expect(ArrayUtil.flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
    })

    it('does not deeply flatten nested arrays', () => {
      expect(ArrayUtil.flatten([[1], [[2]]])).toEqual([1, [2]])
    })
  })

  describe('groupBy', () => {
    it('groups items by a given key', () => {
      const items = [
        { type: 'a', v: 1 },
        { type: 'b', v: 2 },
        { type: 'a', v: 3 },
      ]
      const result = ArrayUtil.groupBy(items, 'type')
      expect(result.get('a')).toEqual([{ type: 'a', v: 1 }, { type: 'a', v: 3 }])
      expect(result.get('b')).toEqual([{ type: 'b', v: 2 }])
    })
  })

  describe('sortBy', () => {
    const users = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]

    it('sorts in ascending order by default', () => {
      expect(ArrayUtil.sortBy(users, 'name').map(u => u.name)).toEqual(['Alice', 'Bob', 'Charlie'])
    })

    it('sorts in descending order when specified', () => {
      expect(ArrayUtil.sortBy(users, 'name', 'desc').map(u => u.name)).toEqual(['Charlie', 'Bob', 'Alice'])
    })
  })

  describe('first', () => {
    it('returns the first element', () => {
      expect(ArrayUtil.first([1, 2, 3])).toBe(1)
    })

    it('returns undefined for an empty array', () => {
      expect(ArrayUtil.first([])).toBeUndefined()
    })
  })

  describe('last', () => {
    it('returns the last element', () => {
      expect(ArrayUtil.last([1, 2, 3])).toBe(3)
    })

    it('returns undefined for an empty array', () => {
      expect(ArrayUtil.last([])).toBeUndefined()
    })
  })

  describe('intersection', () => {
    it('returns common elements', () => {
      expect(ArrayUtil.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
    })

    it('returns empty array when there is no overlap', () => {
      expect(ArrayUtil.intersection([1, 2], [3, 4])).toEqual([])
    })
  })

  describe('difference', () => {
    it('returns elements from a not in b', () => {
      expect(ArrayUtil.difference([1, 2, 3], [2, 3, 4])).toEqual([1])
    })

    it('returns all elements when b is empty', () => {
      expect(ArrayUtil.difference([1, 2, 3], [])).toEqual([1, 2, 3])
    })
  })

  describe('countBy', () => {
    it('counts occurrences of each element', () => {
      const result = ArrayUtil.countBy(['a', 'b', 'a', 'c', 'b', 'b'])
      expect(result.get('a')).toBe(2)
      expect(result.get('b')).toBe(3)
      expect(result.get('c')).toBe(1)
    })
  })
})
