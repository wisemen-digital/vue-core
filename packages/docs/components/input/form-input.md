---
sidebar: auto
---

# FormInput
<script setup>
import FormInputPlayground from './FormInputPlayground.vue'
</script>

<FormInputPlayground />

## Props

| Prop        | Type                                                                                      | Description                                       | Default     |
|-------------|-------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| label **(required)**       | `string`                                                                                 | The label of the input.                           |            |
| errors **(required)**      | `FormFieldErrors`                                                                        | The errors associated with the input.             |            |
| isTouched **(required)**   | `boolean`                                                                                | Whether the input is touched.                     |      |
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`     |
| isRequired  | `boolean`                                                                                | Whether the input is required.                    | `false`     |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |


## Slots

| Slot name | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| `left`    | None | Replace the left icon with custom content |
| `right`   | None | Replace the right icon with custom content|


## v-model

| Prop     | Type                 | Description              |
|----------|----------------------|--------------------------|
| v-model **(required)**  | `string` \| `null`  | The value of the input. |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| `blur`        | Emitted when the input loses focus.                  |
| `focus`       | Emitted when the input gains focus.                  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    name: z.string()
  })
})

const name = form.register('name')
</script>

<template>
  <FormInput 
    v-bind="name" 
    label="Name"
  />
</template>
```

```vue [Source code]
<script setup lang="ts">
import { useSlots } from 'vue'

import FormElement from '@/components/form-element/FormElement.vue'
import AppInput from '@/components/input/AppInput.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(
  defineProps<{
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the input is loading.
     * @default false
     */
    isLoading?: boolean
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean
    /**
     * Whether the input is touched.
     */
    isTouched: boolean
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * The left icon of the input.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The right icon of the input.
     * @default null
     */
    iconRight?: Icon | null
    /**
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
    /**
     * The type of the input.
     * @default 'text'
     */
    type?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
  }>(),
  {
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    iconLeft: undefined,
    iconRight: undefined,
    placeholder: null,
    type: 'text',
  },
)

const model = defineModel<null | string>({
  required: true,
})

const slots = useSlots()

const { classAttr, otherAttrs } = useComponentAttrs()
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :class="classAttr"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppInput
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      :type="props.type"
      :is-loading="props.isLoading"
      :icon-left="props.iconLeft ?? undefined"
      :icon-right="props.iconRight ?? undefined"
    >
      <template
        v-if="slots.left !== undefined"
        #left
      >
        <Component
          :is="slots.left"
        />
      </template>

      <template
        v-if="slots.right !== undefined"
        #right
      >
        <Component
          :is="slots.right"
        />
      </template>
    </AppInput>
  </FormElement>
</template>

```

:::
