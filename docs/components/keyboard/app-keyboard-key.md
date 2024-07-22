---
sidebar: auto
---

# AppKeyboardKey

<!-- @include: ./app-keyboard-key-meta.md -->

## Types

::: code-group
```js [KeyboardKey]
export type KeyboardKey = ' ' | ',' | '.' | ';' | '<' | '>' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'alt' | 'arrowdown' | 'arrowleft' | 'arrowright' | 'arrowup' | 'b' | 'backspace' | 'c' | 'ctrl' | 'd' | 'delete' | 'e' | 'enter' | 'escape' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'meta' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 'shift' | 't' | 'tab' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
```
::: 

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppKeyboardKey } from '@wisemen/vue-core'
</script>

<template>
  <AppKeyboardKey 
    keyboard-key="shift"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/keyboard/AppKeyboardKey.vue).