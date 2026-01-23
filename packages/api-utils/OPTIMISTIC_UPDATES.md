# Optimistic Updates

Type-safe optimistic updates for the api-utils package.

## Setup

First, extend your QueryKeys interface to include entity types:

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

```typescript
import { useQueryClient } from '@tanstack/vue-query'
import { createOptimisticUpdates } from '@wisemen/vue-core-api-utils'

const queryClient = useQueryClient()
const optimisticUpdates = createOptimisticUpdates(queryClient)
```

### Update a single entity

```typescript
// Update by ID (default)
optimisticUpdates.update({
  key: 'userDetail',
  value: { name: 'John Doe', email: 'john@example.com' },
  match: '123' // user id
})

// Update by custom field
optimisticUpdates.update({
  key: 'userDetail',
  value: { name: 'John Doe' },
  by: 'uuid',
  match: 'abc-123-def'
})
```

### Update items in a list

```typescript
// Update by ID (default)
optimisticUpdates.update({
  key: 'productList',
  value: { price: 99.99, inStock: true },
  match: '456' // product id
})

// Update using a custom key
optimisticUpdates.update({
  key: 'productList',
  value: { price: 99.99 },
  by: 'sku',
  match: 'PROD-123'
})

// Update using a predicate function
optimisticUpdates.update({
  key: 'productList',
  value: { isActive: false },
  by: (product) => product.category === 'electronics'
})
```

### Invalidate queries

You can also invalidate queries to trigger a refetch:

```typescript
// Invalidate all queries with this key
await optimisticUpdates.invalidate('userDetail')

// Invalidate specific queries matching params
await optimisticUpdates.invalidate('userDetail', {
  userUuid: computed(() => '123')
})
```

## Type Safety

The system is fully type-safe:

- ✅ Only keys with `entity` types can be used
- ✅ The `value` parameter must match the entity type
- ✅ The `by` parameter must be a valid key of the entity
- ✅ The `match` parameter type is inferred from the `by` parameter
- ✅ Predicate functions receive the correct entity type

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
