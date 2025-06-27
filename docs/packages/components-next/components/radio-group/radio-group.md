# Radio Group

A group of radio buttons.

This component is built on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="radio-group/examples/main" />

## Anatomy

### Radio Group

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcRadioGroupRoot,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcRadioGroupRoot>
      <slot />
    </VcRadioGroupRoot>
  </VcFormField>
</template>
```

### Radio Group Item

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcRadioGroupItemRoot,
  VcRadioGroupItemControl,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcRadioGroupItemRoot>
      <VcRadioGroupItemControl />
    </VcRadioGroupItemRoot>
  </VcFormField>
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