# Date Picker

A component for selecting a date.

<ComponentPreview name="date-picker/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  DatePickerRoot,
  DatePickerHeader,
  DatePickerGrid,
  DatePickerDate,
} from '@wisemen/vue-core-components'
</script>

<template>
  <DatePickerRoot>
    <DatePickerHeader />
    <DatePickerGrid>
      <template #date>
        <DatePickerDate />
      </template>
    </DatePickerGrid>
  </DatePickerRoot>
</template>
```

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

<!-- @include: ./date-picker-meta.md -->
