#### [Reusable Code](/playbook/reusable-code.md)

# Mutations

Mutations are used to manage data requests (create, update, delete) to the backend.

We use mutations from the Tanstack library with our own wrapper to clean up the api.

## Responsibility of a mutation

- Invoke the correct method from a service
- Handle loading state
- Invalidate query when the request is successful

## Examples

```typescript
// clientCreate.mutation.ts
export function useClientCreateMutation(): UseMutationReturnType<ClientCreateForm, void> {
  return useMutation<ClientCreateForm, void>({
    queryFn: async ({ body }: { body: ClientCreateForm }) => {
      await clientService.create(body)
    },
    queryKeysToInvalidate: [],
  })
}
```

```typescript
// configurationUpdate.mutation.ts
export interface ConfigurationUpdateMutationParams {
  projectId: string
  configuration: Configuration
  configurationId: string
}

export function useConfigurationUpdateMutation(): UseMutationReturnType<
  ConfigurationUpdateMutationParams,
  Configuration
> {
  return useMutation<ConfigurationUpdateMutationParams, Configuration>({
    queryFn: async ({ body }) => {
      return configurationService.update(body.projectId, body.projectId, body.configuration)
    },
    queryKeysToInvalidate: [Querykey.Configurations, (item): string[] => [Querykey.Configuration, item.response.uuid]],
  })
}
```
