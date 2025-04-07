<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { DateFieldRoot as RekaDateFieldRoot } from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import { useProvideDateFieldContext } from '@/components/date-field/dateField.context'
import type { DateFieldEmits } from '@/components/date-field/dateField.emits'
import type { DateFieldProps } from '@/components/date-field/dateField.props'
import type { CreateDateFieldStyle } from '@/components/date-field/dateField.style'
import { createDateFieldStyle } from '@/components/date-field/dateField.style'
import {
  dateToDateValue,
  dateValueToDate,
} from '@/components/date-picker/shared/datePicker.util'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DateFieldProps>(), {
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

const emit = defineEmits<DateFieldEmits>()

const modelValue = defineModel<Date | null>({ required: true })

const delegatedModel = computed<DateValue | null>({
  get: () => {
    if (modelValue.value === null) {
      return null
    }

    return dateToDateValue(modelValue.value)
  },
  set: (value) => {
    if (value === null || value === undefined) {
      modelValue.value = null

      return
    }

    modelValue.value = dateValueToDate(value)
  },
})

const { locale } = useInjectConfigContext()

const isFocused = ref<boolean>(false)

const dateFieldStyle = computed<CreateDateFieldStyle>(
  () => createDateFieldStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('dateField', { variant: props.variant ?? undefined })

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

useProvideDateFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: dateFieldStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <InteractableElement :is-disabled="props.isDisabled">
    <RekaDateFieldRoot
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
      <!-- For some reason, the data- bindings don't work on the `RekaDateFieldRoot` component -->
      <div
        :data-icon-left="props.iconLeft !== null || undefined"
        :data-invalid="(props.errorMessage !== null && props.isTouched) || undefined"
        :data-disabled="props.isDisabled || undefined"
        :class="dateFieldStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
      >
        <slot :segments="segments" />
      </div>
    </RekaDateFieldRoot>
  </InteractableElement>
</template>
