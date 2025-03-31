# Text Field

A text field is a component that allows users to input text.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="text-field/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core-components'

const value = ref<string>('')
</script>

<template>
  <VcTextField v-model="value" />
</template>
```

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

## Examples

### Disabled

<ComponentPreview name="text-field/examples/disabled" />

### Loading

<ComponentPreview name="text-field/examples/loading" />

### Icons

<ComponentPreview name="text-field/examples/icons" />

### Customize

`root`, `input`, `iconLeft`, `iconRight`, `loader`

<ComponentPreview name="text-field/examples/customize" />