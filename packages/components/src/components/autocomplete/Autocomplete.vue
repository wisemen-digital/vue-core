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
import InputField from '@/components/input-field/InputField.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import SelectEmpty from '@/components/select-v2/blocks/SelectEmpty.vue'
import SelectFilter from '@/components/select-v2/blocks/SelectFilter.vue'
import SelectList from '@/components/select-v2/blocks/SelectList.vue'
import SelectPopover from '@/components/select-v2/blocks/SelectPopover.vue'
import SelectRoot from '@/components/select-v2/blocks/SelectRoot.vue'
import type { SelectItem, SelectValue as SelectValueType } from '@/types/select.type'

const props = withDefaults(defineProps<AutocompleteProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
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
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
  search: [searchTerm: string]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const searchTerm = ref<string>('')
const isOpen = ref<boolean>(false)
const items = ref<SelectItem<TValue>[]>([])

const inputId = props.id ?? useId()

useAttrs()

const isSearchTermEmpty = computed<boolean>(() => searchTerm.value === null || searchTerm.value.length === 0)

const isActuallyOpen = computed<boolean>(() => {
  if (!isOpen.value || isSearchTermEmpty.value) {
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
  <InputField
    :input-id="inputId"
    :is-required="props.isRequired"
    :errors="props.errors"
    :hint="props.hint"
    :label="props.label"
    :is-touched="props.isTouched"
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

    <SelectRoot
      :id="props.id"
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
              @input="onInput"
              @focus="emit('focus')"
              @blur="emit('blur')"
            >
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
              </template>
            </TextField>
          </SelectFilter>
        </template>

        <template #content>
          <!-- Without the if, the empty state "flickers" when the search is emptied -->
          <SelectEmpty v-if="!isSearchTermEmpty">
            <slot name="empty" />
          </SelectEmpty>
          <SelectList />
        </template>
      </SelectPopover>
    </SelectRoot>
  </InputField>
</template>
