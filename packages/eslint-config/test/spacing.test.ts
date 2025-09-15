// oxlint-disable no-unused-vars

import {
  assert,
  describe,
  it,
} from 'vitest'

function _test_1(): void {}

function _test_2(): number {
  const _test2 = 1
  const _test3 = 2

  return _test2
}

function _test_4(): void {}

describe('spacing plugin adds correct spacing', () => {
  it('adds correct spacing between function ]and vars', () => {
    const _test2 = 1
    const _test3 = 2

    assert(true)
  })

  it('adds correct spacing between vars and vars', () => {
    const _test = 1
    const _test2 = 2

    const _test3 = 3
    const _test4 = 4

    assert(true)
  })

  it('adds correct spacing between return and vars', () => {
    assert(true)
  })
})

declare const arr: number[]

delete arr[0]
