<script setup lang="ts">
import {
  SwitchRoot,
  SwitchThumb,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import Icon from '@/components/icon/Icon.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import type { SwitchProps } from '@/components/switch/switch.props'
import { useSwitchStyle } from '@/components/switch/switch.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<SwitchProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  iconChecked: null,
  iconUnchecked: null,
  label: null,
  size: 'default',
  styleConfig: null,
})

const emit = defineEmits<{
  blur: [event: Event]
  focus: [event: Event]
}>()

const model = defineModel<boolean>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const switchStyle = useSwitchStyle()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const inputId = computed<string>(() => props.id ?? useId())

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isChecked = computed<boolean>(() => model.value)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const baseClasses = computed<string>(() => switchStyle.base({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  size: props.size,
}))

const thumbClasses = computed<string>(() => switchStyle.thumb({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const labelClasses = computed<string>(() => switchStyle.label({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => switchStyle.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => switchStyle.error())

const iconClasses = computed<string>(() => switchStyle.icon({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const enterFromClass = computed<string>(() => {
  if (model.value) {
    return 'opacity-0 translate-x-4 scale-50'
  }

  return 'opacity-0 -translate-x-4 scale-50'
})

const leaveToClass = computed<string>(() => {
  if (model.value) {
    return 'opacity-0 -translate-x-4 scale-50'
  }

  return 'opacity-0 translate-x-4 scale-50'
})

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(e: Event): void {
  isFocused.value = true
  emit('focus', e)
}

function onBlur(e: Event): void {
  isFocused.value = false
  emit('blur', e)
}
</script>

<template>
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="switch-default input-field-label-default input-field-hint-default input-field-error-default"
  >
    <div class="grid grid-cols-[min-content_auto] items-center">
      <SwitchRoot
        :id="inputId"
        v-model="model"
        :disabled="props.isDisabled || props.isReadonly"
        :data-test-id="props.testId"
        :aria-describedby="ariaDescribedBy"
        :class="baseClasses"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focus="onFocus"
        @blur="onBlur"
      >
        <SwitchThumb :class="thumbClasses">
          <Transition
            :enter-from-class="enterFromClass"
            :leave-to-class="leaveToClass"
          >
            <div
              v-if="props.iconChecked !== null || props.iconUnchecked !== null"
              :key="+model"
              :class="iconClasses"
            >
              <Icon
                v-if="model && props.iconChecked !== null"
                :icon="props.iconChecked"
              />

              <Icon
                v-else-if="!model && props.iconUnchecked !== null"
                :icon="props.iconUnchecked"
              />
            </div>
          </Transition>
        </SwitchThumb>
      </SwitchRoot>

      <InputFieldLabel
        v-if="props.label !== null"
        :class="labelClasses"
        :is-required="props.isRequired"
        :for="inputId"
        :label="props.label"
      />

      <!-- Spacer element for grid -->
      <span v-else />

      <!-- Spacer element for grid -->
      <span />

      <slot name="bottom">
        <div>
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
        </div>
      </slot>
    </div>
  </div>
</template>

<style>
.thumb {
  transition-timing-function: linear(0.00, -0.0145, 0.0307, 0.111, 0.227, 0.358, 0.492, 0.622, 0.742, 0.846, 0.934, 1.00, 1.06, 1.10, 1.12, 1.13, 1.13, 1.12, 1.11, 1.10, 1.08, 1.06, 1.05, 1.03, 1.02, 1.01, 0.999, 0.992, 0.987, 0.985, 0.983, 0.983, 0.984, 0.986, 0.988, 0.990, 0.992, 0.994, 0.996, 0.998, 0.999, 1.00, 1.00);
}
</style>
