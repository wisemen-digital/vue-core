---
sidebar: auto
---


# FormGroup
<script setup>
import FormGroupPlayground from './FormGroupPlayground.vue'
</script>

<FormGroupPlayground />


## Slots

| Slot      | Type | Description                   |
| --------- | ---- | ----------------------------- |
| `default` | None | The elements inside the group |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppInput, AppText, FormGroup } from '@wisemen/vue-core'

const { form } = useForm({
  schema: z.object({
    firstName: z.string()
    lastName: z.string()
  })
})

const firstName = form.register('firstName')
const lastName = form.register('lastName')
</script>
  
<template>
  <FormGroup v-bind="values">
    <FormInput
      v-model="firstName"
      :errors="null"
      :is-touched="false"
      label="First name"
    />
    <FormInput
      v-model="lastName"
      :errors="null"
      :is-touched="false"
      label="Last name"
    />
  </FormGroup>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/form-group/FormGroup.vue).