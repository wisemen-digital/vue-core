---
sidebar: auto
---


# AppToggle
<script setup>
import AppTogglePlayground from './AppTogglePlayground.vue'
</script>

<AppTogglePlayground />


## Props

| Prop       | Type      | Description                     | Default |
| ---------- | --------- | ------------------------------- | ------- |
| isDisabled | `boolean` | Whether the toggle is disabled. | `false` |


## Slots

| Slot name | Type                                        | Description           |
| --------- | ------------------------------------------- | --------------------- |
| default   | `isToggled: boolean`, `isDisabled: boolean` | Content to be toggled |


## v-model

| Model      | Type    | Description                   |
| ---------- | ------- | ----------------------------- |
| isToggled* | boolean | The value of the toggle state |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppIconButton, AppToggle } from '@wisemen/vue-core'

const model = ref<boolean>(true)
</script>
  
<template>
  <AppToggle v-model:is-toggled="model">
    <template #default="toggle">
      <AppIconButton label="toggle-view" :icon="toggle.isToggled ? 'eye' : 'eyeSlash'"/>
    </template>
  </AppToggle>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/toggle/AppToggle.vue).