---
sidebar: auto
---

# FormCheckboxGroup
<script setup>
import FormCheckboxGroupPlayground from './FormCheckboxGroupPlayground.vue'
</script>

<FormCheckboxGroupPlayground />

## Props

| Prop        | Type                 | Description                                    | Default |
| ----------- | -------------------- | ---------------------------------------------- | ------- |
| label       | `null` \| `string`   | The label of the checkbox group.               |  `null` |
| options     | `DataItem<T>[]`      | The options of the checkbox group.             |         |
| errors      | `FormFieldErrors`    | The errors associated with the checkbox group. |         |
| isTouched   | `boolean`            | Whether the checkbox group has been touched.   |         |
| isDisabled  | `boolean`            | Whether the checkbox group is disabled.        | `false` |
| isRequired  | `boolean`            | Whether the checkbox group is required.        | `false` |

## v-model

| Prop     | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| v-model  | `T[]`  | The value of the checkbox group. |

## Example Usage

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormCheckboxGroup } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    value: z.string().array()
  })
})

const value = form.register('value')

const options = ref<DataItem<string>[]>([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
])
</script>

<template>
  <FormCheckboxGroup
    v-bind="value"
    :options="options"
    label="Options"
  />
</template>
```

```vue [Source code]
<script setup lang="ts" generic="T extends string">
import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import type { DataItem } from '@/types/dataItem.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(defineProps<{
  /**
   * Whether the checkbox group is disabled.
   */
  isDisabled?: boolean
  /**
   *  Whether the checkbox group is required.
   */
  isRequired?: boolean
  /**
   * Whether the checkbox group has been touched.
   */
  isTouched: boolean
  /**
   * The errors associated with the checkbox group.
   */
  errors: FormFieldErrors
  /**
   * The label of the checkbox group.
   * @default null
   */
  label?: null | string
  /**
   * The options of the checkbox group.
   */
  options: DataItem<T>[]
}>(), {
  isDisabled: false,
  isRequired: false,
  label: null,
})

const model = defineModel<T[]>({
  required: true,
})

function isOptionSelected(value: T) {
  return model.value.includes(value)
}

function toggleOption(value: T) {
  const isSelected = isOptionSelected(value)

  if (isSelected) {
    model.value = model.value.filter(v => v !== value)
  }
  else {
    model.value = [
      ...model.value,
      value,
    ]
  }
}
</script>

<template>
  <FormElement
    :errors="props.errors"
    :is-touched="props.isTouched"
    :label="props.label"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
  >
    <div class="flex flex-col gap-y-2">
      <div
        v-for="option of props.options"
        :key="option.label"
        class="flex items-center gap-x-2"
      >
        <FormCheckbox
          :id="option.value"
          :is-disabled="props.isDisabled"
          :model-value="isOptionSelected(option.value)"
          @update:model-value="toggleOption(option.value)"
        />

        <label :for="option.value">
          {{ option.label }}
        </label>
      </div>
    </div>
  </FormElement>
</template>
```

:::