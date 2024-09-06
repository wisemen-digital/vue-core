---
sidebar: auto
---


# AppEditable

<!-- @include: ./app-editable-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppEditable } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<string>('Start value')
</script>
  
<template>
  <AppEditable
    v-model="model"
    placeholder="Type here..."
    :max-length="50"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/editable/AppEditable.vue).
