# Overview

The `@wisemen/vue-core-api-utils` package provides a set of composables built on top of TanStack Query (Vue Query) that integrate seamlessly with Vue 3 and TypeScript. All queries and mutations return `ApiResult` types from `neverthrow` for structured error handling.

## Core Concepts

### ApiResult

All queries and mutations return an `ApiResult<T>` type from `neverthrow`, which is either:
- `Ok<T>`: Contains the successful result value
- `Err<E>`: Contains the error

This forces you to handle both success and error cases explicitly.

```typescript
// Check if result is an error
if (result.value.isErr()) {
  console.error(result.value.error)
} else {
  console.log(result.value.value)
}

// Or use pattern matching
result.value.match(
  (data) => {
    // Success case
  },
  (error) => {
    // Error case
  }
)
```

## Available Composables

### Queries

- **`useQuery`**: Fetch a single resource
- **`useOffsetInfiniteQuery`**: Fetch paginated data with infinite scrolling
- **`usePrefetchQuery`**: Prefetch data before it's needed

### Mutations

- **`useMutation`**: Create, update, or delete resources

## Quick Examples

### Detail Query

Fetch a single contact by UUID:

```typescript
import { useQuery } from '@wisemen/vue-core-api-utils'

export function useContactDetailQuery(contactUuid: ComputedRef<ContactUuid>) {
  return useQuery({
    queryFn: () => ContactService.getByUuid(toValue(contactUuid)),
    queryKey: {
      contactDetail: {
        contactUuid,
      },
    },
    staleTime: TimeUtil.seconds(30),
  })
}
```

Usage:

```vue
<script setup lang="ts">
const { result, isLoading } = useContactDetailQuery(computed(() => props.contactUuid))
</script>
```

### Index Query with Infinite Scroll

Fetch paginated contacts:

```typescript
import { useOffsetInfiniteQuery } from '@wisemen/vue-core-api-utils'

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

Usage:

```vue
<script setup lang="ts">
const {
  result,
  isLoading,
  fetchNextPage,
} = useContactIndexQuery({
  params: {
    filters: filters.values,
    search: search.debouncedSearch,
    sort: sort.values,
  },
})

const resultData = computed<ApiResult<ContactIndex[]>>(() => {
  return result.value.map((data) => data.data)
})
</script>

<template>
  <ContactOverviewTable
    v-if="!resultData.isErr()"
    :data="resultData.value"
    :is-loading="isLoading"
    @next-page="fetchNextPage"
  />
</template>
```

### Create Mutation

Create a new contact:

```typescript
import { useMutation } from '@wisemen/vue-core-api-utils'

export function useContactCreateMutation() {
  return useMutation({
    queryFn: async (queryOptions: { body: ContactCreateForm }) => {
      return await ContactService.create(queryOptions.body)
    },
    queryKeysToInvalidate: {
      contactIndex: {},
    },
  })
}
```

Usage:

```vue
<script setup lang="ts">
const contactCreateMutation = useContactCreateMutation()

const form = useForm({
  schema: contactCreateFormSchema,
  onSubmit: async (values) => {
    const result = await contactCreateMutation.execute({
      body: values,
    })

    result.match(
      (contactUuid) => {
        router.push({ name: 'contact-detail', params: { contactUuid } })
      },
      (error) => {
        errorToast.show(error)
      }
    )
  },
})
</script>
```

### Update Mutation

Update an existing contact:

```typescript
import { useMutation } from '@wisemen/vue-core-api-utils'

export function useContactUpdateMutation() {
  return useMutation({
    queryFn: async (queryOptions: {
      body: ContactUpdateForm
      params: { contactUuid: ContactUuid }
    }) => {
      return await ContactService.update(queryOptions.params.contactUuid, queryOptions.body)
    },
    queryKeysToInvalidate: {
      contactDetail: {
        contactUuid: (params) => params.contactUuid,
      },
      contactIndex: {},
    },
  })
}
```

Usage:

```vue
<script setup lang="ts">
const contactUpdateMutation = useContactUpdateMutation()

const form = useForm({
  initialState: ContactUpdateTransformer.toForm(props.contact),
  schema: contactUpdateFormSchema,
  onSubmit: async (values) => {
    const response = await contactUpdateMutation.execute({
      body: values,
      params: { contactUuid: props.contact.uuid },
    })

    if (response.isErr()) {
      errorToast.show(response.error)
      return
    }

    await router.push({ name: 'contact-detail', params: { contactUuid: props.contact.uuid } })
  },
})
</script>
```

### Delete Mutation

Delete a contact:

```typescript
import { useMutation } from '@wisemen/vue-core-api-utils'

export function useContactDeleteMutation() {
  return useMutation({
    queryFn: async (queryOptions: { params: { contactUuid: ContactUuid } }) => {
      return await ContactService.delete(queryOptions.params.contactUuid)
    },
    queryKeysToInvalidate: {
      contactIndex: {},
    },
  })
}
```

Usage:

```vue
<script setup lang="ts">
const contactDeleteMutation = useContactDeleteMutation()

