# Date Picker

A component for selecting a date.

<ComponentPreview name="date-picker/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcDatePickerRoot,
  VcDatePickerHeader,
  VcDatePickerGrid,
  VcDatePickerDate,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDatePickerRoot>
    <VcDatePickerHeader />
    <VcDatePickerGrid>
      <template #date>
        <VcDatePickerDate />
      </template>
    </VcDatePickerGrid>
  </VcDatePickerRoot>
</template>
```

<!-- @include: ./date-picker-meta.md -->

## Examples

### Min. and Max

<ComponentPreview name="date-picker/examples/min-and-max" />

### Disabled Dates

<ComponentPreview name="date-picker/examples/disabled-dates" />

### Unavailable Dates

<ComponentPreview name="date-picker/examples/unavailable-dates" />

### Allow Deselect

<ComponentPreview name="date-picker/examples/allow-deselect" />

### Show Two Months

<ComponentPreview name="date-picker/examples/show-two-months" />

### Customize

<ComponentPreview name="date-picker/examples/customize" />