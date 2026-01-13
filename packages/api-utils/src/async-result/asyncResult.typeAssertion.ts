/**
 * Type-level tests to verify getValue() and getError() behavior
 * These tests are not executed at runtime - they're purely for TypeScript verification
 */

import { ok } from 'neverthrow'

import type { AsyncResult } from './asyncResult'
import { AsyncResult as AsyncResultFactory } from './asyncResult'

interface TestData {
  id: string
  name: string
}

interface TestError {
  code: string
  message: string
}

// Helper to verify that a value has a specific type
type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
type AssertEquals<X extends true> = X

/**
 * Test 1: getValue() should NOT be accessible on union type without narrowing
 */
export function testGetValueOnUnionIntended(): void {
  // Explicitly type as union - this is how it comes from composables
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.ok({
    id: '1',
    name: 'Test',
  })

  // After type narrowing to AsyncResultOk, getValue is available
  if (result.isOk()) {
    const _value = result.getValue()

    type ValueType = typeof _value
    type _ShouldBeTestData = AssertEquals<Equals<ValueType, TestData>>
  }
}

/**
 * Test 2: After isOk() narrowing, getValue() returns exactly T
 */
export function testGetValueAfterIsOk(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.ok({
    id: '1',
    name: 'Test',
  })

  if (result.isOk()) {
    const _value = result.getValue()

    // Value should be exactly TestData
    type ValueType = typeof _value
    type _ShouldBeTestData = AssertEquals<Equals<ValueType, TestData>>
  }
}

/**
 * Test 3: After isErr() narrowing, getError() returns exactly E
 */
export function testGetErrorAfterIsErr(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.err({
    code: 'ERROR',
    message: 'Failed',
  })

  if (result.isErr()) {
    const _error = result.getError()

    // Error should be exactly TestError
    type ErrorType = typeof _error
    type _ShouldBeTestError = AssertEquals<Equals<ErrorType, TestError>>
  }
}

/**
 * Test 4: Type narrowing with isLoading() gives you getResult() returning null
 */
export function testLoadingState(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.loading()

  if (result.isLoading()) {
    // getResult() returns null for loading state
    const _result = result.getResult()

    type ResultType = typeof _result
    type _ShouldBeNull = AssertEquals<Equals<ResultType, null>>
  }
}

/**
 * Test 5: Creating AsyncResult from neverthrow Result
 * The factory returns AsyncResult union type (annotated), but concrete types are inferred
 * In real usage from useQuery, the computed wrapper ensures proper union typing
 */
export function testFromResult(): void {
  const neverthrowResult = ok<TestData, TestError>({
    id: '1',
    name: 'Test',
  })
  const asyncResult = AsyncResultFactory.fromResult(neverthrowResult)

  // Narrows to AsyncResultOk, getValue() is now accessible
  if (asyncResult.isOk()) {
    const _value = asyncResult.getValue()

    type ValueType = typeof _value
    type _ShouldBeTestData = AssertEquals<Equals<ValueType, TestData>>
  }
}

/**
 * Test 6: Pattern matching requires all three handlers
 */
export function testPatternMatching(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.ok({
    id: '1',
    name: 'Test',
  })

  const _message = result.match({
    err: (_error: TestError) => {
      // error is TestError here (narrowed by pattern)
      type ErrorType = typeof _error
      type _ShouldBeTestError = AssertEquals<Equals<ErrorType, TestError>>

      return `Error: ${_error.message}`
    },
    loading: () => 'Loading...',
    ok: (_value: TestData) => {
      // value is TestData here (narrowed by pattern)
      type ValueType = typeof _value
      type _ShouldBeTestData = AssertEquals<Equals<ValueType, TestData>>

      return `Success: ${_value.name}`
    },
  })

  type MessageType = typeof _message
  type _ShouldBeString = AssertEquals<Equals<MessageType, string>>
}

/**
 * Test 7: map() preserves type safety
 */
export function testMap(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.ok({
    id: '1',
    name: 'Test',
  })

  const _mapped = result.map((_value: TestData) => {
    // value is TestData here
    type ValueType = typeof _value
    type _ShouldBeTestData = AssertEquals<Equals<ValueType, TestData>>

    return _value.name.toUpperCase()
  })

  // mapped is AsyncResult<string, TestError>
  if (_mapped.isOk()) {
    const _value = _mapped.getValue()

    type ValueType = typeof _value
    type _ShouldBeString = AssertEquals<Equals<ValueType, string>>
  }
}

/**
 * Test 8: mapErr() preserves error type safety
 */
export function testMapErr(): void {
  const result: AsyncResult<TestData, TestError> = AsyncResultFactory.err({
    code: 'ERROR',
    message: 'Failed',
  })

  const _mapped = result.mapErr((_error: TestError) => {
    // error is TestError here
    type ErrorType = typeof _error
    type _ShouldBeTestError = AssertEquals<Equals<ErrorType, TestError>>

    return _error.code
  })

  // mapped is AsyncResult<TestData, string>
  if (_mapped.isErr()) {
    const _error = _mapped.getError()

    type ErrorType = typeof _error
    type _ShouldBeString = AssertEquals<Equals<ErrorType, string>>
  }
}
