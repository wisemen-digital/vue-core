---
sidebar: auto
---

# AppTextField

<!-- @include: ./app-text-field-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTextField } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppTextField v-model="value" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/text-field/AppTextField.vue).
