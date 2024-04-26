---
sidebar: auto
---
<script setup>
import AppIconButtonPlayground from './AppIconButtonPlayground.vue'
</script>


# AppIconButton
<AppIconButtonPlayground />

## Props

| Prop                 | Type                                                                                                   | Description                                                     | Default     |
| -------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| variant              | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button                                       | `'default'` |
| icon **(required)**  | `Icon`                                                                                                 | The icon to display                                             |             |
| label **(required)** | `string`                                                                                               | The label for the button for accessibility. Will not be visible | -           |
| iconSize             | `'full'` \| `'xs'` \| `'sm'` \| `'default'` \| `'lg'` \| `'xl'` \| `'xxl'`                             | The size of the icon                                            | `'default'` |
| isDisabled           | `boolean`                                                                                              | Whether the button is disabled.                                 | `false`     |
| isLoading            | `boolean`                                                                                              | Whether the button is in a loading state.                       | `false`     |

## Slots

None

## Example Usage

```vue
<script setup lang="ts">
import { AppIconButton } from '@wisemen/vue-core'
</script>

<template>
  <AppIconButton
    icon="info"
    label="Info button"
  />
</template>
