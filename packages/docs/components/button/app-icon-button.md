---
sidebar: auto
---

# AppIconButton

## Props

| Prop       | Type                          | Description                                      | Default    |
|------------|-------------------------------|--------------------------------------------------|------------|
| icon **(required)**       | `Icon`                          | The icon to display                              |           |
| label **(required)**      | `string`                        | The label for the button for accessibility. Will not be visible       | -          |
| iconSize   | `'default'` \| `'sm'` \| `'md'` \| `'lg'` | The size of the icon                             | `'default'`  |
| variant    | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button | `'default'`  |

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
