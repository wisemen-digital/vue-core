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
  RadioGroupItem,
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
  RadioGroupItemIndicator,
  RadioGroupItemIndicatorTransition,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <RadioGroupItemRoot>
      <RadioGroupItemIndicator>
        <RadioGroupItemIndicatorTransition />
      </RadioGroupItemIndicator>
    </RadioGroupItemRoot>
  </FormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="radio-group/examples/disabled" />

### Error

<ComponentPreview name="radio-group/examples/error" />

<!-- @include: ./radio-group-meta.md -->