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

import type { AutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import Collapsable from '@/components/collapsable/Collapsable.vue'
import Icon from '@/components/icon/Icon.vue'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import Popover from '@/components/popover/Popover.vue'
import PopoverAnchor from '@/components/popover/PopoverAnchor.vue'
import { selectStyle } from '@/components/select/select.style'
import Spinner from '@/components/spinner/Spinner.vue'
import type { SelectOption, SelectValue } from '@/types/select.type'

const props = withDefaults(defineProps<AutocompleteProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 0,
  popoverContainerElement: null,
  popoverOffsetInPx: 4,
  popoverSide: 'bottom',
  popoverWidth: 'anchor-width',
  shouldRemainOpenOnValueChange: null,
  styleConfig: null,
})

const emit = defineEmits<{
  search: [searchTerm: string]
}>()

const model = defineModel<SelectOption<TValue> | null>({
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
  get: () => model.value?.value ?? undefined,
  set: (value) => {
    model.value = value !== undefined
      ? {
          label: props.items.find((item) => item.value === value)?.label ?? '',
          type: 'option',
          value,
        }
      : null
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
    updateSearchTermWithValue(model.value.value)
    isActuallyOpen.value = false
  }
}

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onSearchTermUpdate(value: string): void {
  searchTerm.value = value
}

watch(model, (model) => {
  if (model === null) {
    return
  }

  updateSearchTermWithValue(model.value)
})

watch(isOpen, (isOpen) => {
  if (!isOpen && !isFocused.value && model.value !== null) {
    updateSearchTermWithValue(model.value.value)
  }
})

watch(searchTerm, (searchTerm) => {
  emit('search', searchTerm)
})

if (model.value !== null) {
  updateSearchTermWithValue(model.value.value)
}
</script>

<template>
  <div
    :style="props.styleConfig"
    class="select-default text-field-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
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
        :class="labelClasses"
      />
    </slot>

    <ListboxRoot
      v-model="computedModel"
      selection-behavior="replace"
      @update:model-value="onUpdateModelValue"
    >
      <Popover
        v-model:is-open="isActuallyOpen"
        :align="props.popoverAlign"
        :is-arrow-hidden="!props.isArrowVisible"
        :popover-collision-padding-in-px="props.popoverCollisionPaddingInPx"
        :popover-container-element="props.popoverContainerElement"
        :popover-offset-in-px="props.popoverOffsetInPx"
        :popover-width="props.popoverWidth"
        :popover-side="props.popoverSide"
        :style-config="{
          '--popover-max-width-default': 'var(--select-dropdown-max-width-default)',
          '--popover-min-width-default': 'var(--select-dropdown-min-width-default)',
          ...props.styleConfig ?? {},
        }"
      >
        <PopoverAnchor>
          <div :class="boxClasses">
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

            <ListboxFilter
              :id="inputId"
              :model-value="model !== null ? model.label : searchTerm"
              :class="[inputClasses]"
              :placeholder="props.placeholder"
              autocomplete="off"
              @update:model-value="onSearchTermUpdate"
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
        </PopoverAnchor>

        <template #content>
          <div
            :class="dropdownContentClasses"
            :style="props.styleConfig"
            class="select-default"
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
                      <Icon
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
      </Popover>
    </ListboxRoot>

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
