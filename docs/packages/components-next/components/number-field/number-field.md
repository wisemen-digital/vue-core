# Number Field

An input field for entering numbers.

<ComponentPreview name="number-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcNumberFieldRoot,
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

## Examples

### Disabled

<ComponentPreview name="number-field/examples/disabled" />

### Min and max

<ComponentPreview name="number-field/examples/min-max" />

### Hide controls

<ComponentPreview name="number-field/examples/hide-controls" />

### Step

<ComponentPreview name="number-field/examples/step" />

### Format options

<ComponentPreview name="number-field/examples/format-options" />