<script setup lang="ts" generic="TValue extends Date">
import {
  CalendarDate,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import {
  DateFieldInput,
  DateFieldRoot,
} from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import Calendar from '@/components/calendar/Calendar.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import Icon from '@/components/icon/Icon.vue'
import type { DateFieldProps } from '@/components/input-field/date-field/dateField.props'
import InputField from '@/components/input-field/InputField.vue'
import { useTextFieldStyle } from '@/components/input-field/text-field/textField.style'
import Popover from '@/components/popover/Popover.vue'
import PopoverTrigger from '@/components/popover/PopoverTrigger.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<DateFieldProps>(), {
  id: null,
  testId: null,
  defaultPlaceholderDate: () => new Date(),
  isArrowHidden: false,
  isDateDisabled: () => false,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  areYearArrowsHidden: false,
  autoFocus: false,
  errors: () => [],
  hideDropdownTrigger: false,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  popoverAlign: 'end',
  popoverCollisionPaddingInPx: 12,
  popoverContainerElement: null,
  popoverOffsetInPx: 12,
  popoverSide: 'bottom',
  popoverWidth: null,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  /**
   * Can be used to render a custom hint and error message.
   */
  'bottom': ({ errors, hint }: { errors: string[], hint: string | null }) => void
  /**
   * Can be used to add content to each date.
   */
  'date': ({ date }: { date: Date }) => void
  /**
   * Can be used to render a custom error message.
   */
  'error': ({ errors }: { errors: string[] }) => void
  /**
   * Can be used to render a custom hint message.
   */
  'hint': ({ hint }: { hint: string | null }) => void
  /**
   * The content to display on the left side.
   */
  'icon-left': () => null
  /**
   * The content to display on the right side.
   */
  'icon-right': () => null
  /**
   * Can be used to render a custom label.
   */
  'label': ({ label }: { label: string | null }) => void
  /**
   * The content to display on the left side. (Will show under the iconLeft slot)
   */
  'left': () => null
  /**
   * Can be used to render a custom loader.
   */
  'loader': () => null
  /**
   * The content to display on the right side. (Will show under the calendar icon)
   */
  'right': () => null
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const delegatedModel = computed<DateValue | undefined>({
  get: () => {
    if (model.value === null) {
      return
    }

    const date = model.value.getDate()
    const month = model.value.getMonth()
    const year = model.value.getFullYear()

    return new CalendarDate(year, month + 1, date)
  },
  set: (value) => {
    model.value = (value?.toDate(getLocalTimeZone()) ?? null) as TValue | null
  },
})

const globalConfigContext = injectConfigContext()
const themeProviderContext = injectThemeProviderContext()

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

    <Popover
      :is-arrow-hidden="props.isArrowHidden"
      :popover-align="props.popoverAlign"
      :popover-collision-padding-in-px="props.popoverCollisionPaddingInPx"
      :popover-container-element="props.popoverContainerElement"
      :popover-offset-in-px="props.popoverOffsetInPx"
      :popover-width="props.popoverWidth"
      :popover-side="props.popoverSide"
    >
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

        <DateFieldRoot
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
            <DateFieldInput
              v-if="item.part === 'literal'"
              :part="item.part"
              class="text-tertiary"
            >
              {{ item.value }}
            </DateFieldInput>

            <DateFieldInput
              v-else
              :part="item.part"
              class="rounded-xs px-0.5 text-primary outline-none duration-200 focus:bg-quaternary data-[placeholder]:text-placeholder"
              @focus="onFocus"
              @blur="onBlur"
            >
              {{ item.value }}
            </DateFieldInput>
          </template>
        </DateFieldRoot>

        <div>
          <PopoverTrigger v-if="!props.hideDropdownTrigger">
            <IconButton
              :style-config="{
                '--icon-button-size-default': '2rem',
                '--icon-button-icon-size-default': '1.125rem',
                '--icon-button-ring-color-focus': 'transparent',
                '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
                '--icon-button-bg-color-disabled': 'transparent',
                '--icon-button-border-color-disabled': 'transparent',
                '--icon-button-border-radius-default': 'var(--radius-sm)',
              }"
              :is-disabled="props.isDisabled"
              icon="dateFieldIconRight"
              label="Open"
              class="mr-[0.1875rem] shrink-0"
              variant="tertiary"
            />
          </PopoverTrigger>

          <slot name="right" />
        </div>

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

      <template #content>
        <div class="p-4 w-80">
          <Calendar
            v-model="model"
            :are-year-arrows-hidden="props.areYearArrowsHidden"
            :default-placeholder-date="props.defaultPlaceholderDate"
            :is-date-disabled="props.isDateDisabled"
          >
            <template #date="{ date }">
              <slot
                :date="date"
                name="date"
              />
            </template>
          </Calendar>
        </div>
      </template>
    </Popover>
  </InputField>
</template>
