# Result Types and Neverthrow

## Why Result Types?

Traditional error handling in JavaScript/TypeScript uses try-catch blocks and throwing exceptions. While familiar, this approach has several drawbacks:

### Problems with Traditional Error Handling

```typescript
// ❌ Traditional approach - errors are invisible in the type system
async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  if (!response.ok) {
    throw new Error('User not found') // Error is not reflected in return type
  }
  return response.json()
}

// The caller has no way to know this function can throw
const user = await getUser('123') // What errors can this throw? 🤷‍♂️
```

**Issues:**
1. **Hidden errors**: The type system doesn't show that errors can occur
2. **Forgotten error handling**: Easy to forget to catch errors
3. **Type safety**: Error types are not checked at compile time
4. **Composition**: Difficult to compose error-prone operations
5. **Debugging**: Stack traces can be lost when re-throwing errors

### The Result Type Solution

Result types make errors explicit in the type system using a union type that represents either success or failure:

```typescript
// ✅ Result type approach - errors are part of the type
import type { Result } from 'neverthrow'

type UserError =
  | { code: 'USER_NOT_FOUND'; message: string }
  | { code: 'NETWORK_ERROR'; message: string }

async function getUser(id: string): Promise<Result<User, UserError>> {
  const response = await fetch(`/api/users/${id}`)

  if (!response.ok) {
    return err({
      code: 'USER_NOT_FOUND',
      message: `User ${id} not found`
    })
  }

  const data = await response.json()
  return ok(data)
}

// The type system forces you to handle both success AND error cases
const result = await getUser('123')

if (result.isOk()) {
  console.log(result.value) // Type: User
} else {
  console.log(result.error) // Type: UserError
}
```

**Benefits:**
1. **Explicit errors**: The return type shows exactly what can go wrong
2. **Type safety**: The compiler ensures you handle errors
3. **Better composition**: Easy to chain operations with error handling
4. **No exceptions**: Errors are values, not exceptions
5. **Functional style**: Enables functional programming patterns

## Understanding Neverthrow

