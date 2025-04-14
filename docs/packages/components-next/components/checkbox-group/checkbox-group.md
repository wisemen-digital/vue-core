# Checkbox Group

A wrapper for multiple checkboxes.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="checkbox-group/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcCheckboxGroup } from '@wisemen/vue-core-components'

const value = ref<string[]>([])
</script>

<template>
  <VcCheckboxGroup
    v-model="value"
    label="Fruits"
  >
    <VcCheckbox
      value="apple"
      label="Apple"
    />
  </VcCheckboxGroup>
</template>
```

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

## Examples

### Disabled

<ComponentPreview name="checkbox-group/examples/disabled" />

### Error

<ComponentPreview name="checkbox-group/examples/error" />

### Customize
Customize the `root` of the CheckboxGroup or additional parts for singular <a href="/vue-core/packages/components-next/components/checkbox/checkbox.html#customize">Checkboxes</a>

<ComponentPreview name="checkbox-group/examples/customize" />`

<!-- @include: ./checkbox-group-meta.md -->