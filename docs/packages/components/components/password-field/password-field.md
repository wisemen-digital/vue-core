# Password Field

An input field for a password.
This component is built on top of [Text Field](/packages/components/components/text-field/text-field.html).

<ComponentPreview name="password-field/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcTextField,
  VcIconButton
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTextField>
    <template #right>
      <VcIconButton/>
    </template>
  </VcTextField>
</template>
```

<!-- @include: ./password-field-meta.md -->

## Examples

### Error

<ComponentPreview name="password-field/examples/error" />
