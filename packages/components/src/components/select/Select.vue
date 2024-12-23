<script setup lang="ts"  generic="TValue extends SelectValue">
import {
  ListboxContent,
  ListboxRoot,
  ListboxVirtualizer,
  useId,
} from 'reka-ui'
import {
  computed,
  type Ref,
  ref,
  useSlots,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import Popover from '@/components/popover/Popover.vue'
import PopoverAnchor from '@/components/popover/PopoverAnchor.vue'
import ScrollArea from '@/components/scroll-area/ScrollArea.vue'
import { provideSelectContext } from '@/components/select/select.context'
import type {
  SelectDisplayFn,
  SelectProps,
} from '@/components/select/select.props'
import { useSelectStyle } from '@/components/select/select.style'
import SelectFilter from '@/components/select/SelectFilter.vue'
import SelectItem from '@/components/select/SelectItem.vue'
import SelectValueBasic from '@/components/select/values/SelectValueBasic.vue'
import SelectValueTags from '@/components/select/values/SelectValueTags.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Icon } from '@/icons/icons'
import type { SelectItem as SelectItemType, SelectValue } from '@/types/select.type'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
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
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const searchTerm = ref<string>('')
const isOpen = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const selectStyle = useSelectStyle()

const { t } = useI18n()
const slots = useSlots()
const hasValueSlot = computed<boolean>(() => slots.value !== undefined)

const computedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

const inputId = props.id ?? useId()
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const dropdownContentClasses = computed<string>(() => selectStyle.dropdownContent())
const listboxContentClasses = computed<string>(() => selectStyle.listboxContent({
  isFilterVisible: props.filterFn !== null,
}))

const labelClasses = computed<string>(() => selectStyle.label({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => selectStyle.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => selectStyle.error())

const isMultiple = computed<boolean>(() => Array.isArray(model.value))

const shouldRemainOpenOnValueChange = computed<boolean>(() => {
  if (props.shouldRemainOpenOnValueChange !== null) {
    return props.shouldRemainOpenOnValueChange
  }

  return isMultiple.value
})

const filteredItems = computed<SelectItemType<TValue extends Array<infer U> ? U : TValue>[]>(() => {
  function filterItems<TValue extends SelectItemType<TValue>>(
    items: SelectItemType<TValue>[],
    filterFn: ((option: TValue, searchTerm: string) => boolean) | null,
    searchTerm: string,
  ): SelectItemType<TValue>[] {
    return items.reduce((acc: SelectItemType<TValue>[], item: SelectItemType<TValue>) => {
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

  const items = props.items as SelectItemType<TValue>[]
  const filterFn = props.filterFn ?? ((): boolean => true)

  return filterItems(items as any, filterFn, searchTerm.value) as SelectItemType<TValue extends Array<infer U>
    ? U
    : TValue>[]
})

const hasNoResults = computed<boolean>(() => {
  function hasOptions(items: SelectItemType<TValue>[]): boolean {
    for (const item of items) {
      if (item.type === 'option') {
        return true
      }

      if (item.type === 'group') {
        const groupHasOptions = hasOptions(item.items)

        if (groupHasOptions) {
          return true
        }
      }
    }

    return false
  }

  return !hasOptions(filteredItems.value)
})

const searchPlaceholder = computed<string>(() => props.searchPlaceholder ?? t('component.select.search_placeholder'))

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
    isOpen.value = true
    event.preventDefault()
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
  else if (!isFocused.value) {
    emit('blur')
  }
})

provideSelectContext({
  inputId,
  testId: computed<string | null>(() => props.testId),
  hasError,
  isDisabled: computed<boolean>(() => props.isDisabled),
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered,
  isLoading: computed<boolean>(() => props.isLoading),
  isMultiple,
  isOpen: computed<boolean>(() => isOpen.value),
  displayFn: props.displayFn as SelectDisplayFn<SelectValue>,
  hint: computed<string | null>(() => props.hint),
  iconLeft: computed<Icon | null>(() => props.iconLeft),
  iconRight: computed<Icon>(() => props.iconRight),
  modelValue: model as Ref<SelectValue>,
  placeholder: computed<string | null>(() => props.placeholder),
  searchPlaceholder,
  searchTerm,
  onTriggerBlur,
  onTriggerFocus,
  onTriggerKeyDown,
  onTriggerMouseEnter,
  onTriggerMouseLeave,
})
</script>

<template>
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="select-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
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

    <Popover
      v-model:is-open="isOpen"
      :popover-align="props.popoverAlign"
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
      <template #default>
        <PopoverAnchor>
          <SelectValueTags v-if="isMultiple && !hasValueSlot">
            <template #tag="{ value }">
              <slot
                :value="(value as unknown as TValue)"
                name="tag"
              />
            </template>

            <template #loader>
              <slot name="loader" />
            </template>
          </SelectValueTags>

          <SelectValueBasic v-else>
            <template #value="{ value }">
              <slot
                :value="(value as NonNullable<TValue>)"
                name="value"
              />
            </template>
          </SelectValueBasic>
        </PopoverAnchor>
      </template>

      <template #content>
        <!-- TODO: I'm not sure why I have to to provide the theme again, since it should be provided in the popover -->
        <div
          :style="props.styleConfig"
          :class="[dropdownContentClasses, themeProviderContext.theme.value]"
          class="select-default"
        >
          <slot name="content-top" />

          <ListboxRoot
            v-model="computedModel"
            :selection-behavior="isMultiple ? 'toggle' : 'replace'"
            :multiple="isMultiple"
            @update:model-value="onModelValueUpdate"
          >
            <slot
              v-if="props.filterFn !== null"
              name="filter"
            >
              <SelectFilter />
            </slot>

            <ScrollArea
              :as="ListboxContent"
              :scroll-area-class="listboxContentClasses"
            >
              <slot
                v-if="hasNoResults"
                :search-term="searchTerm"
                name="no-results"
              >
                <span class="block px-(--select-option-padding-x-default) py-(--select-option-padding-y-default) text-(size:--text-sm) text-tertiary">
                  {{ t('component.select.empty_text', { searchTerm }) }}
                </span>
              </slot>

              <template v-else-if="props.virtualList !== null">
                <ListboxVirtualizer
                  :options="filteredItems"
                  :overscan="10"
                  :estimate-size="props.virtualList.optionHeight"
                >
                  <template #default="{ option }">
                    <SelectItem :item="option">
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
                    </SelectItem>
                  </template>
                </ListboxVirtualizer>
              </template>

              <template v-else>
                <SelectItem
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
                </SelectItem>
              </template>
            </ScrollArea>
          </ListboxRoot>

          <slot name="content-bottom" />
        </div>
      </template>
    </Popover>

    <slot name="bottom">
      <Collapsable :is-visible="hasError || props.hint !== null">
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
