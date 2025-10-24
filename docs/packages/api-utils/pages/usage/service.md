# Services Layer

This document explains how to create service classes that integrate with the `@wisemen/vue-core-api-utils` package. Services act as an abstraction layer between your API client and your queries/mutations, handling data transformation and error handling.

## ApiUtil.fromPromise

The `ApiUtil.fromPromise` utility wraps API calls and converts them to `ApiResult`:

```typescript
// src/utils/api/api.util.ts
import type { ApiResult } from '@wisemen/vue-core-api-utils'
import { ResultAsync } from 'neverthrow'
import { ApiErrorUtil } from './apiError.util'

export class ApiUtil {
  static async fromPromise<T>(promise: PromiseLike<T>, message?: string): Promise<ApiResult<T>> {
    return await ResultAsync.fromPromise(promise, (error) => {
      return ApiErrorUtil.handleApiError({
        error,
        message,
      })
    })
  }
}
```

## Service Method Patterns

### Create Operation

Returns the UUID of the created resource:

```typescript
static async create(form: ContactCreateForm): Promise<ApiResult<ContactUuid>> {
  // Transform form data to API DTO
  const dto = ContactCreateTransformer.toDto(form)

  // Call API and wrap in ApiResult
  const result = await ApiUtil.fromPromise(createContactV1({
    body: dto,
  }))

  // Transform response and extract UUID
  return result.map((res) => res.data.uuid as ContactUuid)
}
```

**Usage in Mutation:**

```typescript
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

### Read Operation (Single Resource)

Returns the transformed detail model:

```typescript
static async getByUuid(contactUuid: ContactUuid): Promise<ApiResult<ContactDetail>> {
  // Call API with path parameters
  const result = await ApiUtil.fromPromise(viewContactDetailV1({
    path: {
      uuid: contactUuid,
    },
  }))

  // Transform DTO to domain model
  return result.map((response) => {
    return ContactDetailTransformer.fromDto(response.data)
  })
}
```

**Usage in Query:**

```typescript
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

### Read Operation (Paginated List)

Returns paginated data with metadata:

```typescript
static async getAll(
  params: OffsetPagination<ContactIndexQueryParams>,
): Promise<OffsetPaginationResult<ContactIndex>> {
  // Transform query parameters to API format
  const result = await ApiUtil.fromPromise(
    viewContactIndexV1({
      query: ContactIndexQueryParamsTransformer.toDto(params),
    }),
  )

  // Transform response items and include pagination metadata
  return result.map((response) => ({
    data: response.data.items.map(ContactIndexTransformer.fromDto),
    meta: response.data.meta,
  }))
}
```

**Usage in Infinite Query:**

```typescript
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

### Update Operation

Returns void on success:

```typescript
static async update(contactUuid: ContactUuid, form: ContactUpdateForm): Promise<ApiResult<void>> {
  // Transform form to DTO
  const dto = ContactUpdateTransformer.toDto(form)

  // Call API with path parameters and body
  const result = await ApiUtil.fromPromise(
    updateContactV1({
      body: dto,
      responseValidator: undefined, // Skip response validation if no body expected
      path: {
        uuid: contactUuid,
      },
    }),
  )

  // Return void result
  return result.map((res) => res.data)
}
```

**Usage in Mutation:**

```typescript
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

### Delete Operation

Returns void on success:

```typescript
static async delete(contactUuid: ContactUuid): Promise<ApiResult<void>> {
  const result = await ApiUtil.fromPromise(
    deleteContactV1({
      responseValidator: undefined, // Skip response validation for delete
      path: {
        uuid: contactUuid,
      },
    }),
  )

  return result.map((res) => res.data)
}
```

**Usage in Mutation:**

```typescript
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

## Complete Service Example

```typescript
export class ContactService {
  static async create(form: ContactCreateForm): Promise<ApiResult<ContactUuid>> {
    const dto = ContactCreateTransformer.toDto(form)
    const result = await ApiUtil.fromPromise(createContactV1({
      body: dto,
    }))

    return result.map((res) => res.data.uuid as ContactUuid)
  }

  static async delete(contactUuid: ContactUuid): Promise<ApiResult<void>> {
    const result = await ApiUtil.fromPromise(
      deleteContactV1({
        responseValidator: undefined,
        path: {
          uuid: contactUuid,
        },
      }),
    )

    return result.map((res) => res.data)
  }

