<script setup lang="ts">
import { useId } from 'vue'

import type { DateFieldEmits } from '@/components/date-field/dateField.emits'
import type { DateFieldProps } from '@/components/date-field/dateField.props'
import type { DateFieldSlots } from '@/components/date-field/dateField.slots'
import type { DateFieldSegment } from '@/components/date-field/dateField.type'
import DateFieldIconLeft from '@/components/date-field/parts/DateFieldIconLeft.vue'
import DateFieldInput from '@/components/date-field/parts/DateFieldInput.vue'
import DateFieldLoader from '@/components/date-field/parts/DateFieldLoader.vue'
import DatefieldPopover from '@/components/date-field/parts/DatefieldPopover.vue'
import DateFieldRoot from '@/components/date-field/parts/DateFieldRoot.vue'
import FormField from '@/components/form-field/FormField.vue'

const props = defineProps<DateFieldProps>()
const emit = defineEmits<DateFieldEmits>()

defineSlots<DateFieldSlots>()

const modelValue = defineModel<Date | null>({
  required: true,
})

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :errors="props.errors"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <DateFieldRoot
      v-bind="props"
      :id="id"
      v-slot="{ segments }"
      v-model="modelValue"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    >
      <slot name="left" />
      <DateFieldIconLeft />
      <DateFieldInput :segments="(segments as DateFieldSegment[])" />
      <DateFieldLoader />
      <DatefieldPopover />
    </DateFieldRoot>
  </FormField>
</template>
