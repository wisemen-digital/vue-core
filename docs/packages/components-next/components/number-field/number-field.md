# Number Field

An input field for entering numbers.

<ComponentPreview name="number-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcNumberFieldRoot,
  VcNumberFieldDecrement,
  VcNumberFieldIncrement,
  VcNumberFieldInput,
  VcNumberFieldLoader,
  VcNumberFieldIconLeft,
  VcNumberFieldIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcNumberFieldRoot>
      <VcNumberFieldDecrement />
      <VcNumberFieldIconLeft />
      <VcNumberFieldInput />
      <VcNumberFieldIncrement />
      <VcNumberFieldIconRight />
      <VcNumberFieldLoader />
    </VcNumberFieldRoot>
  </VcFormField>
</template>
```

<!-- @include: ./number-field-meta.md -->

## Examples

### Disabled

<ComponentPreview name="number-field/examples/disabled" />

### Error

<ComponentPreview name="number-field/examples/error" />

### Min and max

<ComponentPreview name="number-field/examples/min-max" />

### Hide controls

<ComponentPreview name="number-field/examples/hide-controls" />

### Step

<ComponentPreview name="number-field/examples/step" />

### Format options

<ComponentPreview name="number-field/examples/format-options" />