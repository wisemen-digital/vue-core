# Switch

A control that allows the user to toggle between checked and not checked.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="switch/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  FormField,
  SwitchRoot,
  SwitchThumb,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <SwitchRoot>
      <SwitchThumb />
    </SwitchRoot>
  </FormField>
</template>
```

## Examples

<ComponentPreview name="switch/examples/disabled" />