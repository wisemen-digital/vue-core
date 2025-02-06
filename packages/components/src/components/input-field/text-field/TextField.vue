<script setup lang="ts" generic="TValue extends string">
import { useId } from 'reka-ui'
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import Icon from '@/components/icon/Icon.vue'
import InputField from '@/components/input-field/InputField.vue'
import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import { useTextFieldStyle } from '@/components/input-field/text-field/textField.style'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<TextFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  autoFocus: false,
  autocomplete: 'off',
  errors: () => [],
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  styleConfig: null,
  type: 'text',
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  'bottom': ({ errors, hint }: { errors: string[], hint: string | null }) => void
  'error': ({ errors }: { errors: string[] }) => void
  'hint': ({ hint }: { hint: string | null }) => void
  'icon-left': () => null
  'icon-right': () => null
  'label': ({ label }: { label: string | null }) => void
  'left': () => null
  'loader': () => null
  'right': () => null
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()
const textFieldStyle = useTextFieldStyle()

const inputRef = ref<HTMLInputElement | null>(null)

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

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
  emit('blur')
}

function setInitialFocus(): void {
  setTimeout(() => {
    inputRef.value?.focus()
  })
}

onMounted(() => {
  if (props.autoFocus) {
    setInitialFocus()
  }
})
</script>

<template>
  <InputField
    :style="props.styleConfig"
    :input-id="inputId"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :errors="props.errors"
    :hint="props.hint"
    :label="props.label"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
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

      <input
        :id="inputId"
        ref="inputRef"
        v-model="model"
        :data-test-id="props.testId"
        :readonly="props.isReadonly"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder ?? undefined"
        :spellcheck="props.isSpellCheckEnabled"
        :class="inputClasses"
        :autocomplete="props.autocomplete"
        :aria-describedby="ariaDescribedBy"
        :type="props.type"
        :required="props.isRequired"
        :aria-invalid="props.errors !== undefined && props.errors !== null"
        @focus="onFocus"
        @blur="onBlur"
      >

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
