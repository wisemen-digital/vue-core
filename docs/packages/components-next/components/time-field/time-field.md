# Time Field

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="time-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcTimeFieldRoot,
  VcTimeFieldIconLeft,
  VcTimeFieldInput,
  VcTimeFieldLoader,
  VcTimeFieldIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcTimeFieldRoot>
      <VcTimeFieldIconLeft />
      <VcTimeFieldInput />
      <VcTimeFieldIconRight />
      <VcTimeFieldLoader />
    </VcTimeFieldRoot>
  </VcFormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="time-field/examples/disabled" />

### Error

<ComponentPreview name="time-field/examples/error" />

<!-- @include: ./time-field-meta.md -->