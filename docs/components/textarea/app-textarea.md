---
sidebar: auto
---


# AppTextarea

<!-- @include: ./app-textarea-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTextarea } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppTextarea v-model="value" />
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/textarea/AppTextarea.vue).