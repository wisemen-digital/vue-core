<script setup lang="ts" generic="T extends string">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { DataItem } from '@/types/dataItem.type'

import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'
import AppText from '../text/AppText.vue'
import AppComboboxItem from './AppComboboxItem.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The text to display when there are no options.
     * @default t('components.combobox.empty')
     */
    emptyText?: null | string
    /**
     * Whether the combobox is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the combobox is in an invalid state.
     * @default false
     */
    isInvalid?: boolean
    /**
     * Whether the combobox is loading.
     */
    isLoading?: boolean
    /**
     * The value of the combobox.
     */
    modelValue: T | T[] | null
    /**
     * The options to display in the combobox.
     */
    options: DataItem<T>[]
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    emptyText: null,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'filter': [value: string]
  'update:modelValue': [value: T | T[] | null]
}>()

const model = computed<T | T[] | undefined>({
  get: () => props.modelValue ?? undefined,
  set: (value) => {
    emit('update:modelValue', value ?? null)
  },
})

const { t } = useI18n()

const isOpen = ref<boolean>(false)

const isMultiple = computed<boolean>(() => Array.isArray(model.value))

const placeholderValue = computed<string | undefined>(() => {
  if (!isMultiple.value) {
    return props.placeholder ?? undefined
  }

  return (model.value as T[]).map(displayFn).join(', ')
})

const isEmpty = computed<boolean>(() => {
  if (isMultiple.value) {
    return (model.value as T[]).length === 0
  }

  return model.value === undefined
})

function filterFn(options: T[], filter: string): any {
  return options.filter((optionValue) => {
    const option = props.options.find(o => o.value === optionValue) ?? null

    if (option === null) {
      return false
    }

    return option.label.toLowerCase().includes(filter.toLowerCase())
  })
}

function displayFn(value: T): string {
  const option = props.options.find(o => o.value === value) ?? null

  if (option === null) {
    return ''
  }

  return option.label
}

function onFilter(filter: string): void {
  emit('filter', filter)
}

function onBlur(): void {
  if (!isOpen.value) {
    emit('blur')
  }
}
</script>

<template>
  <div>
    <ComboboxRoot
      v-model="model"
      v-model:open="isOpen"
      :disabled="props.isDisabled"
      :display-value="displayFn"
      :filter-function="filterFn"
      :multiple="isMultiple"
      @update:search-term="onFilter"
    >
      <ComboboxAnchor>
        <div class="relative">
          <ComboboxInput
            :class="{
              'border-input-border focus-within:ring-ring': !props.isInvalid,
              'border-destructive focus-within:ring-destructive': props.isInvalid,
              'placeholder:text-input-placeholder': isEmpty && !isMultiple,
              'placeholder:text-input-foreground': !isEmpty && isMultiple,
              'focus:placeholder:text-input-placeholder': isMultiple && !isEmpty,
            }"
            :placeholder="placeholderValue"
            class="h-10 w-full truncate rounded-input border bg-input pl-3 pr-9 text-sm outline-none ring-offset-background duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            tabindex="0"
            @blur="onBlur"
          />

          <div
            :class="{
              'pointer-events-none opacity-50': props.isDisabled,
            }"
            class="absolute right-1 top-1/2 box-content -translate-y-1/2 p-2"
          >
            <AppLoader
              v-if="props.isLoading"
              class="pointer-events-none size-4 text-muted-foreground"
            />

            <ComboboxTrigger
              v-else
              :as-child="true"
              class="outline-none"
            >
              <AppIcon
                class="text-muted-foreground"
                icon="chevronDown"
                size="sm"
              />
            </ComboboxTrigger>
          </div>
        </div>
      </ComboboxAnchor>

      <ComboboxPortal>
        <Transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="isOpen">
            <!-- eslint-disable tailwindcss/no-custom-classname -->
            <ComboboxContent
              :force-mount="true"
              class="combobox-content relative z-popover overflow-hidden rounded-popover border border-solid border-border bg-background shadow-popover-shadow"
              position="popper"
            >
              <!-- eslint-enable tailwindcss/no-custom-classname -->
              <ComboboxViewport class="max-h-[25rem] p-1.5">
                <ComboboxEmpty>
                  <AppText
                    variant="subtext"
                    class="p-2"
                  >
                    {{ props.emptyText ?? t('components.combobox.empty') }}
                  </AppText>
                </ComboboxEmpty>

                <AppComboboxItem
                  v-for="option of props.options"
                  :key="option.label"
                  :value="option.value"
                >
                  {{ option.label }}
                </AppComboboxItem>
              </ComboboxViewport>

              <ComboboxArrow />
            </ComboboxContent>
          </div>
        </Transition>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>

<style>
.combobox-content {
  width: var(--radix-combobox-trigger-width);
  max-height: var(--radix-combobox-content-available-height);
}
</style>
