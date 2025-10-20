# Date Field

An input component for entering or selecting a date.

This component is build on top of [Form Field](/packages/components/components/form-field/form-field.html) and uses the [Date Picker](/packages/components/components/date-picker/date-picker.html) component.

<ComponentPreview name="date-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcDateFieldRoot,
  VcDateFieldIconLeft,
  VcDateFieldInput,
  VcDateFieldLoader,
  VcDatefieldPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcDateFieldRoot>
      <VcDateFieldIconLeft />
      <VcDateFieldInput />
      <VcDateFieldLoader />
      <VcDateFieldPopover />
    </VcDateFieldRoot>
  </VcFormField>
</template>
```

<!-- @include: ./date-field-meta.md -->

## Examples

### Disabled

<ComponentPreview name="date-field/examples/disabled" />

### Error

<ComponentPreview name="date-field/examples/error" />

### Show two months

<ComponentPreview name="date-field/examples/show-two-months" />

### Hide date picker

<ComponentPreview name="date-field/examples/hide-date-picker" />
