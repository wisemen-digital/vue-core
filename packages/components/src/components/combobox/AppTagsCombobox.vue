<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxInput,
  ComboboxPortal,
  ComboboxRoot,
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'
import {
  computed,
  ref,
} from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'

import AppComboboxContent from '@/components/combobox/AppComboboxContent.vue'
import AppComboboxEmpty from '@/components/combobox/AppComboboxEmpty.vue'
import AppComboboxItem from '@/components/combobox/AppComboboxItem.vue'
import AppComboboxTrigger from '@/components/combobox/AppComboboxTrigger.vue'
import AppComboboxViewport from '@/components/combobox/AppComboboxViewport.vue'
import { useCombobox } from '@/components/combobox/combobox.composable'
import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppTagsInputItem from '@/components/tags-input/AppTagsInputItem.vue'
import type { ComboboxItem } from '@/types/comboboxItem.type'
import type { ComboboxProps } from '@/types/comboboxProps.type'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = withDefaults(
  defineProps<{
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
     * @default false
     */
    isLoading?: boolean
    /**
     * Function to use to display the value.
     */
    displayFn: (value: TValue) => string
    /**
     * The text to display when there are no options.
     * @default t('components.combobox.empty')
     */
    emptyText?: null | string
    /**
     * The function to filter the options.
     */
    filterFn: (options: TValue[], searchTerm: string) => TValue[]
    /**
     * The options to display in the combobox.
     */
    items: ComboboxItem<TValue>[]
    /**
     * The placeholder text to display when the combobox is empty.
     * @default null
     */
    placeholder?: null | string
    /**
     * The props to pass to the popover.
     */
    popoverProps?: ComboboxProps['popoverProps']
  }>(),
  {
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    emptyText: null,
    placeholder: null,
    popoverProps: null,
  },
)

const emit = defineEmits<{
  blur: []
}>()

const model = defineModel<TValue[]>({
  required: true,
})

const searchModel = defineModel<null | string>('search', {
  default: '',
  required: false,
})

const comboboxStyle = useComboboxStyle()

const tagsInputContainerClasses = computed<string>(() => comboboxStyle.tagsInputContainer({
  isInvalid: props.isInvalid,
}))

const tagsInputClasses = computed<string>(() => comboboxStyle.tagsInput())
const iconClasses = computed<string>(() => comboboxStyle.icon())
const loaderClasses = computed<string>(() => comboboxStyle.inputLoader())

const isOpen = ref<boolean>(false)

const tagsInputRootRef = ref<ComponentExposed<typeof TagsInputRoot> | null>(null)

const { canOpenDropdown } = useCombobox({
  isLoading: computed<boolean>(() => props.isLoading),
  items: computed<ComboboxItem<TValue>[]>(() => props.items),
  search: computed<null | string>(() => searchModel.value),
})

const search = computed<string | undefined>({
  get: () => searchModel.value ?? undefined,
  set: (value) => {
    searchModel.value = value ?? null
  },
})

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
      v-model:search-term="search"
      :filter-function="(props.filterFn as any)"
      :multiple="true"
      :display-value="displayFn"
      :disabled="props.isDisabled"
      :class="{
        'cursor-not-allowed': props.isDisabled,
      }"
    >
      <ComboboxAnchor>
        <div class="relative">
          <TagsInputRoot
            ref="tagsInputRootRef"
            :model-value="(model as string[])"
            :disabled="props.isDisabled"
            :class="tagsInputContainerClasses"
          >
            <template
              v-for="tag in model"
              :key="displayFn(tag)"
            >
              <slot
                :value="tag"
                name="tag"
              >
                <AppTagsInputItem
                  :value="tag"
                  :is-disabled="props.isDisabled"
                  :display-fn="props.displayFn"
                />
              </slot>
            </template>

            <ComboboxInput :as-child="true">
              <TagsInputInput
                :class="[
                  {
                    'ml-0.5': model.length === 0,
                  },
                  tagsInputClasses,
                ]"
                :placeholder="props.placeholder ?? undefined"
                @blur="onBlur"
                @keydown.enter.prevent
              />
            </ComboboxInput>

            <AppComboboxTrigger
              :is-disabled="props.isDisabled"
              class="!py-2"
            >
              <AppLoader
                v-if="props.isLoading"
                :class="loaderClasses"
              />

              <AppIcon
                v-else
                :class="iconClasses"
                icon="chevronDown"
                size="sm"
              />
            </AppComboboxTrigger>
          </TagsInputRoot>
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
          <div
            v-if="isOpen && canOpenDropdown"
            class="z-popover"
          >
            <AppComboboxContent :popover-props="props.popoverProps">
              <AppComboboxViewport>
                <AppComboboxEmpty :empty-text="props.emptyText">
                  <slot name="empty" />
                </AppComboboxEmpty>

                <AppComboboxItem
                  v-for="item of props.items"
                  :key="JSON.stringify(item)"
                  :item="item"
                  :is-multiple="true"
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
    </ComboboxRoot>
  </div>
</template>
