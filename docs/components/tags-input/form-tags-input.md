---
sidebar: auto
---


# FormTagsInput

<!-- @include: ./form-tags-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormTagsInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    names: z.string().array()
  })
})

const names = form.register('names')
</script>
  
<template>
  <FormTagsInput
    v-bind="names"
    label="Names"
    placeholder="Placeholder"
    :max="5"
  />

      <!-- Or with a custom option slot -->
  <FormTagsInput 
    v-bind="names"
    label="Names"
    placeholder="Placeholder"
    :max="5"
  >
    <template #tag="{ value }">
      <!-- custom html -->
    </template>
  </FormTagsInput>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tags-input/FormTagsInput.vue).
