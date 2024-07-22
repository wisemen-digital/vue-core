---
sidebar: auto
---

# AppInput

<!-- @include: ./app-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppInput } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppInput v-model="value" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/AppInput.vue).
