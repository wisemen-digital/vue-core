---
sidebar: auto
---

# FormLabel

<script setup>
import FormLabelPlayground from './FormLabelPlayground.vue'
</script>

<FormLabelPlayground />

## Props

| Prop       | Type                  | Description                                  | Default     |
|------------|-----------------------|----------------------------------------------|-------------|
| isDisabled | `boolean`             | Checks whether the label is disabled or not. | `false`     |
| isInvalid  | `boolean`             | Checks whether the label is invalid or not.  | `false`     |
| isRequired | `boolean`             | Checks whether the label is required or not. | `false`     |
| for*       | `string`              | The id of the form element.                  |             |
| label*     | `string`              | The label of the form.                       |             |
| tooltip    | `string \| undefined` | The tooltip of the label.                    | `undefined` |

## Code

::: code-group

```vue [Usage]

<script setup lang="ts" setup>
  import {FormLabel} from '@wisemen/vue-core'
  import {ref} from 'vue
</script>

<template>
  <FormLabel
      for="inputId"
      label="Name"
  />
</template>
```

:::

For full source code,
see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/form-label/FormLabel.vue).
