<script setup lang="ts">
import { Time as TimeValue } from '@internationalized/date'
import { TimeFieldRoot as RekaTimeFieldRoot } from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import { useProvideTimeFieldContext } from '@/components/time-field/timeField.context'
import type { TimeFieldEmits } from '@/components/time-field/timeField.emits'
import type { TimeFieldProps } from '@/components/time-field/timeField.props'
import type { CreateTimeFieldStyle } from '@/components/time-field/timeField.style'
import { createTimeFieldStyle } from '@/components/time-field/timeField.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TimeFieldProps>(), {
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
  errors: () => [],
  hideDatePicker: false,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  showTwoMonths: false,
  variant: null,
})

const emit = defineEmits<TimeFieldEmits>()

const modelValue = defineModel<string | null>({ required: true })

const delegatedModel = computed<TimeValue | undefined>({
  get: () => {
    if (modelValue.value === null) {
      return
    }

    const [
      hours,
      minutes,
    ] = modelValue.value.split(':') ?? [
      '00',
      '00',
    ]

    return new TimeValue(Number(hours), Number(minutes))
  },
  set: (value) => {
    if (value === undefined) {
      modelValue.value = null

      return
    }

    const updatedValue = `${value.hour.toString().padStart(2, '0')}:${value.minute.toString().padStart(2, '0')}`

    modelValue.value = updatedValue
  },
})

const { locale } = useInjectConfigContext()

const isFocused = ref<boolean>(false)

const timeFieldStyle = computed<CreateTimeFieldStyle>(
  () => createTimeFieldStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('timeField', { variant: props.variant ?? undefined })

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

useProvideTimeFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: timeFieldStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <InteractableElement :is-disabled="props.isDisabled">
    <RekaTimeFieldRoot
      v-slot="{ segments }"
      v-model="delegatedModel"
      :locale="locale"
      :required="props.isRequired"
    >
      <!-- For some reason, the data- bindings don't work on the `RekaTimeFieldRoot` component -->
      <div
        :data-icon-left="props.iconLeft !== null || undefined"
        :data-invalid="(props.errors.length > 0 && props.isTouched) || undefined"
        :data-disabled="props.isDisabled || undefined"
        :class="timeFieldStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
      >
        <slot :segments="segments" />
      </div>
    </RekaTimeFieldRoot>
  </InteractableElement>
</template>
