---
sidebar: auto
---

# FormCheckbox

## Props

| Prop            | Type           | Description                                     | Default   |
|-----------------|----------------|-------------------------------------------------|-----------|
| id              | `null` \| `string` | The id of the checkbox.                        | `null`    |
| label       | `string` \| `null`        | The label of the checkbox               | `null`   |
| isDisabled      | `boolean`        | Whether the checkbox is disabled.              | `false`   |
| isIndeterminate | `boolean`        | Whether the checkbox is in an indeterminate state. | `false`   |
| isInvalid       | `boolean`        | Whether the checkbox is invalid.               | `false`   |

## v-model

| Prop       | Type          | Description                               |
|------------|---------------|-------------------------------------------|
| v-model **(required)**    | `boolean`     | The value of the checkbox.                |

## Example Usage

```vue
<script setup lang="ts">
import { FormCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <FormCheckbox v-model="value" />
</template>
