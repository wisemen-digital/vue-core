# Optimistic Updates

Type-safe optimistic updates for the api-utils package.

## Setup

You have two options:

1) **Recommended**: type-only `createApiUtils<MyQueryKeys>()` (no module augmentation, no runtime config)
2) **Alternative**: config-based `createApiUtils({ queryKeys })`
3) **Legacy**: module augmentation of `QueryKeys`

### Recommended: createApiUtils (type-only)

```typescript
import { createApiUtils } from '@wisemen/vue-core-api-utils'

type UserUuid = string
interface User {
  id: string
  uuid: string
  name: string
  email: string
}

interface Product {
  id: string
  sku: string
  price: number
  category: string
}

interface MyQueryKeys {
  userDetail: {
    entity: User
    params: { userUuid: UserUuid }
  }
  productList: {
    entity: Product[]
    params: { category: string }
  }
}

export const {
  useOptimisticUpdates,
} = createApiUtils<MyQueryKeys>()
```

### Alternative: createApiUtils + defineQueryKeys

If you prefer config-based inference (e.g. to reuse the same config for other helpers later),
you can still do this:

```typescript
import { createApiUtils, defineQueryKeys } from '@wisemen/vue-core-api-utils'

export const queryKeys = defineQueryKeys({
  userDetail: {
    entity: {} as User,
    params: { userUuid: '' as UserUuid },
  },
})

export const {
  useOptimisticUpdates,
} = createApiUtils({ queryKeys })
```

### Legacy: module augmentation

First, extend your `QueryKeys` interface to include entity types:

```typescript
import type { ComputedRef } from 'vue'

// In your project
declare module '@wisemen/vue-core-api-utils' {
  interface QueryKeys {
    // Old format (still supported)
    userList: {
      search: ComputedRef<string>
    }
    
    // New format with entity type
    userDetail: {
      params: { 
        userUuid: ComputedRef<UserUuid> 
      }
      entity: User
    }
    
    // For list queries
    productList: {
      params: { 
        category: ComputedRef<string> 
      }
      entity: Product[]
    }
  }
}
```

## Usage

### Create the OptimisticUpdates instance

#### With createApiUtils (recommended)

```typescript
import { useOptimisticUpdates } from './queryKeys' // from the snippet above

const optimisticUpdates = useOptimisticUpdates()
```

#### With createOptimisticUpdates (legacy)

```typescript
import { useQueryClient } from '@tanstack/vue-query'
import { createOptimisticUpdates } from '@wisemen/vue-core-api-utils'

const queryClient = useQueryClient()
const optimisticUpdates = createOptimisticUpdates(queryClient)
```

### Update a single entity

```typescript
// Update by ID (from value)
optimisticUpdates.update('userDetail', {
  value: { 
    id: '123',
    name: 'John Doe', 
    email: 'john@example.com' 
  }
})

// Update by custom field using key-value matching
optimisticUpdates.update('userDetail', {
  value: { name: 'John Doe' },
  by: { uuid: 'abc-123-def' }
})

// Update by multiple fields (all must match)
optimisticUpdates.update('userDetail', {
  value: { isActive: false },
  by: { 
    id: '123',
    uuid: 'abc-123'
  }
})

// Update using a predicate function
optimisticUpdates.update('userDetail', {
  value: { name: 'John Doe' },
  by: (user) => user.email === 'john@example.com'
})
```

### Update items in a list

```typescript
// Update by ID (from value)
optimisticUpdates.update('productList', {
  value: { 
    id: '456',
    price: 99.99, 
    inStock: true 
  }
})

// Update using a custom key
optimisticUpdates.update('productList', {
  value: { price: 99.99 },
  by: { sku: 'PROD-123' }
})

// Update using a predicate function
optimisticUpdates.update('productList', {
  value: { isActive: false },
  by: (product) => product.category === 'electronics'
})
```

### Invalidate queries

You can also invalidate queries to trigger a refetch:

```typescript
// Invalidate all queries with this key
await optimisticUpdates.invalidate('userDetail')

// Invalidate a specific query matching params
await optimisticUpdates.invalidate(['userDetail', {
  userUuid: '123',
}] as const)
```

## Type Safety

The system is fully type-safe:

- ✅ Only keys with `entity` types can be used
- ✅ The `value` parameter must match the entity type
- ✅ The `by` parameter accepts:
  - A predicate function `(entity) => boolean`
  - A key-value object `{ key: value }` for matching
  - Undefined (defaults to matching by `id` from the value)
- ✅ When using key-value matching, keys must be valid properties of the entity
- ✅ Predicate functions receive the correct entity type

## Matching Behavior

### Default (no `by` parameter)
When `by` is omitted, the system looks for an `id` property in the `value` and matches entities with that ID.

```typescript
// Will match entities where entity.id === '123'
optimisticUpdates.update('userDetail', {
  value: { 
    id: '123',
    name: 'John Doe' 
  }
})
```

### Key-Value Matching
Provide an object with one or more key-value pairs. All pairs must match for an entity to be updated.

```typescript
// Will match entities where entity.uuid === 'abc-123'
optimisticUpdates.update('userDetail', {
  value: { name: 'John Doe' },
  by: { uuid: 'abc-123' }
})

// Will match entities where BOTH conditions are true
optimisticUpdates.update('userDetail', {
  value: { name: 'John Doe' },
  by: { 
    id: '123',
    email: 'john@example.com' 
  }
})
```

### Predicate Function
Provide a function that receives the entity and returns `true` if it should be updated.

```typescript
// Will match entities where the function returns true
optimisticUpdates.update('userList', {
  value: { isActive: false },
  by: (user) => user.role === 'admin' && user.createdAt < someDate
})
```

## Notes

### Regarding the naming

I chose `params` instead of `key` for the query parameters because:
- It's more descriptive of what it contains (the query parameters)
- It avoids confusion with the query key itself
- It clearly separates concerns: `params` for query parameters, `entity` for the data type

Alternative naming suggestions:
- `parameters` / `entity` (more verbose but very clear)
- `args` / `entity` (shorter)
- `queryParams` / `entity` (explicit)

If you prefer a different name, it's easy to change! The important part is the structure that separates the parameters from the entity type.

### Backwards Compatibility

The old format is still supported! You can mix both formats:

```typescript
interface QueryKeys {
  // Old format - still works
  someQuery: {
    param1: ComputedRef<string>
  }
  
  // New format - enables optimistic updates
  otherQuery: {
    params: {
      param1: ComputedRef<string>
    }
    entity: SomeEntity
  }
}
```

The query composable automatically handles both formats using the `ExtractParams` type helper.
