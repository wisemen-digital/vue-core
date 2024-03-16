---
sidebar: auto
---

# AppRouterLinkButton

## Props

| Prop        | Type                                            | Description                                         | Default    |
|-------------|-------------------------------------------------|-----------------------------------------------------|------------|
| to **(required)**          | `RouteLocationNamedRaw`                         | The route to link to.                               |           |
| iconLeft    | `Icon` \| `null`                                | The icon to display on the left side of the button. | `null`          |
| iconRight   | `Icon` \| `null`                                | The icon to display on the right side of the button.| `null`          |
| size        | `'sm'` \| `'default'` \| `'lg'`                 | The size of the button.                             | `'default'`|
| variant     | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button. | `'default'` |

## Example Usage

```vue
<script setup lang="ts">
import { AppRouterLinkButton } from '@wisemen/vue-core'
</script>

<template>
  <AppRouterLinkButton 
    :to="{
      name: 'route-name'
    }"
  >
    Button Text
  </AppRouterLinkButton>
</template>
