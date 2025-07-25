# Keyboard Shortcut

A component that displays a keyboard shortcut.

<ComponentPreview name="keyboard-shortcut/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcKeyboardKey,
} from '@wisemen/vue-core-components'
</script>

<template>
  <template
    v-for="(keyboardKey, index) of keyboardKeys"
  >
    <VcKeyboardKey />
  </template>
</template>
```

<!-- @include: ./keyboard-shortcut-meta.md -->