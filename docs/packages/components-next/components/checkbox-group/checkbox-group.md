# Checkbox Group

A wrapper for multiple checkboxes.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="checkbox-group/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  FormField,
  CheckboxGroupRoot,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <CheckboxGroupRoot />
  </FormField>
</template>
```

<!-- @include: ./checkbox-group-meta.md -->

## Examples

### Hint

<ComponentPreview name="checkbox-group/examples/hint" />

### Disabled

<ComponentPreview name="checkbox-group/examples/disabled" />

### Error

<ComponentPreview name="checkbox-group/examples/error" />

