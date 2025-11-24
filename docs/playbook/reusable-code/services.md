#### [Reusable Code](/playbook/reusable-code.md)

# Services

Services are responsible for fetching, validating and transforming data from the backend.

This transformation can include mapping the data to a different format, or filtering out data that is not needed.
The benefit of this is that the frontend does not need to know about the backend data structure,
and the backend does not need to know about the frontend data structure.

## Responsibility of a service

- Fetching data from the backend (axios)
- Validating data scheme (Zod)
- Transforming and mapping data (transformers)

## Example

This is an example of a well written service.

```typescript

interface ClientService {
  getAll: () => Promise<Client[]>
  getByUuid: (uuid: ClientUuid) => Promise<Client>
  create: (form: ClientCreateForm) => Promise<void>
  update: (uuid: ClientUuid, form: ClientUpdateForm) => Promise<void>
  delete: (uuid: ClientUuid) => Promise<void>
}

export const clientService: ClientService = {
  getAll: async (): Promise<Client[]> => {
    const response = await httpClient.get<ClientIndexDto>({
      url: '/clients', 
      responseSchema: z.array(clientIndexSchema),
    })
    return response.map(transformClientIndexDtoToClientIndex)
    }, 
  getByUuid: async (uuid: ClientUuid): Promise<Client> => {
    const response = await httpClient.get<ClientDto>({
      url: `/clients/${uuid}`,
      responseSchema: clientSchema,
    })
    return transformClientDtoToClient(response)
  },
  create: async (form: ClientCreateForm): Promise<void> => {
    await httpClient.post({
      url: '/forgot-password',
      body: transformClientCreateFormToClientCreateDto(form),
      responseSchema: z.unknown(),
    })
  },
  update: async (uuid: ClientUuid, form: ClientUpdateForm): Promise<void> => {
    await httpClient.post({
      url: `/clients/${uuid}`,
      body: transformClientUpdateFormToClientUpdateDto(form),
      responseSchema: z.unknown(),
    })
  },
  delete: async (uuid: ClientUuid): Promise<void> => {
    await httpClient.delete({
      url: `/clients/${uuid}`,
      responseSchema: z.unknown(),
    })
  },
}
```
