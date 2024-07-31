---
sidebar: auto
---


# AppTooltip

<!-- @include: ./app-tooltip-meta.md -->

## Remarks
> ⚠️ Either the `content` prop or `content` slot must be provided.

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTooltip } from '@wisemen/vue-core'
import { AppText } from '@wisemen/vue-core'
</script>
  
<template>
  <AppTooltip content="Tooltip content">
      <AppText variant="body">
        Trigger element     
      </AppText>
  </AppTooltip>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tooltip/AppTooltip.vue).