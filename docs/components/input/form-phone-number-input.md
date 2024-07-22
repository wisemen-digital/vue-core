---
sidebar: auto
---

# FormPhoneNumberInput

<!-- @include: ./form-phone-number-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormPhoneNumberInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    phoneNumber: z.string()
  })
})

const phoneNumber = form.register('phoneNumber')
</script>

<template>
  <FormPhoneNumberInput
    v-bind="phoneNumber"
    label="Phone number"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormPhoneNumberInput.vue).
