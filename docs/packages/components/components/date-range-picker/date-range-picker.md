# Date Range Picker

A component for selecting a range of dates.

<ComponentPreview name="date-range-picker/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcDateRangePickerRoot,
  VcDateRangePickerHeader,
  VcDateRangePickerGrid,
  VcDateRangePickerDate,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDateRangePickerRoot>
    <VcDateRangePickerHeader />
    <VcDateRangePickerGrid>
      <template #date>
        <VcDateRangePickerDate />
      </template>
    </VcDateRangePickerGrid>
  </VcDateRangePickerRoot>
</template>
```

<!-- @include: ./date-range-picker-meta.md -->

## Examples

### Only show 1 month
<ComponentPreview name="date-range-picker/examples/one-month" />

### Min & Max
<ComponentPreview name="date-range-picker/examples/min-and-max" />

### Non-continous range
<ComponentPreview name="date-range-picker/examples/non-continuous-range" />
