# Form Field

A wrapper component for form elements.

<ComponentPreview name="form-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormFieldRoot,
  VcFormFieldLabel,
  VcFormFieldError,
  VcFormFieldHint,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormFieldRoot>
    <FormFieldLabel />
    <slot />
    <FormFieldError />
    <FormFieldHint />
  </FormFieldRoot>
</template>
```

<!-- @include: ./form-field-meta.md -->

## Examples

### Error

<ComponentPreview name="form-field/examples/error" />

### Hint

<ComponentPreview name="form-field/examples/hint" />

### Customize

<ComponentPreview name="form-field/examples/customize" />