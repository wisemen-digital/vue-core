---
sidebar: auto
---

# FormTimeInput

<!-- @include: ./form-time-input-meta.md -->

## Code

```vue [Usage]
<script setup lang="ts">
import { FormTimeInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    time: z.string()
  })
})

const model = form.register('time')
</script>

<template>
  <FormTimeInput
    v-bind="model"
    label="Time"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/time/FormTimeInput.vue).
