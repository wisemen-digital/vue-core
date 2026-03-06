/**
 * Example usage of AsyncResult with useQuery via createApiUtils
 *
 * This file demonstrates how to use the AsyncResult pattern
 * for type-safe handling of loading, success, and error states.
 */

import { QueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import { computed } from 'vue'

import { initializeApiUtils } from '@/config/config'
import { createApiUtils } from '@/factory/createApiUtils'
import type { ApiResult } from '@/types/apiError.type'

interface User {
  id: string
  name: string
  email: string
}

interface MyQueryKeys {
  user: {
    entity: User
  }
}

const queryClient = new QueryClient()

initializeApiUtils(queryClient)

const apiUtils = createApiUtils<MyQueryKeys>()

// Simulated API call - in real usage this returns ApiResult<User>
async function fetchUser(id: string): Promise<ApiResult<User>> {
  const user = await Promise.resolve<User>({
    id,
    name: 'John Doe',
    email: 'john@example.com',
  })

  return ok(user)
}

/**
 * Example 1: Pattern matching - handles all 3 states exhaustively
 */
function examplePatternMatching(): void {
  const query = apiUtils.useQuery('user', {
    queryFn: () => {
      return fetchUser('123')
    },
  })

  // Pattern matching gives you exhaustive handling of all states
  const displayMessage = computed<string>(() =>
    query.result.value.match({
      err: () => 'Something went wrong',
      loading: () => 'Loading user...',
      ok: (user) => `Hello, ${user.name}!`,
    }))

  // eslint-disable-next-line no-console
  console.log(displayMessage.value)
}

/**
 * Example 2: Individual state checks
 */
function exampleStateChecks(): void {
  const query = apiUtils.useQuery('user', {
    queryFn: () => {
      return fetchUser('123')
    },
  })

  // Check loading state
  if (query.result.value.isLoading()) {
    // eslint-disable-next-line no-console
    console.log('Show spinner')

    // getValue() returns `never` here - calling it would throw at runtime
  }

  // Check success state - type narrowing: getValue() returns T, not T | null
  if (query.result.value.isOk()) {
    const user = query.result.value.getValue()

    // No optional chaining needed! Type is User, not User | null
    // eslint-disable-next-line no-console
    console.log('User name:', user.name)
  }

  // Check error state - type narrowing: getError() returns E, not E | null
  if (query.result.value.isErr()) {
    const apiError = query.result.value.getError()

    // No optional chaining needed!
    console.error('Error:', apiError)
  }
}

/**
 * Example 3: Using unwrapOr for default values
 */
function exampleUnwrapOr(): void {
  const query = apiUtils.useQuery('user', {
    queryFn: () => {
      return fetchUser('123')
    },
  })

  // Get user with fallback - never null
  const user = query.result.value.unwrapOr({
    id: 'guest',
    name: 'Guest',
    email: 'guest@example.com',
  })

  // eslint-disable-next-line no-console
  console.log('User name:', user.name) // Always defined
}

/**
 * Example 4: Transforming results with map
 */
function exampleMap(): void {
  const query = apiUtils.useQuery('user', {
    queryFn: () => {
      return fetchUser('123')
    },
  })

  // Transform the success value
  // Returns AsyncResult<string, ApiError>
  const upperName = query.result.value.map((u) => u.name.toUpperCase())

  // eslint-disable-next-line no-console
  console.log(
    upperName.match({
      err: () => 'Error',
      loading: () => 'Loading...',
      ok: (name) => name,
    }),
  )
}

/**
 * Example 5: Accessing the underlying neverthrow Result
 */
function exampleGetResult(): void {
  const query = apiUtils.useQuery('user', {
    queryFn: () => {
      return fetchUser('123')
    },
  })

  // Get the underlying neverthrow Result (null if loading)
  const result = query.result.value.getResult()

  // Trying to call getValue() without isOk() check returns `never`
  // const user = query.result.value.getValue() // ❌ Type is `never`

  if (result !== null) {
    // Now you have a standard neverthrow Result
    // Use all neverthrow methods: andThen, orElse, etc.
    const userName = result.map((u) => u.name)

    // eslint-disable-next-line no-console
    console.log('User name result:', userName)
  }
}

// Export examples for testing
export {
  exampleGetResult,
  exampleMap,
  examplePatternMatching,
  exampleStateChecks,
  exampleUnwrapOr,
}
