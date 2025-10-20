# Checkbox

A control that allows the user to toggle between checked and not checked.

This component is build on top of the [Form Field](/packages/components/components/form-field/form-field.html) component.

<ComponentPreview name="checkbox/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcCheckboxRoot,
  VcCheckboxControl,
  VcCheckboxIndicator,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcCheckboxRoot>
      <VcCheckboxControl>
        <VcCheckboxIndicator />
      </VcCheckboxControl>
    </VcCheckboxRoot>
  </VcFormField>
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
