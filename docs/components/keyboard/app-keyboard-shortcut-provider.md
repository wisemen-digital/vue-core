---
sidebar: auto
---

# AppKeyboardShortcutProvider

<!-- @include: ./app-keyboard-shortcut-provider-meta.md -->

## Types

::: code-group
```js [KeyboardShortcutConfig]
export interface KeyboardShortcutConfig {
  isDisabled?: Ref<boolean>
  keys: KeyboardKey[]
  preventDefault?: boolean
  stopPropagation?: boolean
}
```
::: 

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppButton, AppKeyboardShortcut, AppKeyboardShortcutProvider, AppText } from '@wisemen/vue-core'

const exampleConfig: KeyboardShortcutConfig = {
  keys: [
    'e',
  ],
  preventDefault: false,
  stopPropagation: false,
}
</script>

<template>
  <AppKeyboardShortcutProvider
    :config="exampleConfig"
  >
    <AppButton @click="onClick">
      <div class="flex gap-2">
        <AppText variant="subtext">
          Alert
        </AppText>
        <AppKeyboardShortcut :keys="['e']" />
      </div>
    </AppButton>
  </AppKeyboardShortcutProvider>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/keyboard/AppKeyboardShortcutProvider.vue).