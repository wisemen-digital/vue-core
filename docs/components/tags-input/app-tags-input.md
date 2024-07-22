---
sidebar: auto
---


# AppTagsInput

<!-- @include: ./app-tags-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTagsInput } from '@wisemen/vue-core'

const model = ref<string[]>([])
</script>
  
<template>
  <AppTagsInput
    v-model="model"
    id="id-app-tags-input"
    placeholder="Placeholder"
    :max="5"
    :is-disabled="false"
    :is-invalid="false"
  />

    <!-- Or with a custom option slot -->
  <AppTagsInput 
    v-model="model"
    id="id-app-tags-input"
    placeholder="Placeholder"
    :max="5"
    :is-disabled="false"
    :is-invalid="false"
  >
    <template #tag="{ value }">
      <!-- custom html -->
    </template>
  </AppTagsInput>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tags-input/AppTagsInput.vue).
