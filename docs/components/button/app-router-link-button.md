---
sidebar: auto
---
<script setup>
import AppRouterLinkButtonPlayground from './AppRouterLinkButtonPlayground.vue'
</script>


# AppRouterLinkButton

<AppRouterLinkButtonPlayground />

## Props

| Prop              | Type                                                                                                   | Description                                          | Default     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------- |
| to*               | `RouteLocationNamedRaw`                                                                                | The route to link to.                                |             |
| variant           | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button.                           | `'default'` |
| size              | `'xs'` \|  `'sm'` \| `'default'` \| `'lg'`  \|  `'unset'`  \|  `'icon'`                                | The size of the button.                              | `'default'` |
| iconLeft          | `Icon` \| `null`                                                                                       | The icon to display on the left side of the button.  | `null`      |
| iconRight         | `Icon` \| `null`                                                                                       | The icon to display on the right side of the button. | `null`      |

## Slots

| Slot      | Type | Description               |
| --------- | ---- | ------------------------- |
| `default` | None | The content of the button |

## Code

::: code-group
```vue [Usage]
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
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/button/AppRouterLinkButton.vue).
