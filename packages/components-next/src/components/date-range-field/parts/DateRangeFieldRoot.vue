<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { DateRangeFieldRoot as RekaDateRangeFieldRoot } from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import {
  getCustomComponentVariant,
  mergeClasses,
} from '@/class-variant/customClassVariants'
import { useInjectConfigContext } from '@/components/config-provider/config.context'
import {
  dateToDateValue,
  dateValueToDate,
} from '@/components/date-picker/shared/datePicker.util'
import { useProvideDateRangeFieldContext } from '@/components/date-range-field/dateRangeField.context'
import type { DateRangeFieldEmits } from '@/components/date-range-field/dateRangeField.emits'
import type { DateRangeFieldProps } from '@/components/date-range-field/dateRangeField.props'
import type { CreateDateRangeFieldStyle } from '@/components/date-range-field/dateRangeField.style'
import { createDateRangeFieldStyle } from '@/components/date-range-field/dateRangeField.style'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { DateRange } from '@/types/dateRange.type'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DateRangeFieldProps>(), {
  id: null,
  testId: null,
  maxDate: null,
  minDate: null,
  isDateDisabled: () => false,
  isDateUnavailable: () => false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  allowDeselect: false,
  autocomplete: 'off',
  classConfig: null,
  errorMessage: null,
  hideDatePicker: false,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  showTwoMonths: false,
  variant: null,
})

const emit = defineEmits<DateRangeFieldEmits>()

const modelValue = defineModel<DateRange>({ required: true })

const delegatedModel = computed<{ end: DateValue | undefined
  start: DateValue | undefined }>({
  get: () => {
    return {
      end: modelValue.value.until === null ? undefined : dateToDateValue(modelValue.value.until),
      start: modelValue.value.from === null ? undefined : dateToDateValue(modelValue.value.from),
    }
  },
  set: (value) => {
    if (value.start === undefined || value.end === null) {
      modelValue.value.from = null
    }
    else {
      modelValue.value.from = dateValueToDate(value.start)
    }

    if (value.end === undefined || value.end === null) {
      modelValue.value.until = null
    }
    else {
      modelValue.value.until = dateValueToDate(value.end)
    }
  },
})

const { locale } = useInjectConfigContext()
const { theme } = injectThemeProviderContext()

const isFocused = ref<boolean>(false)

const dateRangeFieldStyle = computed<CreateDateRangeFieldStyle>(
  () => createDateRangeFieldStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = computed<ResolvedClassConfig<'dateRangeField'>>(
  () => getCustomComponentVariant('dateRangeField', theme.value, { variant: props.variant }),
)

function onFocus(event: FocusEvent): void {
  isFocused.value = true
  emit('focus', event)
}

function onBlur(event: FocusEvent): void {
  isFocused.value = false

  // Since there are multiple inputs, it's possible that a blur event is triggered while navigating to another input
  // In this case, we don't want to emit the blur event since the focus is still within the component
  setTimeout(() => {
    if (!isFocused.value) {
      emit('blur', event)
    }
  })
}

useProvideDateRangeFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: dateRangeFieldStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <InteractableElement :is-disabled="props.isDisabled">
    <RekaDateRangeFieldRoot
      :id="props.id ?? undefined"
      v-slot="{ segments }"
      v-model="delegatedModel"
      :min-value="props.minDate === null ? undefined : dateToDateValue(props.minDate)"
      :max-value="props.maxDate === null ? undefined : dateToDateValue(props.maxDate)"
      :is-date-unavailable="(dateValue) => props.isDateUnavailable(dateValueToDate(dateValue))"
      :locale="locale"
      :is-invalid="props.errorMessage !== null"
      :required="props.isRequired"
    >
      <!-- For some reason, the data- bindings don't work on the `RekaDateRangeFieldRoot` component -->
      <div
        :data-icon-left="props.iconLeft !== null || undefined"
        :data-invalid="(props.errorMessage !== null && props.isTouched) || undefined"
        :data-disabled="props.isDisabled || undefined"
        :class="dateRangeFieldStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
      >
        <slot :segments="segments" />
      </div>
    </RekaDateRangeFieldRoot>
  </InteractableElement>
</template>
