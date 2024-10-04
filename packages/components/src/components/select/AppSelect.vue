<script setup lang="ts" generic="TValue extends SelectValueType">
import {
  ListboxContent,
  ListboxRoot,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppSelectFilter from '@/components/select/AppSelectFilter.vue'
import AppSelectItem from '@/components/select/AppSelectItem.vue'
import { useProvideSelectContext } from '@/components/select/select.context.js'
import {
  type AppSelectProps,
  appSelectPropsDefaultValues,
} from '@/components/select/select.props'
import { selectStyle } from '@/components/select/select.style.js'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import type { SelectItem, SelectValue as SelectValueType } from '@/types/select.type'

const props = withDefaults(defineProps<AppSelectProps<TValue>>(), appSelectPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const isOpen = ref<boolean>(false)
const searchTerm = ref<string>('')

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = selectStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const isMultiple = computed<boolean>(() => Array.isArray(model.value))

const triggerClasses = computed<string>(() => style.trigger({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const valueClasses = computed<string>(() => style.value())
const placeholderClasses = computed<string>(() => style.placeholder())

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const caretClasses = computed<string>(() => style.caret({
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
const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent({
  hasFilter: props.filterFn !== null,
}))

const computedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

const shouldRemainOpenOnValueChange = computed<boolean>(() => {
  if (props.shouldRemainOpenOnValueChange !== null) {
    return props.shouldRemainOpenOnValueChange
  }

  return isMultiple.value
})

// TODO:
const filteredItems = computed<SelectItem<TValue extends Array<infer U> ? U : TValue>[]>(() => {
  return props.items
})

const displayValue = computed<string>(() => {
  if (isMultiple.value) {
    const arrayValue = model.value as TValue[]

    return arrayValue.map((value) => props.displayFn(value as any)).join(', ')
  }

  if (model.value === null) {
    return ''
  }

  return props.displayFn(model.value as any)
})

const isEmpty = computed<boolean>(() => {
  if (isMultiple.value) {
    return (model.value as TValue[]).length === 0
  }

  return model.value === null
})

function onTriggerKeyDown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    isOpen.value = true
  }
}

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

watch(model, () => {
  if (shouldRemainOpenOnValueChange.value) {
    return
  }

  isOpen.value = false
})

useProvideSelectContext({
  isMultiple: isMultiple.value,
})
</script>

<template>
  <div :class="props.styleClass">
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <AppInputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="inputLabelClasses"
      />
    </slot>

    <AppPopover
      v-model:is-open="isOpen"
      :is-arrow-hidden="true"
      :offset-in-px="0"
      :popover-width="props.dropdownWidth"
      :align="props.dropdownAlign"
      :side="props.dropdownSide"
      :style-class="[dropdownClasses, ...(props.styleClass ?? [])]"
    >
      <template #default>
        <button
          :id="inputId"
          :class="triggerClasses"
          :disabled="props.isDisabled"
          :data-test-id="props.testId"
          @keydown="onTriggerKeyDown"
          @focus="onFocus"
          @blur="onBlur"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <AppIcon
            v-if="props.iconLeft !== null"
            :icon="props.iconLeft"
            :class="iconLeftClasses"
          />

          <div :class="valueClasses">
            <slot
              v-if="!isEmpty"
              :value="(model as NonNullable<TValue>)"
              name="value"
            >
              {{ displayValue }}
            </slot>

            <span
              v-else-if="props.placeholder !== null"
              :class="placeholderClasses"
            >
              {{ props.placeholder }}
            </span>
          </div>

          <slot
            :is-focused="isFocused"
            :is-hovered="isHovered"
            :is-disabled="props.isDisabled"
            :has-error="hasError"
            name="right"
          />

          <div
            v-if="props.isLoading"
            :class="loaderBoxClasses"
          >
            <slot name="loader">
              <AppSpinner :class="loaderClasses" />
            </slot>
          </div>

          <div
            v-else
            :class="caretClasses"
          >
            <slot
              name="caret"
            >
              <AppIcon
                icon="chevronDown"
              />
            </slot>
          </div>
        </button>
      </template>

      <template #content>
        <ListboxRoot
          v-model="computedModel"
          :multiple="isMultiple"
        >
          <AppSelectFilter
            v-if="props.filterFn !== null"
            v-model="searchTerm"
          />

          <ListboxContent :class="dropdownContentClasses">
            <AppSelectItem
              v-for="(item, itemIndex) of filteredItems"
              :key="itemIndex"
              :item="item"
              :display-fn="props.displayFn"
            >
              <template #option-content="{ item: selectItem }">
                <slot
                  v-if="selectItem.type === 'option'"
                  :item="selectItem"
                  name="option-content"
                />
              </template>

              <template #option-indicator="{ item: selectItem }">
                <slot
                  v-if="selectItem.type === 'option'"
                  :item="selectItem"
                  name="option-indicator"
                />
              </template>

              <template #group-label="{ label }">
                <slot
                  :label="label"
                  name="group-label"
                />
              </template>

              <template #separator>
                <slot name="separator" />
              </template>
            </AppSelectItem>
          </ListboxContent>
        </ListboxRoot>
      </template>
    </AppPopover>

    <AppCollapsable>
      <div v-if="hasError">
        <slot name="error">
          <AppInputFieldError
            :errors="props.errors"
            :class="errorClasses"
          />
        </slot>
      </div>

      <div v-else-if="props.hint !== null">
        <slot name="hint">
          <AppInputFieldHint
            :hint="props.hint"
            :class="hintClasses"
          />
        </slot>
      </div>
    </AppCollapsable>
  </div>
</template>
