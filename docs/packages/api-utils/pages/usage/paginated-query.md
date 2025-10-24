# Index Query with Infinite Scroll

This example demonstrates how to use `useOffsetInfiniteQuery` from `@wisemen/vue-core-api-utils` to fetch paginated data with infinite scrolling.

## Query Definition

```typescript
// src/modules/contact/api/queries/contactIndex.query.ts
import { useOffsetInfiniteQuery } from '@wisemen/vue-core-api-utils'

import { ContactService } from '@/modules/contact/api/services/contact.service'
import type { ContactIndexQueryParams } from '@/modules/contact/models/contact/index/contactIndexQueryParams.model'
import type { InfiniteQueryOptions } from '@/types/query.type'

export function useContactIndexQuery(options: InfiniteQueryOptions<ContactIndexQueryParams>) {
  return useOffsetInfiniteQuery({
    queryFn: (pagination) => ContactService.getAll({
      filters: options.params.filters.value,
      pagination,
      search: options.params.search.value,
      sort: options.params.sort.value,
    }),
    queryKey: {
      contactIndex: {
        queryParams: options.params,
      },
    },
  })
}
```

## Usage in Vue Component

```vue
<script setup lang="ts">
import type { ApiResult } from '@wisemen/vue-core-api-utils'
import { computed } from 'vue'

import { useContactIndexQuery } from '@/modules/contact/api/queries/contactIndex.query'
import type { ContactIndex } from '@/modules/contact/models/contact/index/contactIndex.model'

const filters = useFilters({ /* ... */ })
const sort = useSort({ /* ... */ })
const search = useSearch()

// Using the query
const {
  isLoading,
  fetchNextPage,
  result,
} = useContactIndexQuery({
  params: {
    filters: filters.values,
    search: search.debouncedSearch,
    sort: sort.values,
  },
})

// Transform result to ApiResult for error handling
const resultData = computed<ApiResult<ContactIndex[]>>(() => {
  return result.value.map((data) => data.data)
})
</script>

<template>
  <div>
    <!-- Only render when result is successful -->
    <ContactOverviewTable
      v-if="!resultData.isErr()"
      :data="resultData.value"
      :is-loading="isLoading"
      @next-page="fetchNextPage"
    />
  </div>
</template>
```

### Returned Properties

- **`result`**: A `Ref<ApiResult<...>>` containing the query data or error
- **`isLoading`**: A `Ref<boolean>` indicating if the initial query is loading
- **`fetchNextPage`**: A function to load the next page of data
- **`hasNextPage`**: A `Ref<boolean>` indicating if there are more pages to load
- **`isFetchingNextPage`**: A `Ref<boolean>` indicating if the next page is currently being fetched

## Working with Results

The query returns a `result` that is an `ApiResult` type from `neverthrow`. This allows you to handle success and error states elegantly:

```typescript
// Check if result is an error
if (resultData.value.isErr()) {
  // Handle error
  console.error(resultData.value.error)
} else {
  // Access data safely
  const data = resultData.value.value
}

// Or use pattern matching
resultData.value.match(
  (data) => {
    // Success case
    console.log('Data:', data)
  },
  (error) => {
    // Error case
    console.error('Error:', error)
  }
)
```
