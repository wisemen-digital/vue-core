<script setup lang="ts" generic="TValue extends string">
import { Time } from '@internationalized/date'
import {
  TimeFieldInput,
  TimeFieldRoot,
} from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import { injectConfigContext } from '@/components/config-provider/config.context'
import Icon from '@/components/icon/Icon.vue'
import InputField from '@/components/input-field/InputField.vue'
import { useTextFieldStyle } from '@/components/input-field/text-field/textField.style'
import type { TimeFieldProps } from '@/components/input-field/time-field/timeField.props'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<TimeFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  autoFocus: false,
  errors: () => [],
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  'bottom': () => void
  'error': () => null
  'hint': () => null
  'icon-left': () => null
  'icon-right': () => null
  'label': () => void
  'left': () => null
  'loader': () => null
  'right': () => null
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const delegatedModel = computed<Time | undefined>({
  get: () => {
    if (model.value === null) {
      return undefined
    }

    const [
      hours,
      minutes,
    ] = model.value.split(':') ?? [
      '00',
      '00',
    ]

    return new Time(Number(hours), Number(minutes))
  },
  set: (value) => {
    if (value === undefined) {
      model.value = null

      return
    }

    const updatedValue = `${value.hour.toString().padStart(2, '0')}:${value.minute.toString().padStart(2, '0')}` as TValue

    model.value = updatedValue as TValue
  },
})

const globalConfigContext = injectConfigContext()
const themeContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const textFieldStyle = useTextFieldStyle()

const inputId = props.id ?? useId()
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.isTouched && props.errors.length > 0)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const boxClasses = computed<string>(() => textFieldStyle.box({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputClasses = computed<string>(() => textFieldStyle.input({
  hasError: hasError.value,
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => textFieldStyle.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => textFieldStyle.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => textFieldStyle.loaderBox())

const loaderClasses = computed<string>(() => textFieldStyle.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false

  // Since there are multiple inputs, it's possible that a blur event is triggered while navigating to another input
  // In this case, we don't want to emit the blur event since the focus is still within the component
  setTimeout(() => {
    if (!isFocused.value) {
      emit('blur')
    }
  })
}
</script>

<template>
  <InputField
    :input-id="inputId"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :errors="props.errors"
    :hint="props.hint"
    :label="props.label"
    :style="props.styleConfig"
    :class="themeContext.theme.value"
    class="text-field-default"
  >
    <template #label="{ label }">
      <slot
        :label="label"
        name="label"
      />
    </template>

    <template #error="{ errors }">
      <slot
        :errors="errors"
        name="error"
      />
    </template>

    <template #hint="{ hint }">
      <slot
        :hint="hint"
        name="hint"
      />
    </template>

    <template #bottom="{ errors, hint }">
      <slot
        :errors="errors"
        :hint="hint"
        name="bottom"
      />
    </template>

    <div
      :class="boxClasses"
      :aria-disabled="props.isDisabled"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <slot
        v-if="props.iconLeft !== null"
        name="icon-left"
      >
        <Icon
          :icon="props.iconLeft"
          :class="iconLeftClasses"
        />
      </slot>

      <slot name="left" />

      <TimeFieldRoot
        :id="inputId"
        v-slot="{ segments }"
        v-model="(delegatedModel as any)"
        :locale="globalConfigContext.locale.value"
        :aria-describedby="ariaDescribedBy"
        :data-test-id="props.testId"
        :readonly="props.isReadonly"
        :disabled="props.isDisabled"
        :aria-invalid="props.errors !== undefined && props.errors !== null"
        :required="props.isRequired"
        :class="inputClasses"
        class="flex w-full items-center"
      >
        <template
          v-for="item in segments"
          :key="item.part"
        >
          <TimeFieldInput
            v-if="item.part === 'literal'"
            :part="item.part"
            class="text-tertiary"
          >
            {{ item.value }}
          </TimeFieldInput>

          <TimeFieldInput
            v-else
            :part="item.part"
            class="rounded-xs px-0.5 text-primary outline-none duration-200 focus:bg-quaternary data-[placeholder]:text-placeholder"
            @focus="onFocus"
            @blur="onBlur"
          >
            {{ item.value }}
          </TimeFieldInput>
        </template>
      </TimeFieldRoot>

      <slot name="right" />

      <div
        v-if="props.isLoading"
        :class="loaderBoxClasses"
      >
        <slot name="loader">
          <Spinner :class="loaderClasses" />
        </slot>
      </div>

      <slot
        v-else-if="props.iconRight !== null"
        name="icon-right"
      >
        <Icon
          :icon="props.iconRight"
          :class="iconRightClasses"
        />
      </slot>
    </div>
  </InputField>
</template>
