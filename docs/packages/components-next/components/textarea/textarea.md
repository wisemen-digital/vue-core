# Textarea

A component that allows the user to enter large amounts of text.

<ComponentPreview name="textarea/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcTextareaInput,
  VcTextareaRoot,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcTextareaRoot>
      <VcTextareaInput />
    </VcTextareaRoot>
  </VcFormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="textarea/examples/disabled" />

### Error

<ComponentPreview name="textarea/examples/error" />

### Resize

<ComponentPreview name="textarea/examples/resize" />

### Top and bottom content

<ComponentPreview name="textarea/examples/top-and-bottom-content" />

<!-- @include: ./textarea-meta.md -->