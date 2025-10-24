# Mutations (Create, Update, Delete)

This example demonstrates how to use `useMutation` from `@wisemen/vue-core-api-utils` to handle data mutations like creating, updating, and deleting resources.

## Create Mutation

```typescript
// src/modules/contact/api/mutations/contactCreate.mutation.ts
import { useMutation } from '@wisemen/vue-core-api-utils'

import { ContactService } from '@/modules/contact/api/services/contact.service'
import type { ContactCreateForm } from '@/modules/contact/models/contact/create/contactCreateForm.model'

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

## Update Mutation

```typescript
// src/modules/contact/api/mutations/contactUpdate.mutation.ts
import { useMutation } from '@wisemen/vue-core-api-utils'

import { ContactService } from '@/modules/contact/api/services/contact.service'
import type { ContactUuid } from '@/modules/contact/models/contact/contactUuid.model'
import type { ContactUpdateForm } from '@/modules/contact/models/contact/update/contactUpdateForm.model'

interface Params {
  contactUuid: ContactUuid
}

export function useContactUpdateMutation() {
  return useMutation({
    queryFn: async (queryOptions: {
      body: ContactUpdateForm
      params: Params
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

## Delete Mutation

```typescript
// src/modules/contact/api/mutations/contactDelete.mutation.ts
import { useMutation } from '@wisemen/vue-core-api-utils'

import { ContactService } from '@/modules/contact/api/services/contact.service'
import type { ContactUuid } from '@/modules/contact/models/contact/contactUuid.model'

interface Params {
  contactUuid: ContactUuid
}

export function useContactDeleteMutation() {
  return useMutation({
    queryFn: async (queryOptions: { params: Params }) => {
      return await ContactService.delete(queryOptions.params.contactUuid)
    },
    queryKeysToInvalidate: {
      contactIndex: {},
    },
  })
}
```

## Usage in Vue Components

### Create Mutation in Form

```vue
<script setup lang="ts">
import { useForm } from 'formango'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useApiErrorToast } from '@/composables/api-error-toast/apiErrorToast.composable'
import { useContactCreateMutation } from '@/modules/contact/api/mutations/contactCreate.mutation'
import { contactCreateFormSchema } from '@/modules/contact/models/contact/create/contactCreateForm.model'

const router = useRouter()
const errorToast = useApiErrorToast()
const contactCreateMutation = useContactCreateMutation()

const form = useForm({
  schema: contactCreateFormSchema,
  onSubmit: async (values) => {
    // Execute the mutation
    const contactUuidResult = await contactCreateMutation.execute({
      body: values,
    })

    // Handle the result using pattern matching
    contactUuidResult.match(
      (contactUuid) => {
        // Success: navigate to the new contact
        router.push({
          name: 'contact-detail',
          params: { contactUuid },
        })
      },
      (error) => {
        // Error: show error toast
        errorToast.show(error)
      },
    )
  },
})
</script>

<template>
  <FormRoot :form="form">
    <VcTextField
      v-bind="toFormField(form.register('firstName'))"
      label="First Name"
    />
    <VcTextField
      v-bind="toFormField(form.register('lastName'))"
      label="Last Name"
    />
    <FormSubmitButton>Create Contact</FormSubmitButton>
  </FormRoot>
</template>
```

### Update Mutation in Form

```vue
<script setup lang="ts">
import { useForm } from 'formango'
import { useRouter } from 'vue-router'

import { useApiErrorToast } from '@/composables/api-error-toast/apiErrorToast.composable'
import { useContactUpdateMutation } from '@/modules/contact/api/mutations/contactUpdate.mutation'
import type { ContactDetail } from '@/modules/contact/models/contact/detail/contactDetail.model'
import { ContactUpdateTransformer } from '@/modules/contact/models/contact/update/contactUpdate.transformer'
import { contactUpdateFormSchema } from '@/modules/contact/models/contact/update/contactUpdateForm.model'

const props = defineProps<{
  contact: ContactDetail
}>()

const router = useRouter()
const errorToast = useApiErrorToast()
const contactUpdateMutation = useContactUpdateMutation()

const form = useForm({
  initialState: ContactUpdateTransformer.toForm(props.contact),
  schema: contactUpdateFormSchema,
  onSubmit: async (values) => {
    // Execute the mutation with both body and params
    const response = await contactUpdateMutation.execute({
      body: values,
      params: {
        contactUuid: props.contact.uuid,
      },
    })

    // Handle the result - alternative approach using isErr()
    if (response.isErr()) {
      errorToast.show(response.error)
      return
    }

    // Success: navigate back to detail view
    await router.push({
      name: 'contact-detail',
      params: { contactUuid: props.contact.uuid },
    })
  },
})
</script>

<template>
  <FormRoot :form="form">
    <VcTextField
      v-bind="toFormField(form.register('firstName'))"
      label="First Name"
    />
    <VcTextField
      v-bind="toFormField(form.register('lastName'))"
      label="Last Name"
    />
    <FormSubmitButton>Save Changes</FormSubmitButton>
  </FormRoot>
</template>
```

## Working with Mutation Results

Both approaches work with the `ApiResult` type from `neverthrow`:

### Using `match()

```typescript
const result = await mutation.execute({ body: data })

result.match(
  (successData) => {
    // Success case - type is inferred correctly
    console.log('Created:', successData)
  },
  (error) => {
    // Error case - error is properly typed
    console.error('Failed:', error)
  }
)
```

### Using `isErr()` / `isOk()`

```typescript
const result = await mutation.execute({ body: data })

if (result.isErr()) {
  console.error('Error:', result.error)
  return
}

// TypeScript knows result is Ok here
console.log('Success:', result.value)
```

## Mutation Properties

The mutation hook returns:

- **`execute`**: A function to execute the mutation with parameters
- **`isPending`**: A `Ref<boolean>` indicating if the mutation is in progress
- **`isSuccess`**: A `Ref<boolean>` indicating if the last mutation was successful
- **`isError`**: A `Ref<boolean>` indicating if the last mutation failed
- **`result`**: A `Ref<ApiResult<T> | null>` containing the last mutation result

## Cache Invalidation Patterns

### Simple Invalidation

Invalidates all queries with the matching key:

```typescript
queryKeysToInvalidate: {
  contactIndex: {},
}
```

### Targeted Invalidation

Invalidates specific queries based on parameters:

```typescript
queryKeysToInvalidate: {
  contactDetail: {
    contactUuid: (params) => params.contactUuid,
  },
}
```

### Multiple Keys

Invalidate multiple query caches at once:

```typescript
queryKeysToInvalidate: {
  contactDetail: {
    contactUuid: (params) => params.contactUuid,
  },
  contactIndex: {},
  userProfile: {},
}
```
