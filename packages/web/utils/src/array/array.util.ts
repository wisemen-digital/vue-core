/**
 * Utility class for common array operations.
 */
export class ArrayUtil {
  /**
   * Checks whether an array is empty (has no elements).
   *
   * @example
   * ArrayUtil.isEmpty([])    // true
   * ArrayUtil.isEmpty([1])   // false
   */
  static isEmpty<T>(value: T[]): boolean {
    return value.length === 0
  }

  /**
   * Returns a new array containing only unique values (removes duplicates).
   * Uses strict equality (`===`) for comparison.
   *
   * @example
   * ArrayUtil.unique([1, 2, 2, 3]) // [1, 2, 3]
   */
  static unique<T>(value: T[]): T[] {
    return [...new Set(value)]
  }

  /**
   * Splits an array into chunks of the given size.
   * The final chunk may be smaller if the array does not divide evenly.
   *
   * @example
   * ArrayUtil.chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
   */
  static chunk<T>(value: T[], size: number): T[][] {
    if (size <= 0) {
      return []
    }

    const chunks: T[][] = []

    for (let i = 0; i < value.length; i += size) {
      chunks.push(value.slice(i, i + size))
    }

    return chunks
  }

  /**
   * Flattens a nested array by one level of depth.
   *
   * @example
   * ArrayUtil.flatten([[1, 2], [3, [4]]]) // [1, 2, 3, [4]]
   */
  static flatten<T>(value: T[][]): T[] {
    return value.flat()
  }

  /**
   * Groups array elements by the value of a given key.
   * Returns a `Map` where each key maps to an array of matching items.
   *
   * @example
   * const items = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }]
   * ArrayUtil.groupBy(items, 'type')
   * // Map { 'a' => [{ type: 'a', v: 1 }, { type: 'a', v: 3 }], 'b' => [{ type: 'b', v: 2 }] }
   */
  static groupBy<T, K extends keyof T>(value: T[], key: K): Map<T[K], T[]> {
    const map = new Map<T[K], T[]>()

    for (const item of value) {
      const groupKey = item[key]
      const group = map.get(groupKey) ?? []

      group.push(item)
      map.set(groupKey, group)
    }

    return map
  }

  /**
   * Returns a sorted copy of the array by a given key.
   *
   * @example
   * const users = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]
   * ArrayUtil.sortBy(users, 'name') // [Alice, Bob, Charlie]
   * ArrayUtil.sortBy(users, 'name', 'desc') // [Charlie, Bob, Alice]
   */
  static sortBy<T>(value: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
    return [...value].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]

      if (aVal < bVal) {
        return direction === 'asc' ? -1 : 1
      }

      if (aVal > bVal) {
        return direction === 'asc' ? 1 : -1
      }

      return 0
    })
  }

  /**
   * Returns the first element of an array, or `undefined` if empty.
   *
   * @example
   * ArrayUtil.first([1, 2, 3]) // 1
   * ArrayUtil.first([])        // undefined
   */
  static first<T>(value: T[]): T | undefined {
    return value[0]
  }

  /**
   * Returns the last element of an array, or `undefined` if empty.
   *
   * @example
   * ArrayUtil.last([1, 2, 3]) // 3
   * ArrayUtil.last([])        // undefined
   */
  static last<T>(value: T[]): T | undefined {
    return value.at(-1)
  }

  /**
   * Returns elements that appear in both arrays (set intersection).
   * Uses strict equality for comparison.
   *
   * @example
   * ArrayUtil.intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
   */
  static intersection<T>(a: T[], b: T[]): T[] {
    const setB = new Set(b)
    return a.filter(item => setB.has(item))
  }

  /**
   * Returns elements from `a` that do not appear in `b` (set difference).
   *
   * @example
   * ArrayUtil.difference([1, 2, 3], [2, 3, 4]) // [1]
   */
  static difference<T>(a: T[], b: T[]): T[] {
    const setB = new Set(b)
    return a.filter(item => !setB.has(item))
  }

  /**
   * Counts the occurrences of each element in an array.
   * Returns a `Map` mapping each unique value to its frequency.
   *
   * @example
   * ArrayUtil.countBy(['a', 'b', 'a', 'c', 'b', 'b'])
   * // Map { 'a' => 2, 'b' => 3, 'c' => 1 }
   */
  static countBy<T>(value: T[]): Map<T, number> {
    const counts = new Map<T, number>()

    for (const item of value) {
      counts.set(item, (counts.get(item) ?? 0) + 1)
    }

    return counts
  }
}
