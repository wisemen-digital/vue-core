---
sidebar: auto
---

# AppButton

## Props

| Prop        | Type                          | Description                                      | Default          |
|-------------|-------------------------------|--------------------------------------------------|------------------|
| iconLeft    | `Icon` \| `null`              | The icon to display on the left side of the button. | `null`             |
| iconRight   | `Icon` \| `null`              | The icon to display on the right side of the button. | `null`            |
| isDisabled  | `boolean`                     | Whether the button is disabled.                   | `false`               |
| isLoading   | `boolean`                     | Whether the button is in a loading state.        | `false`               |
| size        | `'sm'` \| `'default'` \| `'lg'` | The size of the button.                          | `'default'`     |
| type        | `'button'` \| `'reset'` \| `'submit'` | The type of the button.                      | `'button'`      |
| variant     | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button. | `'default'` |



## Slots

| Slot                      | Description
| ------------------------- | ----------------------- | 
| `default`                 | The content of the button

## Example Usage

```vue
<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <AppButton>
    Button Text
  </AppButton>
</template>
