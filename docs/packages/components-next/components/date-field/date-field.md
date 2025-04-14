# Date Field

An input component for entering or selecting a date.

This component is build on top of [Form Field](/packages/components-next/components/form-field/form-field.html) and uses the [Date Picker](/packages/components-next/components/date-picker/date-picker.html) component.

<ComponentPreview name="date-field/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDateField
    v-model="value"
    label="Select a date"
  />
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcDateFieldRoot,
  VcDateFieldIconLeft,
  VcDateFieldInput,
  VcDateFieldLoader,
  VcDatefieldPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcDateFieldRoot>
      <VcDateFieldIconLeft />
      <VcDateFieldInput />
      <VcDateFieldLoader />
      <VcDateFieldPopover />
    </VcDateFieldRoot>
  </VcFormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="date-field/examples/disabled" />

### Error

<ComponentPreview name="date-field/examples/error" />

### Show two months

<ComponentPreview name="date-field/examples/show-two-months" />

### Hide date picker

<ComponentPreview name="date-field/examples/hide-date-picker" />

### Customize

`iconLeft`, `iconRight`, `input`, `inputs`, `loader`, `root`

`datePicker` includes these sub-parts: `date`, `grid`, `gridBody`, `gridContainer`, `gridRow`, `header`, `headerContainer`, `monthSeparator`, `todayIndicator`, `weekDayLabel`,

<ComponentPreview name="date-field/examples/customize" />

<!-- @include: ./date-field-meta.md -->