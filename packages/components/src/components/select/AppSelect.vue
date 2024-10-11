<script setup lang="ts"  generic="TValue extends SelectValue">
import {
  ListboxContent,
  ListboxRoot,
  useId,
} from 'reka-ui'
import {
  computed,
  type Ref,
  ref,
  useSlots,
  watch,
} from 'vue'

import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverAnchor from '@/components/popover/AppPopoverAnchor.vue'
import AppSelectFilter from '@/components/select/AppSelectFilter.vue'
import AppSelectItem from '@/components/select/AppSelectItem.vue'
import { provideSelectContext } from '@/components/select/select.context'
import {
  type AppSelectProps,
  appSelectPropsDefaultValues,
  type SelectDisplayFn,
} from '@/components/select/select.props.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSelectValueBasic from '@/components/select/values/AppSelectValueBasic.vue'
import AppSelectValueTags from '@/components/select/values/AppSelectValueTags.vue'
import type { Icon } from '@/icons/icons.js'
import type { SelectItem, SelectValue } from '@/types/select.type.js'

const props = withDefaults(defineProps<AppSelectProps<TValue>>(), appSelectPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const searchTerm = ref<string>('')
const isOpen = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = selectStyle()

const slots = useSlots()
const hasValueSlot = computed<boolean>(() => slots.value !== undefined)

const computedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const dropdownContent = computed<string>(() => style.dropdownContent())
const listboxContent = computed<string>(() => style.listboxContent())

const isMultiple = computed<boolean>(() => Array.isArray(model.value))

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

  return filterItems(items as any, filterFn, searchTerm.value) as SelectItem<TValue extends Array<infer U>
    ? U
    : TValue>[]
})

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
  emit('blur')
}

function onTriggerKeyDown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    isOpen.value = true
  }
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
  inputId,
  testId: computed<null | string>(() => props.testId),
  hasError,
  isDisabled: computed<boolean>(() => props.isDisabled),
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered,
  isLoading: computed<boolean>(() => props.isLoading),
  isOpen: computed<boolean>(() => isOpen.value),
  displayFn: props.displayFn as SelectDisplayFn<SelectValue>,
  iconLeft: computed<Icon | null>(() => props.iconLeft),
  iconRight: computed<Icon>(() => props.iconRight),
  modelValue: model as Ref<SelectValue>,
  placeholder: computed<null | string>(() => props.placeholder),
  searchTerm,
  onTriggerBlur,
  onTriggerFocus,
  onTriggerKeyDown,
  onTriggerMouseEnter,
  onTriggerMouseLeave,
})
</script>

<template>
  <div :style="props.styleConfig">
    <!-- TODO: label -->
    <AppPopover
      v-model:is-open="isOpen"
      :align="props.align"
      :is-arrow-hidden="!props.isArrowVisible"
      :collision-padding-in-px="props.collisionPaddingInPx"
      :container-element="props.containerElement"
      :offset-in-px="props.offsetInPx"
      :popover-width="props.popoverWidth"
      :side="props.side"
    >
      <template #default>
        <AppPopoverAnchor>
          <AppSelectValueTags v-if="isMultiple && !hasValueSlot">
            <template #tag="{ value }">
              <slot
                :value="(value as unknown as TValue)"
                name="tag"
              />
            </template>

            <template #loader>
              <slot name="loader" />
            </template>
          </AppSelectValueTags>

          <AppSelectValueBasic v-else>
            <template #value="{ value }">
              <slot
                :value="(value as NonNullable<TValue>)"
                name="value"
              />
            </template>
          </AppSelectValueBasic>
        </AppPopoverAnchor>
      </template>

      <template #content>
        <div
          :style="props.styleConfig"
          :class="dropdownContent"
        >
          <slot name="top" />

          <ListboxRoot
            v-model="computedModel"
            :selection-behavior="isMultiple ? 'toggle' : 'replace'"
            :multiple="isMultiple"
            @update:model-value="onModelValueUpdate"
          >
            <slot name="filter">
              <AppSelectFilter />
            </slot>

            <ListboxContent :class="listboxContent">
              <slot
                v-if="filteredItems.length === 0"
                name="empty"
              />

              <template v-else>
                <AppSelectItem
                  v-for="(item, itemIndex) of filteredItems"
                  :key="itemIndex"
                  :item="item"
                >
                  <template #option="{ item: selectItem }">
                    <slot
                      v-if="selectItem.type === 'option'"
                      :item="selectItem"
                      name="option"
                    />
                  </template>

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
              </template>
            </ListboxContent>
          </ListboxRoot>

          <slot name="bottom" />
        </div>
      </template>
    </AppPopover>
    <!-- TODO: error -->
    <!-- TODO: hint -->
  </div>
</template>
