# Form Field

A wrapper component for form elements.

<ComponentPreview name="form-field/examples/main" />

<!-- todo: @include: ./form-field-meta.md -->

## Usage
```vue
<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField for="some-id">
    <SomeInput id="some-id" />
  </VcFormField>
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormFieldRoot,
  VcFormFieldLabel,
  VcFormFieldError,
  VcFormFieldHint,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormFieldRoot>
    <FormFieldLabel />
    <slot />
    <FormFieldError />
    <FormFieldHint />
  </FormFieldRoot>
</template>
```

## Examples

### Label

<ComponentPreview name="form-field/examples/label" />

### Error

<ComponentPreview name="form-field/examples/error" />

### Hint

<ComponentPreview name="form-field/examples/hint" />

### Customize

`root`, `labelContainer`, `label`, `asterisk`, `error`, `hint`

<ComponentPreview name="form-field/examples/customize" />