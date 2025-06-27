# Switch

A control that allows the user to toggle between checked and not checked.

This component is built on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="switch/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcSwitchRoot,
  VcSwitchThumb,
  VcSwitchThumbIcon,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcSwitchRoot>
      <VcSwitchThumb>
        <VcSwitchThumbIcon />
      </VcSwitchThumb>
    </VcSwitchRoot>
  </VcFormField>
</template>
```

<!-- @include: ./switch-meta.md -->

## Examples

### Disabled

<ComponentPreview name="switch/examples/disabled" />

### Error

<ComponentPreview name="switch/examples/error" />

### Icon

<ComponentPreview name="switch/examples/icon" />