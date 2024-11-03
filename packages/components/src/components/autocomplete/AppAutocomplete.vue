<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxContent,
  ListboxFilter,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import type { AppAutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverAnchor from '@/components/popover/AppPopoverAnchor.vue'
import { selectStyle } from '@/components/select/select.style'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import type { SelectValue } from '@/types/select.type'

const props = withDefaults(defineProps<AppAutocompleteProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  align: 'center',
  collisionPaddingInPx: 0,
  containerElement: null,
  errors: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  offsetInPx: 4,
  placeholder: null,
  popoverWidth: 'anchor-width',
  shouldRemainOpenOnValueChange: null,
  side: 'bottom',
  styleConfig: null,
})

const emit = defineEmits<{
  search: [searchTerm: string]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const styleA = selectStyle()
const styleB = textFieldStyle()

const searchTerm = ref<string>('')
const isOpen = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const boxClasses = computed<string>(() => styleB.box({
  hasError: hasError.value,
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputClasses = computed<string>(() => styleB.input({
  hasError: hasError.value,
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const optionClasses = computed<string>(() => styleA.option())
const optionIndicatorClasses = computed<string>(() => styleA.optionIndicator())
const dropdownContentClasses = computed<string>(() => styleA.dropdownContent())
const listboxContentClasses = computed<string>(() => styleA.listboxContent())

const labelClasses = computed<string>(() => styleA.label({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => styleA.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => styleA.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => styleA.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => styleA.loaderBox())

const loaderClasses = computed<string>(() => styleA.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => styleA.error())

const isActuallyOpen = computed<boolean>({
  get: () => {
    if (!isOpen.value) {
      return false
    }

    if (props.items.length === 0) {
      return false
    }

    // When there is only 1 item, and that item is already selected, don't show the dropdown
    // if (props.items.length === 1 && props.items[0] !== null) {
    //   const isFirstItemSelected = props.items[0]?.value === model.value

    //   if (isFirstItemSelected && !doesSearchTermMatchFirstItem) {
    //     return false
    //   }
    // }

    return isOpen.value
  },
  set: (value) => {
    isOpen.value = value
  },
})

const computedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

function onFocus(): void {
  isFocused.value = true
}

function updateSearchTermWithValue(value: TValue): void {
  searchTerm.value = props.items.find((item) => item.value === value)?.label ?? ''
}

function onUpdateModelValue(): void {
  isActuallyOpen.value = false
}

function onInput(): void {
  isActuallyOpen.value = true
}

function onBlur(): void {
  isFocused.value = false

  if (model.value !== null && !isActuallyOpen.value) {
    updateSearchTermWithValue(model.value)
    isActuallyOpen.value = false
  }
}

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

watch(model, (model) => {
  if (model === null) {
    return
  }

  updateSearchTermWithValue(model)
})

watch(isOpen, (isOpen) => {
  if (!isOpen && !isFocused.value && model.value !== null) {
    updateSearchTermWithValue(model.value)
  }
})

watch(searchTerm, (searchTerm) => {
  emit('search', searchTerm)
})

if (model.value !== null) {
  updateSearchTermWithValue(model.value)
}
</script>

<template>
  <div
    :style="props.styleConfig"
    class="select-variant-default text-field-variant-default input-field-label-variant-default input-field-error-variant-default input-field-hint-variant-default icon-variant-default"
  >
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <AppInputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="labelClasses"
      />
    </slot>

    <ListboxRoot
      v-model="computedModel"
      selection-behavior="replace"
      @update:model-value="onUpdateModelValue"
    >
      <AppPopover
        v-model:is-open="isActuallyOpen"
        :align="props.align"
        :is-arrow-hidden="!props.isArrowVisible"
        :collision-padding-in-px="props.collisionPaddingInPx"
        :container-element="props.containerElement"
        :offset-in-px="props.offsetInPx"
        :popover-width="props.popoverWidth"
        :side="props.side"
        :style-config="{
          '--popover-max-width-default': 'var(--select-dropdown-max-width-default)',
          '--popover-min-width-default': 'var(--select-dropdown-min-width-default)',
          ...props.styleConfig ?? {},
        }"
      >
        <AppPopoverAnchor>
          <div :class="boxClasses">
            <slot
              v-if="props.iconLeft !== null"
              name="icon-left"
            >
              <AppIcon
                :icon="props.iconLeft"
                :class="iconLeftClasses"
              />
            </slot>

            <slot name="left" />

            <ListboxFilter
              :id="inputId"
              v-model="searchTerm"
              :class="[inputClasses]"
              autocomplete="off"
              @focus="onFocus"
              @input="onInput"
              @blur="onBlur"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            />

            <slot name="right" />

            <div
              v-if="props.isLoading"
              :class="loaderBoxClasses"
            >
              <slot name="loader">
                <AppSpinner :class="loaderClasses" />
              </slot>
            </div>

            <slot
              v-else-if="props.iconRight !== null"
              name="icon-right"
            >
              <AppIcon
                :icon="props.iconRight"
                :class="iconRightClasses"
              />
            </slot>
          </div>
        </AppPopoverAnchor>

        <template #content>
          <div
            :class="dropdownContentClasses"
            :style="props.styleConfig"
            class="select-variant-default"
          >
            <ListboxContent :class="listboxContentClasses">
              <ListboxItem
                v-for="item of props.items"
                :key="item.value"
                :value="item.value"
                :class="optionClasses"
              >
                {{ item.label }}

                <ListboxItemIndicator>
                  <div>
                    <slot>
                      <AppIcon
                        :class="optionIndicatorClasses"
                        icon="check"
                      />
                    </slot>
                  </div>
                </ListboxItemIndicator>
              </ListboxItem>
            </ListboxContent>
          </div>
        </template>
      </AppPopover>
    </ListboxRoot>

    <slot name="bottom">
      <AppCollapsable>
        <div v-if="hasError">
          <slot name="error">
            <AppInputFieldError
              :errors="props.errors"
              :class="errorClasses"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="props.hint !== null">
          <slot name="hint">
            <AppInputFieldHint
              :input-id="inputId"
              :hint="props.hint"
              :class="hintClasses"
            />
          </slot>
        </div>
      </AppCollapsable>
    </slot>
  </div>
</template>
