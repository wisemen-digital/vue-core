# Radio Group

A group of radio buttons.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="radio-group/examples/main" />

## Anatomy

### Radio Group

```vue
<script setup lang="ts">
import {
  FormField,
  RadioGroupRoot,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <RadioGroupRoot>
      <slot />
    </RadioGroupRoot>
  </FormField>
</template>
```

### Radio Group Item

```vue
<script setup lang="ts">
import {
  FormField,
  RadioGroupItemRoot,
  RadioGroupItemControl,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <RadioGroupItemRoot>
      <RadioGroupItemControl />
    </RadioGroupItemRoot>
  </FormField>
</template>
```

<!-- @include: ./radio-group-meta.md -->

## Examples

### Disabled

<ComponentPreview name="radio-group/examples/disabled" />

### Error

<ComponentPreview name="radio-group/examples/error" />

### Customize

<ComponentPreview name="radio-group/examples/customize" />