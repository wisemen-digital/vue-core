<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import { RadioGroupItem } from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import { provideRadioGroupItemContext } from '@/components/radio-group/radioGroupItem.context'
import type { RadioGroupItemProps } from '@/components/radio-group/radioGroupItem.props'
import { useRadioGroupItemStyle } from '@/components/radio-group/radioGroupItem.style'
import RadioGroupItemIndicator from '@/components/radio-group/RadioGroupItemIndicator.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'
import { useElementAttributeObserver } from '@/composables/element-attribute-observer/elementAttributeObserver.composable'
import type { FormElementSlots } from '@/types/formElement.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const slots = defineSlots<FormElementSlots>()

const themeProviderContext = injectThemeProviderContext()

const radioGroupItemStyle = useRadioGroupItemStyle()
const inputId = props.id ?? useId()

const radioGroupItemRef = ref<InstanceType<any> | null>(null)

const isChecked = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.isTouched && props.errors.length > 0)

const hasDefaultSlot = computed<boolean>(() => slots.default !== undefined)

useElementAttributeObserver({
  attribute: 'aria-checked',
  element: computed<HTMLElement | null>(() => radioGroupItemRef.value?.$el ?? null),
  onChange: (value) => {
    isChecked.value = value === 'true'
  },
})

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const labelClasses = computed<string>(() => radioGroupItemStyle.label({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => radioGroupItemStyle.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => radioGroupItemStyle.error())

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

provideRadioGroupItemContext({
  inputId,
  testId: computed<string | null>(() => props.testId),
  hasError,
  isChecked,
  isDisabled: computed<boolean>(() => props.isDisabled),
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered: computed<boolean>(() => isHovered.value),
  isReadonly: computed<boolean>(() => props.isReadonly),
  isRequired: computed<boolean>(() => props.isRequired),
  hint: computed<string | null>(() => props.hint),
  value: computed<AcceptableValue>(() => props.value),
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
})
</script>

<template>
  <RadioGroupItem
    v-if="hasDefaultSlot"
    :id="inputId"
    ref="radioGroupItemRef"
    :data-test-id="props.testId"
    :aria-describedby="ariaDescribedBy"
    :disabled="props.isDisabled"
    :readonly="props.isReadonly"
    :required="props.isRequired"
    :value="props.value"
    :style="props.styleConfig"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
    class="group outline-none radio-group-item-default input-field-label-default input-field-error-default input-field-hint-default"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot />
  </RadioGroupItem>

  <div
    v-else
    :style="props.styleConfig"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
    class="radio-group-item-default input-field-label-default input-field-error-default input-field-hint-default grid grid-cols-[min-content_auto] items-center"
  >
    <RadioGroupItem
      :id="inputId"
      ref="radioGroupItemRef"
      :data-test-id="props.testId"
      :aria-describedby="ariaDescribedBy"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      :required="props.isRequired"
      :value="props.value"
      :style="props.styleConfig"
      class="group outline-none"
      @focus="onFocus"
      @blur="onBlur"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <RadioGroupItemIndicator />
    </RadioGroupItem>

    <slot
      v-if="props.label !== null"
      :label="props.label"
      :input-id="inputId"
      :is-required="props.isRequired"
      name="label"
    >
      <InputFieldLabel
        :class="labelClasses"
        :is-required="props.isRequired"
        :for="inputId"
        :label="props.label"
      />
    </slot>

    <!-- Spacer element for grid -->
    <span v-else />

    <!-- Spacer element for grid -->
    <span />

    <slot
      :errors="props.errors"
      :hint="props.hint"
      name="bottom"
    >
      <div>
        <Collapsable :is-visible="hasError || props.hint !== null">
          <div v-if="hasError">
            <slot
              :errors="props.errors"
              name="error"
            >
              <InputFieldError
                :errors="props.errors"
                :class="errorClasses"
                :input-id="inputId"
              />
            </slot>
          </div>

          <div v-else-if="props.hint !== null">
            <slot
              :hint="props.hint"
              name="hint"
            >
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
</template>
