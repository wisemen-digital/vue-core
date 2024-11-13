<script setup lang="ts" generic="TValue extends string">
import { Time } from '@internationalized/date'
import {
  TimeFieldInput,
  TimeFieldRoot,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import Icon from '@/components/icon/Icon.vue'
import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<Omit<TextFieldProps, 'autocomplete' | 'placeholder' | 'type'>>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  errors: null,
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
  'label': (props: { inputId: string }) => void
  'left': () => null
  'loader': () => null
  'right': () => null
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const computedModel = computed<Time | undefined>({
  get: () => {
    console.log('get')

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

    model.value = `${value.hour}:${value.minute}` as TValue
  },
})

const globalConfigContext = injectConfigContext()
const themeContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textFieldStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const boxClasses = computed<string>(() => style.box({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputClasses = computed<string>(() => style.input({
  hasError: hasError.value,
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => style.error())

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
  emit('blur')
}
</script>

<template>
  <div
    :style="props.styleConfig"
    :class="themeContext.theme.value"
    class="text-field-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
  >
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <InputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="inputLabelClasses"
      />
    </slot>

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
        v-model="(computedModel as any)"
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
            class="rounded px-0.5 text-primary outline-none duration-200 focus:bg-quaternary data-[placeholder]:text-placeholder"
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

    <slot name="bottom">
      <Collapsable>
        <div v-if="hasError">
          <slot name="error">
            <InputFieldError
              :errors="props.errors"
              :class="errorClasses"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="props.hint !== null">
          <slot name="hint">
            <InputFieldHint
              :input-id="inputId"
              :hint="props.hint"
              :class="hintClasses"
            />
          </slot>
        </div>
      </Collapsable>
    </slot>
  </div>
</template>
