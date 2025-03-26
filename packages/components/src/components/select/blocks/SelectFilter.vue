<script setup lang="ts">
import { ListboxFilter } from 'reka-ui'
import {
  computed,
  useAttrs,
  useSlots,
} from 'vue'

import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import TextField from '@/components/input-field/text-field/TextField.vue'
import { injectSelectContext } from '@/components/select/select.context'

interface Props extends TextFieldProps {}

const props = withDefaults(defineProps<Props>(), {})

const selectContext = injectSelectContext()
const attrs = useAttrs()
const slots = useSlots()

const hasDefaultSlot = computed<boolean>(() => slots.default !== undefined)
</script>

<template>
  <ListboxFilter
    v-if="hasDefaultSlot"
    :as-child="true"
  >
    <slot />
  </ListboxFilter>

  <div
    v-else-if="selectContext.hasFilter.value"
    class="px-(--select-dropdown-padding-x-default) pt-(--select-dropdown-padding-y-default)"
  >
    <ListboxFilter
      :as-child="true"
      @input="selectContext.onFilterInput"
    >
      <slot>
        <TextField
          v-model="selectContext.searchTerm.value"
          v-bind="{
            ...props,
            ...attrs,
            autoFocus: true,
          }"
          :style-config="{
            '--text-field-border-left-color-default': 'transparent',
            '--text-field-border-right-color-default': 'transparent',
            '--text-field-border-bottom-color-default': 'transparent',
            '--text-field-border-top-color-default': 'transparent',
            '--text-field-border-left-color-focus': 'transparent',
            '--text-field-border-right-color-focus': 'transparent',
            '--text-field-border-bottom-color-focus': 'transparent',
            '--text-field-border-top-color-focus': 'transparent',
            '--text-field-border-left-color-hover': 'transparent',
            '--text-field-border-right-color-hover': 'transparent',
            '--text-field-border-bottom-color-hover': 'transparent',
            '--text-field-border-top-color-hover': 'transparent',
            '--text-field-ring-color-focus': 'transparent',
            '--text-field-shadow-default': '0 0 0 0 transparent',
            '--text-field-shadow-focus': '0 0 0 0 transparent',
            '--text-field-shadow-hover': '0 0 0 0 transparent',
            '--text-field-bg-color-default': 'var(--bg-secondary)',
            '--text-field-bg-color-focus': 'var(--bg-secondary)',
            '--text-field-bg-color-hover': 'var(--bg-secondary)',
            '--text-field-height-default': '32px',
            '--text-field-with-icon-left-padding-left-default': 'var(--spacing-md)',
            '--text-field-icon-left-spacing-default': 'var(--spacing-md)',
            ...props.styleConfig,
          }"
          :placeholder="selectContext.searchPlaceholder.value"
          icon-left="search"
        />
      </slot>
    </ListboxFilter>
  </div>
</template>