[Neverthrow](https://github.com/supermacro/neverthrow) is a TypeScript library that implements the Result type pattern. It provides a `Result<T, E>` type that represents either:
- **Ok(value)**: A successful result containing a value of type `T`
- **Err(error)**: A failed result containing an error of type `E`

### Core Concepts

```typescript
import { ok, err, Result } from 'neverthrow'

// Creating results
const success: Result<number, string> = ok(42)
const failure: Result<number, string> = err('Something went wrong')

// Checking result type
if (success.isOk()) {
  console.log(success.value) // 42
}

if (failure.isErr()) {
  console.log(failure.error) // 'Something went wrong'
}
```

## Using Result Types in Non-API Calls

Result types aren't just for API calls - they're useful for any operation that can fail. Here are common use cases:

### 1. File Operations

```typescript
import { ok, err, Result } from 'neverthrow'

type FileError =
  | { code: 'FILE_TOO_LARGE'; maxSize: number }
  | { code: 'INVALID_FILE_TYPE'; allowedTypes: string[] }
  | { code: 'FILE_READ_ERROR'; message: string }

function validateFileSize(
  file: File,
  maxSize: number
): Result<File, FileError> {
  if (file.size > maxSize) {
    return err({ code: 'FILE_TOO_LARGE', maxSize })
  }
  return ok(file)
}

function validateFileType(
  file: File,
  allowedTypes: string[]
): Result<File, FileError> {
  if (!allowedTypes.includes(file.type)) {
    return err({ code: 'INVALID_FILE_TYPE', allowedTypes })
  }
  return ok(file)
}

async function readFileAsDataUrl(file: File): Promise<Result<string, FileError>> {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(ok(reader.result as string))
    }

    reader.onerror = () => {
      resolve(err({
        code: 'FILE_READ_ERROR',
        message: 'Failed to read file'
      }))
    }

    reader.readAsDataURL(file)
  })
}

// Composing file operations
async function processImageUpload(file: File): Promise<Result<string, FileError>> {
  const maxSize = 5 * 1024 * 1024 // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']

  return validateFileSize(file, maxSize)
    .andThen(validFile => validateFileType(validFile, allowedTypes))
    .asyncAndThen(validFile => readFileAsDataUrl(validFile))
}

// Usage
const result = await processImageUpload(file)

result.match(
  (dataUrl) => {
    imagePreview.value = dataUrl
    showSuccessMessage('Image uploaded successfully')
  },
  (error) => {
    switch (error.code) {
      case 'FILE_TOO_LARGE':
        showError(`File is too large. Max size: ${error.maxSize / 1024 / 1024}MB`)
        break
      case 'INVALID_FILE_TYPE':
        showError(`Invalid file type. Allowed: ${error.allowedTypes.join(', ')}`)
        break
      case 'FILE_READ_ERROR':
        showError(error.message)
        break
    }
  }
)
```

### 2. Business Logic

```typescript
import { ok, err, Result } from 'neverthrow'

type BusinessError =
  | { code: 'INSUFFICIENT_BALANCE'; required: number; available: number }
  | { code: 'ACCOUNT_LOCKED'; reason: string }
  | { code: 'INVALID_AMOUNT'; amount: number }

interface Account {
  id: string
  balance: number
  isLocked: boolean
}

function checkAccountStatus(account: Account): Result<Account, BusinessError> {
  if (account.isLocked) {
    return err({
      code: 'ACCOUNT_LOCKED',
      reason: 'Account is temporarily locked'
    })
  }
  return ok(account)
}

function validateAmount(amount: number): Result<number, BusinessError> {
  if (amount <= 0) {
    return err({ code: 'INVALID_AMOUNT', amount })
  }
  return ok(amount)
}

function checkBalance(
  account: Account,
  amount: number
): Result<{ account: Account; amount: number }, BusinessError> {
  if (account.balance < amount) {
    return err({
      code: 'INSUFFICIENT_BALANCE',
      required: amount,
      available: account.balance
    })
  }
  return ok({ account, amount })
}

// Composing business logic
function processWithdrawal(
  account: Account,
  amount: number
): Result<Account, BusinessError> {
  return checkAccountStatus(account)
    .andThen(validAccount =>
      validateAmount(amount).map(() => validAccount)
    )
    .andThen(validAccount =>
      checkBalance(validAccount, amount)
    )
    .map(({ account, amount }) => ({
      ...account,
      balance: account.balance - amount,
    }))
}

// Usage
const result = processWithdrawal(userAccount, withdrawalAmount)

result.match(
  (updatedAccount) => {
    account.value = updatedAccount
    showSuccess('Withdrawal successful')
  },
  (error) => {
    switch (error.code) {
      case 'INSUFFICIENT_BALANCE':
        showError(
          `Insufficient balance. Required: $${error.required}, Available: $${error.available}`
        )
        break
      case 'ACCOUNT_LOCKED':
        showError(error.reason)
        break
      case 'INVALID_AMOUNT':
        showError('Invalid withdrawal amount')
        break
    }
  }
)
```

## Common Patterns

### 1. Chaining Operations with `andThen`

```typescript
function getUserById(id: string): Result<User, Error> { /* ... */ }
function getUserPosts(userId: string): Result<Post[], Error> { /* ... */ }

const result = getUserById('123')
  .andThen(user => getUserPosts(user.id))

// Type: Result<Post[], Error>
```

### 2. Transforming Success Values with `map`

```typescript
const result = getUserById('123')
  .map(user => user.email)

// Type: Result<string, Error>
```

### 3. Transforming Error Values with `mapErr`

```typescript
const result = getUserById('123')
  .mapErr(error => ({
    code: 'USER_FETCH_FAILED',
    originalError: error,
  }))
```

### 4. Pattern Matching with `match`

```typescript
const message = result.match(
  (user) => `Welcome, ${user.name}!`,
  (error) => `Error: ${error.message}`
)
```

### 5. Combining Multiple Results

```typescript
import { combine } from 'neverthrow'

const results = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
])

const combined = combine(results)
// Type: Result<[User, Post[], Comment[]], Error>

combined.match(
  ([user, posts, comments]) => {
    // All succeeded
  },
  (error) => {
    // At least one failed
  }
)
```

## Best Practices

1. **Define Clear Error Types**: Use discriminated unions for errors with specific error codes
2. **Use Result for Fallible Operations**: Any function that can fail should return a Result
3. **Compose with andThen**: Chain multiple operations that can fail
4. **Handle All Error Cases**: Use pattern matching to handle all possible error scenarios
5. **Keep Error Types Specific**: Each module should define its own error types
6. **Document Error Codes**: Document what each error code means and when it occurs
7. **Avoid Throwing**: Once you're using Result types, avoid throwing exceptions
8. **Test Both Paths**: Always test both success and error cases

## Further Reading

- [Neverthrow Documentation](https://github.com/supermacro/neverthrow)
- [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
- [Error Handling in TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
