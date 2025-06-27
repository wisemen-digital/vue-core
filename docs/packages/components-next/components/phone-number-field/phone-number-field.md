# Phone Number Field

A component that allows users to enter a phone number.

This component is built on top of the [Text Field](/packages/components-next/components/text-field/text-field.html) component.

<ComponentPreview name="phone-number-field/examples/main" />


## Anatomy

```vue
<script setup lang="ts">
import {
  VcTextField,
  VcSelect
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTextField>
    <template #left>
      <VcSelect/>
    </template>
  </VcTextField>
</template>
```

<!-- @include: ./phone-number-field-meta.md -->

## Examples

### Error

<ComponentPreview name="phone-number-field/examples/error" />