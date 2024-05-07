---
sidebar: auto
---


# FormTagsInput
<script setup>
import FormTagsInputPlayground from './FormTagsInputPlayground.vue'
</script>

<FormTagsInputPlayground />


## Props

| Prop        | Type                                            | Description                                       | Default     |
|-------------|-------------------------------------------------|---------------------------------------------------|-------------|
| label       | `null` \| `string`                              | The label of the input.                           |             |
| errors      | `FormFieldErrors`                               | The errors associated with the input.             |             |
| isDisabled  | `boolean`                                       | Whether the input is disabled.                    | `false`     |
| isRequired  | `boolean`                                       | Whether the input is required.                    | `false`     |
| isTouched   | `boolean`                                       | Whether the input is touched.                     |             |
| max         | `null` \| `number`                              | The maximum amount of tags allowed.               | `null`      |
| placeholder | `null` \| `string`                              | The placeholder of the input.                     | `null`      |


## Slots

| Slot name | Type            | Description                |
| --------- | --------------- | -------------------------- |
| `tag`     | `value: string` | Override the tag rendering |


## v-model

| Prop                    | Type        | Description               |
|------------------------ | ----------- | ------------------------- |
| v-model **(required)**  | `string[]`  | The value of the input.   |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| `blur`      | Emitted when the input loses focus.                  |
| `focus`     | Emitted when the input gains focus.                  |


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
</template>
```

```vue [Source code]
<script setup lang="ts">
import FormElement from '@/components/form-element/FormElement.vue'
import AppTagsInput from '@/components/tags-input/AppTagsInput.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(defineProps<{
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean
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
   * The label of the input.
   */
  label: string
  /**
   * The maximum amount of tags allowed.
   * @default null
   */
  max?: null | number
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
}>(), {
  isDisabled: false,
  isRequired: false,
  max: null,
  placeholder: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<string[]>({
  required: true,
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppTagsInput
      :id="id"
      v-model="model"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      :max="props.max"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #tag="{ value }">
        <slot
          :value="value"
          name="tag"
        />
      </template>
    </AppTagsInput>
  </FormElement>
</template>
```

:::