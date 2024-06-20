---
sidebar: auto
---


# AppButton
<script setup>
import AppButtonPlayground from './AppButtonPlayground.vue'
</script>

<AppButtonPlayground />

## Props

| Prop       | Type                                                                                                   | Description                                          | Default     |
| ---------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------- |
| variant    | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button.                           | `'default'` |
| size       | `'xs'` \|  `'sm'` \| `'default'` \| `'lg'`  \|  `'unset'`  \|  `'icon'`                                | The size of the button.                              | `'default'` |
| type       | `'button'` \| `'reset'` \| `'submit'`                                                                  | The type of the button.                              | `'button'`  |
| iconLeft   | `Icon` \| `null`                                                                                       | The icon to display on the left side of the button.  | `null`      |
| iconRight  | `Icon` \| `null`                                                                                       | The icon to display on the right side of the button. | `null`      |
| isDisabled | `boolean`                                                                                              | Whether the button is disabled.                      | `false`     |
| isLoading  | `boolean`                                                                                              | Whether the button is in a loading state.            | `false`     |



## Slots

| Slot      | Type | Description               |
| --------- | ---- | ------------------------- |
| `default` | None | The content of the button |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <AppButton>
    Button Text      
  </AppButton>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/button/AppButton.vue).
