# Radio Group

A group of radio buttons.

This component is build on top of the [Form Field](/components/form-field/form-field.html) component.

<ComponentPreview name="radio-group/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  FormField,
  RadioGroupRoot,
  RadioGroupItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <RadioGroupRoot>
      <RadioGroupItem />
    </RadioGroupRoot>
  </FormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="radio-group/examples/disabled" />