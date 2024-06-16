---
sidebar: auto
---


# AppDatePicker
<script setup>
import AppDatePickerPlayground from './AppDatePickerPlayground.vue'
</script>

<AppDatePickerPlayground />

## Props

| Prop        | Type                         | Description                                               | Default     |
|-------------|------------------------------|-----------------------------------------------------------|-------------|
| id          | `string \| null`             | The id of the date picker                                 | `null`      |
| isDisabled  | `boolean`                    | Whether the date picker is disabled.                      | `false`     |
| isInvalid   | `boolean`                    | Whether the date picker is in an invalid state.           | `false`     |
| minDate     | `CalendarDate \| null`       | The minimum date that you can select.                     | `undefined` |
| maxDate     | `CalendarDate \| null`       | The maximum date the you can select.                      | `undefined` |

## Types

## Slots

## Code

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/AppDatePicker.vue).
