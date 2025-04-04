<script setup lang="ts" generic="TValue extends SelectValueType">
import {
  computed,
  ref,
  useAttrs,
  useId,
  watch,
} from 'vue'

import type { AutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import SelectEmpty from '@/components/select/blocks/SelectEmpty.vue'
import SelectFilter from '@/components/select/blocks/SelectFilter.vue'
import SelectList from '@/components/select/blocks/SelectList.vue'
import SelectPopover from '@/components/select/blocks/SelectPopover.vue'
import SelectRoot from '@/components/select/blocks/SelectRoot.vue'
import type {
  SelectItem,
  SelectOption,
  SelectValue as SelectValueType,
} from '@/types/select.type'

const props = withDefaults(defineProps<AutocompleteProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isSearchTermOptional: false,
  isTouched: false,
  clearSearchOnSelection: false,
  errors: () => [],
  hideClearButton: false,
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
  selectMatchOnBlur: false,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
  search: [searchTerm: string]
}>()

const model = defineModel<TValue | null>({ required: true })

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const searchTerm = ref<string>('')
const items = ref<SelectItem<TValue>[]>([])

const inputId = props.id ?? useId()

useAttrs()

const isSearchTermEmpty = computed<boolean>(() => searchTerm.value === null || searchTerm.value.length === 0)

const isActuallyOpen = computed<boolean>(() => {
  if (!isOpen.value) {
    return false
  }

  if (isSearchTermEmpty.value && !props.isSearchTermOptional) {
    return false
  }

  const options = items.value.filter((item) => item.type === 'option')

  if (options.length === 0 && props.isLoading) {
    return false
  }

  // When there is only 1 item, and that item is already selected, don't show the dropdown
  if (options.length === 1 && options[0] !== null) {
    const isFirstItemSelected = JSON.stringify(options[0]?.value) === JSON.stringify(model.value)
    const doesSearchTermMatchFirstItem
        = options[0] !== null
          && searchTerm.value === props.displayFn(options[0]!.value as any)

    if (isFirstItemSelected && !doesSearchTermMatchFirstItem) {
      return false
    }
  }

  return isOpen.value
})

function updateSearchTermWithValue(value: TValue): void {
  searchTerm.value = props.displayFn(value as any)
}

if (model.value !== null) {
  updateSearchTermWithValue(model.value)
}

function onInput(): void {
  isOpen.value = true
  model.value = null
}

function onClear(): void {
  searchTerm.value = ''
  model.value = null
  emit('blur')
}

function selectMatchOnBlur(): void {
  const option = items.value
    .filter((item) => item.type === 'option')
    // TODO: type
    .find((item) => props.displayFn(item.value as any) === searchTerm.value) ?? null

  if (option !== null) {
    model.value = option.value as TValue
  }
}

function onBlur(): void {
  emit('blur')

  if (props.selectMatchOnBlur) {
    selectMatchOnBlur()
  }
}

watch(model, (model) => {
  if (model === null) {
    return
  }

  isOpen.value = false

  if (props.clearSearchOnSelection) {
    searchTerm.value = ''
  }
  else {
    updateSearchTermWithValue(model)
  }
})

watch(searchTerm, (searchTerm) => {
  if (isSearchTermEmpty.value) {
    items.value = []
  }

  emit('search', searchTerm)
})

// To get more control of the items
watch(() => props.items, (newItems) => {
  items.value = newItems
})
</script>

<template>
  <SelectRoot
    :id="inputId"
    v-model="model"
    :is-open="isActuallyOpen"
    :display-fn="props.displayFn"
    :items="props.items"
    :is-arrow-visible="props.isArrowVisible"
    :is-open-controlled="true"
    :label="props.label"
    :is-disabled="props.isDisabled"
    :popover-align="props.popoverAlign"
    :popover-width="props.popoverWidth"
    :style-config="props.styleConfig"
    :popover-collision-padding-in-px="props.popoverCollisionPaddingInPx"
    :popover-container-element="props.popoverContainerElement"
    :popover-offset-in-px="props.popoverOffsetInPx"
    :popover-side="props.popoverSide"
    :errors="props.errors"
    :hint="props.hint"
    :test-id="props.testId"
    :is-touched="props.isTouched"
    @update:is-open="isOpen = $event"
  >
    <SelectPopover>
      <template #trigger>
        <SelectFilter>
          <TextField
            v-model="searchTerm"
            :icon-left="props.iconLeft"
            :placeholder="props.placeholder"
            :icon-right="props.iconRight"
            :is-disabled="props.isDisabled"
            :is-loading="props.isLoading"
            :is-required="props.isRequired"
            :is-touched="props.isTouched"
            :label="label"
            :errors="props.errors"
            @input="onInput"
            @focus="emit('focus')"
            @blur="onBlur"
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

            <template #right>
              <IconButton
                v-if="!props.hideClearButton && searchTerm.length > 0 && !props.isLoading"
                :style-config="{
                  '--icon-button-size-default': '2rem',
                  '--icon-button-icon-size-default': '1rem',
                  '--icon-button-ring-color-focus': 'transparent',
                  '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
                  '--icon-button-bg-color-disabled': 'transparent',
                  '--icon-button-border-color-disabled': 'transparent',
                }"
                :is-disabled="props.isDisabled"
                icon="close"
                label="Clear"
                size="sm"
                class="mr-[0.1875rem] shrink-0"
                variant="tertiary"
                @click="onClear"
              />

              <slot name="right" />
            </template>
          </TextField>
        </SelectFilter>
      </template>

      <template #content>
        <!-- Without the if, the empty state "flickers" when the search is emptied -->
        <SelectEmpty v-if="!isSearchTermEmpty">
          <slot name="empty" />
        </SelectEmpty>

        <SelectList>
          <template #option="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="(selectItem as SelectItem<TValue>)"
              name="option"
            />
          </template>

          <template #option-content="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="(selectItem as SelectOption<TValue>)"
              name="option-content"
            />
          </template>

          <template #option-indicator="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="(selectItem as SelectItem<TValue>)"
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
        </SelectList>
      </template>
    </SelectPopover>
  </SelectRoot>
</template>
