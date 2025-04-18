# Checkbox

A control that allows the user to toggle between checked and not checked.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="checkbox/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcCheckbox } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <VcCheckbox
    v-model="value"
    label="Receive updates and special offers"
  />
</template>
```

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

## Examples

### Indeterminate

<ComponentPreview name="checkbox/examples/indeterminate" />

### Disabled

<ComponentPreview name="checkbox/examples/disabled" />

### Error

<ComponentPreview name="checkbox/examples/error" />

### Customize

`root`, `control`, `indicator`

<ComponentPreview name="checkbox/examples/customize" />

<!-- @include: ./checkbox-meta.md -->