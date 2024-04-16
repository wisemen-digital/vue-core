<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxPortal,
} from 'radix-vue'
import {
  computed,
  ref,
} from 'vue'

import { useDebounceSearch } from '../../composables/debounceSearch.composable'
import type { Icon } from '../../icons/icons'
import type { ComboboxItem } from '../../types/comboboxItem.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppComboboxContent from '../combobox/AppComboboxContent.vue'
import AppComboboxEmpty from '../combobox/AppComboboxEmpty.vue'
import AppComboboxItem from '../combobox/AppComboboxItem.vue'
import AppComboboxViewport from '../combobox/AppComboboxViewport.vue'
import { useCombobox } from '../combobox/combobox.composable'
import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'
import AutocompleteInput from './AutocompleteInput.vue'
import AutocompleteRoot from './AutocompleteRoot.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The debounce time in milliseconds for the search input.
     */
    debounce?: number
    /**
     * Display function for the selected value
     */
    displayFn: (value: TValue) => string
    /**
     * The text to display when there are no options.
     * @default t('components.combobox.empty')
     */
    emptyText?: null | string
    /**
     * The icon to display on the left side of the combobox.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The icon to display on the right side of the combobox.
     * @default null
     */
    iconRight?: Icon | null
    /**
     * The html id of the combobox.
     */
    id?: null | string
    /**
     * Whether the combobox is disabled.
     * @default false
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
    isLoading: boolean
    /**
     * The options to display in the combobox.
     */
    items: ComboboxItem<TValue>[]
    /**
     * The value of the combobox.
     */
    modelValue: TValue | null
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    debounce: 300,
    emptyText: null,
    iconLeft: undefined,
    iconRight: undefined,
    id: null,
    isDisabled: false,
    isInvalid: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
  debounceSearch: [search: string]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const isOpen = ref<boolean>(false)
const isFocused = ref<boolean>(false)

const {
  debouncedSearch,
  isDebouncing,
  search,
} = useDebounceSearch(
  (search) => {
    emit(
      'debounceSearch',
      search,
    )
  },
  props.debounce,
)

function onBlur(): void {
  isFocused.value = false

  if (isOpen.value) {
    return
  }

  emit('blur')
}

const isLoading = computed<boolean>(() => props.isLoading || isDebouncing.value)

const { canOpenDropdown } = useCombobox({
  isLoading: computed<boolean>(() => isLoading.value),
  items: computed<ComboboxItem<TValue>[]>(() => props.items),
  search: computed<null | string>(() => search.value),
})

function onFocus(): void {
  isFocused.value = true
}
</script>

<template>
  <div>
    <AutocompleteRoot
      v-model="model"
      v-model:open="isOpen"
      v-model:search-term="search"
      :filter-function="(options) => options"
      :display-value="displayFn"
      :disabled="props.isDisabled"
    >
      <ComboboxAnchor>
        <label
          :class="{
            'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
            'border-destructive [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
            'cursor-not-allowed opacity-50': props.isDisabled,
          }"
          class="flex h-10 items-center rounded-input border border-solid bg-input ring-offset-background duration-200 [&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-offset-2"
        >
          <slot name="left">
            <AppIcon
              v-if="props.iconLeft !== null && props.iconLeft !== undefined"
              :icon="props.iconLeft"
              class="ml-3 text-muted-foreground"
            />
          </slot>

          <AutocompleteInput
            :id="props.id"
            :placeholder="props.placeholder"
            class="block size-full truncate bg-transparent px-3 py-2 text-sm text-input-foreground outline-none duration-200 disabled:cursor-not-allowed"
            @focus="onFocus"
            @blur="onBlur"
            @keydown.enter.prevent
          />

          <AppLoader
            v-if="props.isLoading"
            class="mr-3 size-4 text-muted-foreground"
          />

          <slot
            v-else
            name="right"
          >
            <AppIcon
              v-if="props.iconRight !== null && props.iconRight !== undefined"
              :icon="props.iconRight"
              class="mr-3 text-muted-foreground"
            />
          </slot>
        </label>
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
          <div v-if="isOpen && canOpenDropdown && search.length > 0">
            <AppComboboxContent>
              <AppComboboxViewport>
                <AppComboboxEmpty :empty-text="props.emptyText">
                  <slot name="empty" />
                </AppComboboxEmpty>

                <AppComboboxItem
                  v-for="item of props.items"
                  :key="JSON.stringify(item)"
                  :item="item"
                  :is-multiple="false"
                  :display-fn="props.displayFn"
                >
                  <template #default="{ item: itemValue }">
                    <slot
                      v-if="itemValue.type === 'option'"
                      :value="itemValue.value"
                      name="option"
                    />
                  </template>
                </AppComboboxItem>
              </AppComboboxViewport>

              <ComboboxArrow />
            </AppComboboxContent>
          </div>
        </Transition>
      </ComboboxPortal>
    </AutocompleteRoot>
  </div>
</template>import { useCombobox } from '../combobox/combobox.composable'
