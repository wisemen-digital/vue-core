---
sidebar: auto
---


# AppNumberInput

<!-- @include: ./app-number-input-meta.md -->

## Remarks 
> The `right` slot will only show if hideControls is set to `false`

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppNumberInput } from '@wisemen/vue-core'

const value = ref<number | null>(null)
</script>
  
<template>
  <AppNumberInput v-model="value" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/AppNumberInput.vue).