---
sidebar: auto
---


# AppDateRangePicker
<script setup>
import AppDateRangePickerPlayground from './AppDateRangePickerPlayground.vue'
</script>

<AppDateRangePickerPlayground />

## Props

| Prop       | Type             | Description                                     | Default |
|------------|------------------|-------------------------------------------------|---------|
| id         | `string \| null` | The id of the date picker                       | `null`  |
| isDisabled | `boolean`        | Whether the date picker is disabled.            | `false` |
| isInvalid  | `boolean`        | Whether the date picker is in an invalid state. | `false` |
| modelValue | `Date \| null`   | The model value.                                | `null`  |
| minDate    | `Date \| null`   | The minimum date that you can select.           | `null`  |
| maxDate    | `date \| null`   | The maximum date the you can select.            | `null`  |

## Types

## Slots

## Code

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/AppDatePicker.vue).