async function onDeleteContact() {
  const response = await contactDeleteMutation.execute({
    params: { contactUuid: props.contact.uuid },
  })

  response.match(
    async () => {
      await router.push({ name: 'contact-overview' })
    },
    (error) => {
      apiErrorToast.show(error)
    }
  )
}
</script>
```

## Services

Services act as an abstraction layer between your API client and your queries/mutations. They handle:
- Calling API endpoints using the generated client
- Transforming data between DTOs and domain models
- Error handling by wrapping promises in `ApiResult`

### Service Example

```typescript
export class ContactService {
  static async getByUuid(contactUuid: ContactUuid): Promise<ApiResult<ContactDetail>> {
    // Call API and wrap in ApiResult
    const result = await ApiUtil.fromPromise(viewContactDetailV1({
      path: { uuid: contactUuid },
    }))

    // Transform DTO to domain model
    return result.map((response) => {
      return ContactDetailTransformer.fromDto(response.data)
    })
  }

  static async create(form: ContactCreateForm): Promise<ApiResult<ContactUuid>> {
    // Transform form to DTO
    const dto = ContactCreateTransformer.toDto(form)

    // Call API
    const result = await ApiUtil.fromPromise(createContactV1({
      body: dto,
    }))

    // Extract and return UUID
    return result.map((res) => res.data.uuid as ContactUuid)
  }
}
```

### ApiUtil.fromPromise

The `ApiUtil.fromPromise` utility wraps API calls and converts them to `ApiResult`:

```typescript
export class ApiUtil {
  static async fromPromise<T>(promise: PromiseLike<T>, message?: string): Promise<ApiResult<T>> {
    return await ResultAsync.fromPromise(promise, (error) => {
      return ApiErrorUtil.handleApiError({ error, message })
    })
  }
}
```

This ensures:
- All API calls return consistent `ApiResult` types
- Errors are properly transformed and typed
- Type safety is maintained throughout the chain

See the [Services Documentation](./service.md) for complete details on creating service classes.

## Detailed Documentation

For more detailed examples and explanations, see:

- [Services Documentation](./service.md) - How to create service classes that integrate with the API utils
- [Query Documentation](./query.md) - Single resource fetching with `useQuery`
- [Paginated Query Documentation](./paginated-query.md) - Paginated data with infinite scrolling
- [Mutations Documentation](./mutation.md) - Create, update, and delete operations
## Best Practices

### 1. Always Use `result` for Error Handling

Never destructure `data` and `error` separately. Always use the `result` property:

```typescript
// ❌ BAD: Don't do this
const { data, error } = useQuery(...)
if (error.value) { ... }

// ✅ GOOD: Use result
const { result } = useQuery(...)
if (result.value.isErr()) { ... }
```

### 2. Use Pattern Matching for Result Handling

The `match` method is the most elegant way to handle results:

```typescript
result.value.match(
  (data) => {
    // Success - data is fully typed
    console.log(data)
  },
  (error) => {
    // Error - error is fully typed
    console.error(error)
  }
)
```

Alternatively, you can use `isErr()` / `isOk()` for conditional checks:

```typescript
if (result.value.isErr()) {
  // Handle error - TypeScript knows this is an Err
  console.error(result.value.error)
  return
}

// TypeScript knows result.value is Ok here
console.log(result.value.value)
```

**Using `unwrapOr()` in Computed Properties**

For display logic in templates, you can use a computed property with the built-in `unwrapOr()` method from neverthrow to safely extract the value or return a default value on error:

```typescript
const contactData = computed(() => {
  // unwrapOr() is a neverthrow method that returns the value if Ok, or the default value if Err
  return result.value.unwrapOr(null)
})
```

```vue
<template>
  <div v-if="contactData">
    <h1>{{ contactData.firstName }} {{ contactData.lastName }}</h1>
  </div>
  <div v-else-if="result.isErr()">
    Error loading contact
  </div>
</template>
```

This pattern is useful when you want to:
- Display data only when available
- Keep template logic simple
- Avoid repetitive error checking in templates

### 3. Transform Results When Needed

For infinite queries, transform the result to a flat `ApiResult`:

```typescript
const resultData = computed<ApiResult<ContactIndex[]>>(() => {
  return result.value.map((data) => data.data)
})
```

### 4. Proper Cache Invalidation

Invalidate specific queries after mutations:

```typescript
// Invalidate all contact index queries
queryKeysToInvalidate: {
  contactIndex: {},
}

// Invalidate specific contact detail
queryKeysToInvalidate: {
  contactDetail: {
    contactUuid: (params) => params.contactUuid,
  },
}
```

## Common Patterns

### Data Provider Pattern

Use a data provider component to handle loading and error states:

```vue
<template>
  <AppDataProviderView :queries="{ contact: contactDetailQuery }">
    <template #default="{ data }">
      <ContactDetailView :contact="data.contact" />
    </template>
  </AppDataProviderView>
</template>
```

### Form with Mutation

Integrate mutations with form libraries like Formango:

```vue
<script setup lang="ts">
const mutation = useContactCreateMutation()

const form = useForm({
  schema: contactCreateFormSchema,
  onSubmit: async (values) => {
    const result = await mutation.execute({ body: values })

    result.match(
      (data) => {
        // Handle success
      },
      (error) => {
        // Handle error
      }
    )
  },
})
</script>
```

## Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/vue/overview)
- [neverthrow Documentation](https://github.com/supermacro/neverthrow)
