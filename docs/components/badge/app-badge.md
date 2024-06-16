---
sidebar: auto
---


# AppBadge
<script setup>
import AppBadgePlayground from './AppBadgePlayground.vue'
</script>

<AppBadgePlayground />


## Slots

| Slot      | Type | Description               |
| --------- | ---- | ------------------------- |
| `default` | None | The content of the badge  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppBadge } from '@wisemen/vue-core'
</script>
  
<template>
  <AppBadge>
    Badge text  
  </AppBadge>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/badge/AppBadge.vue).