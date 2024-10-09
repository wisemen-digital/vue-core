<script setup lang="ts" generic="TValue extends SelectValueType">
import {
  ListboxContent,
  ListboxRoot,
  PopoverAnchor,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppSelectFilter from '@/components/select/AppSelectFilter.vue'
import AppSelectItem from '@/components/select/AppSelectItem.vue'
import AppSelectTagsBox from '@/components/select/AppSelectTagsBox.vue'
import { provideSelectContext } from '@/components/select/select.context.js'
import {
  type AppSelectProps,
  appSelectPropsDefaultValues,
} from '@/components/select/select.props'
import { selectStyle } from '@/components/select/select.style.js'
import type {
  SelectItem,
  SelectValue,
  SelectValue as SelectValueType,
} from '@/types/select.type'

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

const filteredItems = computed<SelectItem<TValue extends Array<infer U> ? U : TValue>[]>(() => {
  function filterItems<TValue extends SelectValue>(
    items: SelectItem<TValue>[],
    filterFn: ((option: TValue, searchTerm: string) => boolean) | null,
    searchTerm: string,
  ): SelectItem<TValue>[] {
    return items.reduce((acc: SelectItem<TValue>[], item: SelectItem<TValue>) => {
      if (item.type === 'option') {
        const isOptionValid = filterFn !== null
          ? filterFn(item.value, searchTerm)
          : !item.isDisabled

        if (isOptionValid) {
          acc.push(item)
        }
      }
      else if (item.type === 'group') {
        const filteredGroupItems = filterItems(item.items, filterFn, searchTerm)
        const hasValidOptions = filteredGroupItems.some((groupItem) => groupItem.type === 'option')

        if (hasValidOptions) {
          acc.push({
            ...item,
            items: filteredGroupItems,
          })
        }
      }
      else if (item.type === 'separator') {
        acc.push(item)
      }

      return acc
    }, [])
  }

  const items = props.items as SelectItem<TValue>[]
  const filterFn = props.filterFn

  return filterItems(items, filterFn, searchTerm.value) as SelectItem<TValue extends Array<infer U> ? U : TValue>[]
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

function onModelValueUpdate(): void {
  if (shouldRemainOpenOnValueChange.value) {
    return
  }

  isOpen.value = false
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    searchTerm.value = ''
  }
})

provideSelectContext({
  hasError: computed<boolean>(() => hasError.value),
  isDisabled: computed<boolean>(() => props.isDisabled),
  isEmpty,
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered: computed<boolean>(() => isHovered.value),
  placeholder: computed<null | string>(() => props.placeholder),
  value: computed<any>(() => model.value),
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  onTriggerKeyDown,
})
</script>

<template>
  <div :style="props.styleConfig">
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
      :style-config="{
        '--popover-bg-color-default': 'var(--select-dropdown-bg-color-default)',
        '--popover-border-color-default': 'var(--select-dropdown-border-color-default)',
        '--popover-border-radius-default': 'var(--select-dropdown-border-radius-default)',
        '--popover-max-width-default': 'var(--select-dropdown-max-width-default)',
        '--popover-shadow-default': 'var(--select-dropdown-shadow-default)',
        ...props.styleConfig ?? {},
      }"
    >
      <template #default>
        <PopoverAnchor>
          <slot name="value">
            <!-- TODO: id enzo juist zetten -->
            <AppSelectTagsBox />
            <!-- <AppSelectMultiBox /> -->
          </slot>
        </PopoverAnchor>
      </template>

      <template #content>
        <ListboxRoot
          v-model="computedModel"
          :multiple="isMultiple"
          :selection-behavior="isMultiple ? 'toggle' : 'replace'"
          @update:model-value="onModelValueUpdate"
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
