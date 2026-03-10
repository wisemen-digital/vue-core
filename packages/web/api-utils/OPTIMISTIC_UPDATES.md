# Optimistic Updates

Type-safe optimistic updates for the api-utils package.

## Setup

You have two options:

1) **Recommended**: type-only `createApiUtils<MyQueryKeys>()` (no module augmentation, no runtime config)
2) **Legacy**: module augmentation of `QueryKeys`

### Recommended: createApiUtils (type-only)

```typescript
import { QueryClient } from '@tanstack/vue-query'
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

const queryClient = new QueryClient()

export const {
  useOptimisticUpdates,
} = createApiUtils<MyQueryKeys>({
  queryClient,
})
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

Both `by` and `value` are functions that receive the current item:
- `by` returns a boolean indicating whether the item should be updated
- `value` returns the new item

```typescript
// Update by ID
optimisticUpdates.update('userDetail', {
  by: (user) => user.id === '123',
  value: (user) => ({ 
    ...user,
    name: 'John Doe', 
    email: 'john@example.com',
  }),
})

// Update by custom field
optimisticUpdates.update('userDetail', {
  by: (user) => user.uuid === 'abc-123-def',
  value: (user) => ({ ...user, name: 'John Doe' }),
})

// Update by multiple fields (all must match)
optimisticUpdates.update('userDetail', {
  by: (user) => user.id === '123' && user.uuid === 'abc-123',
  value: (user) => ({ ...user, isActive: false }),
})
```

### Update items in a list

```typescript
// Update a specific item by ID
optimisticUpdates.update('productList', {
  by: (product) => product.id === '456',
  value: (product) => ({ 
    ...product,
    price: 99.99, 
    inStock: true,
  }),
})

// Update a specific item by custom key
optimisticUpdates.update('productList', {
  by: (product) => product.sku === 'PROD-123',
  value: (product) => ({ ...product, price: 99.99 }),
})

// Update all items matching a condition
optimisticUpdates.update('productList', {
  by: (product) => product.category === 'electronics',
  value: (product) => ({ ...product, inStock: false }),
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
- ✅ `by` is a predicate function `(item) => boolean` — receives the correctly typed entity
- ✅ `value` is an updater function `(item) => item` — must return the full entity type
- ✅ For array entities, both functions receive the array item type

## Notes

### Regarding the naming

I chose `params` instead of `key` for the query parameters because:
- It's more descriptive of what it contains (the query parameters)
- It avoids confusion with the query key itself
- It clearly separates concerns: `params` for query parameters, `entity` for the data type

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
