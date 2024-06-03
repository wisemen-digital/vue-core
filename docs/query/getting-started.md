# Getting started

## Installation

```bash
pnpm i @wisemen/vue-core-query
```

## Query basic usage

```ts
import {
  useQuery,
  type UseQueryReturnType,
} from '@wisemen/vue-core-query'

function useSomeQuery(queryData: { page: number }): UseQueryReturnType<{ name: string }> {
  return useQuery({
    // Add debug mode
    isDebug: true,
    queryFn: async () => {
      await Promise.resolve()

      // Do query and use queryData

      return {
        name: 'woaw',
      }
    },
    // The key to cache the query
    queryKey: {
      key: {
        id: queryData.page,
      },
    },
  })
}

const someQuery = useSomeQuery({
  page: 1,
})

console.log(someQuery.data.value)
console.log(someQuery.isLoading.value)
console.log(someQuery.isSuccess.value)
console.log(someQuery.isError.value)
```

## Mutation basic usage

```ts
import {
  useMutation,
  type UseMutationReturnType,
} from '@wisemen/vue-core-query'

function usePostSomeData(): UseMutationReturnType<{ name: string }, { returnName: string }> {
  return useMutation({
    // Add debug mode
    isDebug: true,
    queryFn: async (_data) => {
      await Promise.resolve()

      return {
        returnName: _data.body.name,
      }
    },
    // The keys to invalidate after the mutation is successful
    queryKeysToInvalidate: [
      'key',
    ],
  })
}

const someMutation = usePostSomeData()

const response = await someMutation.execute({
  body: {
    name: 'John',
  },
})

console.log(someMutation.isLoading.value)
console.log(response)
```