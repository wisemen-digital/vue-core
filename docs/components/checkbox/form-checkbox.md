---
sidebar: auto
---

# FormCheckbox

<!-- @include: ./form-checkbox-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <FormCheckbox v-model="value" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/checkbox/FormCheckbox.vue).