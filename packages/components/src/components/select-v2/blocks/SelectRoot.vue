<script setup lang="ts" generic="TValue extends SelectValue">
import {
  type AcceptableValue,
  ListboxRoot,
} from 'reka-ui'
import {
  computed,
  type Ref,
  ref,
  useId,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'

import { provideSelectContext } from '@/components/select-v2/select.context'
import type {
  SelectDisplayFn,
  SelectProps,
} from '@/components/select-v2/select.props'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'
import type { Icon } from '@/icons/icons'
import type {
  PopperAlign,
  PopperSide,
  PopperWidth,
} from '@/types/popper'
import type { SelectItem, SelectValue } from '@/types/select.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isOpenControlled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  filterFn: null,
  hint: null,
  iconLeft: null,
  iconRight: 'selectIconRight',
  label: null,
  placeholder: null,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 0,
  popoverContainerElement: null,
  popoverOffsetInPx: 4,
  popoverSide: 'bottom',
  popoverWidth: 'anchor-width',
  searchPlaceholder: null,
  shouldRemainOpenOnValueChange: null,
  styleConfig: null,
  virtualList: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
  select: [value: TValue]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const delegatedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

const searchTerm = defineModel<string>('searchTerm', {
  default: '',
  required: false,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const themeProviderContext = injectThemeProviderContext()
const { t } = useI18n()

const inputId = props.id ?? useId()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.isTouched && props.errors.length > 0)
const isMultiple = computed<boolean>(() => Array.isArray(model.value))

const filteredItems = computed<SelectItem<TValue extends Array<infer U> ? U : TValue>[]>(() => {
  function filterItems<TValue extends SelectItem<TValue>>(
    items: SelectItem<TValue>[],
    filterFn: ((option: TValue, searchTerm: string) => boolean) | null,
    searchTerm: string,
  ): SelectItem<TValue>[] {
    return items.reduce((acc: SelectItem<TValue>[], item: SelectItem<TValue>) => {
      if (item.type === 'option') {
        const isOptionValid = filterFn !== null
          ? filterFn(item.value, searchTerm)
          : true

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
  const filterFn = props.filterFn ?? ((): boolean => true)

  return filterItems(items as any, filterFn, searchTerm.value) as SelectItem<TValue extends Array<infer U>
    ? U
    : TValue>[]
})

const shouldRemainOpenOnValueChange = computed<boolean>(() => {
  if (props.shouldRemainOpenOnValueChange !== null) {
    return props.shouldRemainOpenOnValueChange
  }

  return isMultiple.value
})

const searchPlaceholder = computed<string>(() => props.searchPlaceholder ?? t('component.select.search_placeholder'))

const isEmpty = computed<boolean>(() => filteredItems.value.filter((item) => item.type === 'option').length === 0)

function setIsOpen(value: boolean): void {
  if (props.isOpenControlled) {
    return
  }

  isOpen.value = value
}

function resetSearchTerm(): void {
  searchTerm.value = ''
}

// In case the filter is rendered outside the popover, we want to make sure
// the dropdown is open when something is typed in the input
function onFilterInput(): void {
  setIsOpen(true)
}

function onModelValueUpdate(value: AcceptableValue): void {
  emit('select', value as TValue)

  if (shouldRemainOpenOnValueChange.value) {
    return
  }

  setIsOpen(false)
}

function onTriggerMouseEnter(): void {
  isMouseOver.value = true
}

function onTriggerMouseLeave(): void {
  isMouseOver.value = false
}

function onTriggerFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onTriggerBlur(): void {
  isFocused.value = false

  if (!isOpen.value) {
    emit('blur')
  }
}

function onTriggerKeyDown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    setIsOpen(true)
    event.preventDefault()
  }
}

// When the value changes, we want to reset the search term because
// without it, the options will be filtered each time the dropdown closes
watch(model, () => {
  setTimeout(() => {
    resetSearchTerm()
  }, 0)
})

provideSelectContext({
  inputId,
  testId: computed<string | null>(() => props.testId),
  hasError,
  hasFilter: computed<boolean>(() => props.filterFn !== null),
  isArrowVisible: computed<boolean>(() => props.isArrowVisible),
  isDisabled: computed<boolean>(() => props.isDisabled),
  isEmpty,
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered,
  isLoading: computed<boolean>(() => props.isLoading),
  isMultiple,
  isOpen,
  darkModeValue: computed<DarkModeValue>(() => themeProviderContext.darkModeValue.value),
  displayFn: props.displayFn as SelectDisplayFn<SelectValue>,
  hint: computed<string | null>(() => props.hint),
  iconLeft: computed<Icon | null>(() => props.iconLeft),
  iconRight: computed<Icon | null>(() => props.iconRight),
  items: computed<SelectItem<TValue>[]>(() => filteredItems.value),
  modelValue: model as Ref<SelectValue>,
  placeholder: computed<string | null>(() => props.placeholder),
  popoverAlign: computed<PopperAlign>(() => props.popoverAlign),
  popoverCollisionPaddingInPx: computed<number>(() => props.popoverCollisionPaddingInPx),
  popoverContainerElement: computed<HTMLElement | null>(() => props.popoverContainerElement),
  popoverOffsetInPx: computed<number>(() => props.popoverOffsetInPx),
  popoverSide: computed<PopperSide>(() => props.popoverSide),
  popoverWidth: computed<PopperWidth | null>(() => props.popoverWidth),
  searchPlaceholder,
  searchTerm,
  shouldRemainOpenOnValueChange,
  styleConfig: computed<SelectProps<TValue>['styleConfig']>(() => props.styleConfig),
  theme: computed<string>(() => themeProviderContext.theme.value),
  onFilterInput,
  onTriggerBlur,
  onTriggerFocus,
  onTriggerKeyDown,
  onTriggerMouseEnter,
  onTriggerMouseLeave,
})
</script>

<template>
  <ListboxRoot
    v-model="delegatedModel"
    :ignore-filter="true"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.darkModeValue.value)"
    :selection-behavior="isMultiple ? 'toggle' : 'replace'"
    class="select-default"
    @update:model-value="onModelValueUpdate"
  >
    <slot />
  </ListboxRoot>
</template>
