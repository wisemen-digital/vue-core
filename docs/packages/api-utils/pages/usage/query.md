# Detail Query

This example demonstrates how to use `useQuery` and `usePrefetchQuery` from `@wisemen/vue-core-api-utils` to fetch a single resource.

## Query Definition

```typescript
// src/modules/contact/api/queries/contactDetail.query.ts
import type { UseQueryOptions } from '@wisemen/vue-core-api-utils'
import {
  usePrefetchQuery,
  useQuery,
} from '@wisemen/vue-core-api-utils'
import type { ComputedRef } from 'vue'
import { toValue } from 'vue'

import { ContactService } from '@/modules/contact/api/services/contact.service'
import type { ContactUuid } from '@/modules/contact/models/contact/contactUuid.model'
import type { ContactDetail } from '@/modules/contact/models/contact/detail/contactDetail.model'
import { TimeUtil } from '@/utils/time.util'

// Base query options - reusable configuration
export function contactDetailQuery(contactUuid: ComputedRef<ContactUuid>): UseQueryOptions<ContactDetail> {
  return {
    staleTime: TimeUtil.seconds(30),
    queryFn: () => ContactService.getByUuid(toValue(contactUuid)),
    queryKey: {
      contactDetail: {
        contactUuid,
      },
    },
  }
}

// Main query hook
export function useContactDetailQuery(contactUuid: ComputedRef<ContactUuid>) {
  return useQuery(contactDetailQuery(contactUuid))
}

// Prefetch hook for optimistic data loading
export function useContactDetailPrefetchQuery(contactUuid: ComputedRef<ContactUuid>) {
  return usePrefetchQuery(contactDetailQuery(contactUuid))
}
```

## Usage in Vue Component

### Basic Usage

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useContactDetailQuery } from '@/modules/contact/api/queries/contactDetail.query'
import type { ContactUuid } from '@/modules/contact/models/contact/contactUuid.model'

const props = defineProps<{
  contactUuid: ContactUuid
}>()

// Using the query
const contactDetailQuery = useContactDetailQuery(computed(() => props.contactUuid))
</script>

<template>
  <div>
    <!-- Query is passed to a data provider component -->
    <AppDataProviderView :queries="{ contact: contactDetailQuery }">
      <template #default="{ data }">
        <ContactDetailView :contact="data.contact" />
      </template>
    </AppDataProviderView>
  </div>
</template>
```

### Direct Usage with Result Handling

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useContactDetailQuery } from '@/modules/contact/api/queries/contactDetail.query'

const props = defineProps<{
  contactUuid: ContactUuid
}>()

const { result, isLoading, error } = useContactDetailQuery(computed(() => props.contactUuid))

// Access data using result
const contactData = computed(() => {
  return result.value.match(
    (data) => data,
    () => null
  )
})
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="result.isErr()">Error: {{ error }}</div>
    <div v-else-if="contactData">
      <h1>{{ contactData.firstName }} {{ contactData.lastName }}</h1>
      <p>{{ contactData.email }}</p>
    </div>
  </div>
</template>
```

## Prefetching Data

Prefetching is useful for loading data before it's needed, such as when hovering over a link:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useContactDetailPrefetchQuery } from '@/modules/contact/api/queries/contactDetail.query'
import type { ContactUuid } from '@/modules/contact/models/contact/contactUuid.model'

const props = defineProps<{
  contactUuid: ContactUuid
}>()

const prefetchQuery = useContactDetailPrefetchQuery(computed(() => props.contactUuid))

function onMouseEnter() {
  // Prefetch the contact data on hover
  prefetchQuery.prefetch()
}
</script>

<template>
  <RouterLink
    :to="{ name: 'contact-detail', params: { contactUuid } }"
    @mouseenter="onMouseEnter"
  >
    View Contact
  </RouterLink>
</template>
```

## Working with Results

The query returns a `result` that is an `ApiResult` type from `neverthrow`:

```typescript
// Check if result is an error
if (result.value.isErr()) {
  console.error('Error:', result.value.error)
} else {
  console.log('Data:', result.value.value)
}

// Pattern matching
result.value.match(
  (data) => {
    // Success case - data is properly typed as ContactDetail
    console.log('Contact:', data)
  },
  (error) => {
    // Error case - error is properly typed
    console.error('Error:', error)
  }
)
```

## Returned Properties

- **`result`**: A `Ref<ApiResult<ContactDetail>>` containing the query data or error
- **`isLoading`**: A `Ref<boolean>` indicating if the query is loading
- **`isFetching`**: A `Ref<boolean>` indicating if the query is fetching (including background refetch)
- **`error`**: A `Ref<Error | null>` containing any error that occurred
- **`refetch`**: A function to manually refetch the query