  static async getAll(
    params: OffsetPagination<ContactIndexQueryParams>,
  ): Promise<OffsetPaginationResult<ContactIndex>> {
    const result = await ApiUtil.fromPromise(
      viewContactIndexV1({
        query: ContactIndexQueryParamsTransformer.toDto(params),
      }),
    )

    return result.map((response) => ({
      data: response.data.items.map(ContactIndexTransformer.fromDto),
      meta: response.data.meta,
    }))
  }

  static async getByUuid(contactUuid: ContactUuid): Promise<ApiResult<ContactDetail>> {
    const result = await ApiUtil.fromPromise(viewContactDetailV1({
      path: {
        uuid: contactUuid,
      },
    }))

    return result.map((response) => {
      return ContactDetailTransformer.fromDto(response.data)
    })
  }

  static async update(contactUuid: ContactUuid, form: ContactUpdateForm): Promise<ApiResult<void>> {
    const dto = ContactUpdateTransformer.toDto(form)
    const result = await ApiUtil.fromPromise(
      updateContactV1({
        body: dto,
        responseValidator: undefined,
        path: {
          uuid: contactUuid,
        },
      }),
    )

    return result.map((res) => res.data)
  }
}
```

## Data Transformation Flow

### Outgoing Data (Request)

1. **Form/Model** → Transformer.toDto() → **DTO** → API Client

```typescript
const dto = ContactCreateTransformer.toDto(form)
const result = await ApiUtil.fromPromise(createContactV1({ body: dto }))
```

### Incoming Data (Response)

1. API Client → **DTO** → Transformer.fromDto() → **Domain Model**

```typescript
return result.map((response) => {
  return ContactDetailTransformer.fromDto(response.data)
})
```

### Query Parameters

1. **Query Params Model** → Transformer.toDto() → **API Query Format**

```typescript
const result = await ApiUtil.fromPromise(
  viewContactIndexV1({
    query: ContactIndexQueryParamsTransformer.toDto(params),
  }),
)
```

## Type Safety

Services ensure type safety throughout the entire data flow:

```typescript
// Input is typed
static async create(form: ContactCreateForm): Promise<ApiResult<ContactUuid>> {
  //                        ^^^^^^^^^^^^^^^^                       ^^^^^^^^^^^
  //                        Form type                              Return type

  const dto = ContactCreateTransformer.toDto(form)
  //    ^^^
  //    DTO type inferred from transformer

  const result = await ApiUtil.fromPromise(createContactV1({ body: dto }))
  //    ^^^^^^
  //    ApiResult<APIResponse> inferred

  return result.map((res) => res.data.uuid as ContactUuid)
  //                                         ^^^^^^^^^^^^
  //                                         Explicit type cast
}
```

## Error Handling

All service methods return `ApiResult`, forcing consumers to handle errors:

```typescript
// In a mutation or query
const result = await ContactService.create(form)

// Must handle both success and error cases
result.match(
  (contactUuid) => {
    // Success case - contactUuid is typed as ContactUuid
    console.log('Created contact:', contactUuid)
  },
  (error) => {
    // Error case - error is typed as ApiError
    console.error('Failed to create contact:', error)
  }
)
```

## Integration with Queries and Mutations

Services are consumed by queries and mutations:

```typescript
// Query uses service
export function useContactDetailQuery(contactUuid: ComputedRef<ContactUuid>) {
  return useQuery({
    queryFn: () => ContactService.getByUuid(toValue(contactUuid)),
    queryKey: { contactDetail: { contactUuid } },
  })
}

// Mutation uses service
export function useContactCreateMutation() {
  return useMutation({
    queryFn: async (queryOptions: { body: ContactCreateForm }) => {
      return await ContactService.create(queryOptions.body)
    },
    queryKeysToInvalidate: { contactIndex: {} },
  })
}
```

## Related Documentation

- [Query Documentation](./query.md) - Single resource fetching with `useQuery`
- [Paginated Query Documentation](./paginated-query.md) - Paginated data with infinite scrolling
- [Mutations Documentation](./mutation.md) - Create, update, and delete operations
- [Main Usage Documentation](./overview.md) - Complete package overview
