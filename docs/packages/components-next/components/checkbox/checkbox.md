# Checkbox

A control that allows the user to toggle between checked and not checked.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="checkbox/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  FormField,
  CheckboxRoot,
  CheckboxControl,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <CheckboxRoot>
      <CheckboxControl />
    </CheckboxRoot>
  </FormField>
</template>
```

<!-- @include: ./checkbox-meta.md -->

## Examples

### Indeterminate

<ComponentPreview name="checkbox/examples/indeterminate" />

### Disabled

<ComponentPreview name="checkbox/examples/disabled" />

### Error

<ComponentPreview name="checkbox/examples/error" />

### Customize

<ComponentPreview name="checkbox/examples/customize" />