---
sidebar: auto
---


# AppPopover

<!-- @include: ./app-popover-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppPopover } from '@wisemen/vue-core'
import { AppText } from '@wisemen/vue-core'
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <AppPopover v-bind="values">
    <template #default>
      <AppButton>
        Trigger element
      </AppButton>
    </template>
    <template #content>
      <div class="w-56 p-2">
        <AppText
          variant="subtitle"
          class="pr-8 font-bold text-black"
        >
          A title
        </AppText>
        <AppText
          variant="body"
          class="text-black"
        >
          And some content
        </AppText>
      </div>
    </template>
  </AppPopover>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/popover/AppPopover.vue).