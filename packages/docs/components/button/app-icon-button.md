---
sidebar: auto
---
<script setup>
import AppIconButtonPlayground from './AppIconButtonPlayground.vue'
import AppIconButtonCode from '@components/components/button/AppIconButton.vue?raw'
</script>


# AppIconButton
<AppIconButtonPlayground />

## Props

| Prop                 | Type                                                                                                   | Description                                                     | Default     |
| -------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| variant              | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button                                       | `'default'` |
| icon*                | `Icon`                                                                                                 | The icon to display                                             |             |
| label*               | `string`                                                                                               | The label for the button for accessibility. Will not be visible |             |
| size                 | `'xs'` \|  `'sm'` \| `'default'` \| `'lg'`  \|  `'unset'`                                              | The size of the button.                                         | `'default'` |
| isDisabled           | `boolean`                                                                                              | Whether the button is disabled.                                 | `false`     |
| isLoading            | `boolean`                                                                                              | Whether the button is in a loading state.                       | `false`     |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppIconButton } from '@wisemen/vue-core'
</script>

<template>
  <AppIconButton
    icon="info"
    label="Info button"
  />
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/button/AppIconButton.vue).