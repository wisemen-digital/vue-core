# Text Field

A component that allows users to input text.

This component is built on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="text-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcTextFieldRoot,
  VcTextFieldInput,
  VcTextFieldLoader,
  VcTextFieldIconLeft,
  VcTextFieldIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcTextFieldRoot>
      <VcTextFieldIconLeft />
      <VcTextFieldInput />
      <VcTextFieldLoader />
      <VcTextFieldIconRight />
    </VcTextFieldRoot>
  </VcFormField>
</template>
```

<!-- @include: ./text-field-meta.md -->

## Examples

### Disabled

<ComponentPreview name="text-field/examples/disabled" />

### Error

<ComponentPreview name="text-field/examples/error" />

### Loading

<ComponentPreview name="text-field/examples/loading" />

### Icons

<ComponentPreview name="text-field/examples/icons" />