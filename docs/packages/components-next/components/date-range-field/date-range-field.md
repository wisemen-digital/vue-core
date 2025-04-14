# Date Range Field

An input component for entering or selecting a date range.

This component is build on top of [Form Field](/packages/components-next/components/form-field/form-field.html) and uses the [Date Picker](/packages/components-next/components/date-range-picker/date-range-picker.html) component.

<ComponentPreview name="date-range-field/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcDateRangeField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<DateRange>({
  from: null,
  until: null,
})
</script>

<template>
  <VcDateRangeField
    v-model="value"
    :show-two-months="true"
    label="Select a date"
  />
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFormField,
  VcDateRangeFieldRoot,
  VcDateRangeFieldIconLeft,
  VcDateRangeFieldInput,
  VcDateRangeFieldLoader,
  VcDateRangefieldPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcDateRangeFieldRoot>
      <VcDateRangeFieldIconLeft />
      <VcDateRangeFieldInput />
      <VcDateRangeFieldLoader />
      <VcDateRangeFieldPopover />
    </VcDateRangeFieldRoot>
  </VcFormField>
</template>
```

<!-- @include: ./date-range-field-meta.md -->