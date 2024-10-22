<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxCancel,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'reka-ui'
import { computed } from 'vue'

import type { AppAutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import { selectStyle } from '@/components/select/select.style'
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
  label: null,
  offsetInPx: 4,
  placeholder: null,
  popoverWidth: 'anchor-width',
  shouldRemainOpenOnValueChange: null,
  side: 'bottom',
  styleConfig: null,
})

const emit = defineEmits<{
  'search': [searchTerm: string]
  'update:modelValue': [value: TValue | null]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const style = selectStyle()

const computedModel = computed<TValue | undefined>({
  get: () => model.value ?? undefined,
  set: (value) => {
    model.value = value ?? null
  },
})

function onSearch(searchTerm: string): void {
  emit('search', searchTerm)
}
</script>

<template>
  <ComboboxRoot>
    <ComboboxAnchor @update:search="onSearch">
      <ComboboxInput />
      <ComboboxTrigger>trig</ComboboxTrigger>
      <ComboboxCancel>cancel</ComboboxCancel>
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent position="popper">
        <ComboboxViewport>
          <ComboboxItem
            v-for="(item, itemIndex) of props.items"
            :key="itemIndex"
            :value="item.value"
          >
            {{ props.displayFn(item.value) }}

            <ComboboxItemIndicator>Indicator</ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxViewport>

        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
