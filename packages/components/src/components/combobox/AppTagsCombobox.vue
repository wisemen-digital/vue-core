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

import AppComboboxContent from '@/components/combobox/AppComboboxContent.vue'
import AppComboboxEmpty from '@/components/combobox/AppComboboxEmpty.vue'
import AppComboboxItem from '@/components/combobox/AppComboboxItem.vue'
import AppComboboxTrigger from '@/components/combobox/AppComboboxTrigger.vue'
import AppComboboxViewport from '@/components/combobox/AppComboboxViewport.vue'
import { useCombobox } from '@/components/combobox/combobox.composable'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppTagsInputItem from '@/components/tags-input/AppTagsInputItem.vue'
import type { ComboboxItem } from '@/types/comboboxItem.type'
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
  }>(),
  {
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    emptyText: null,
    placeholder: null,
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

const isOpen = ref<boolean>(false)

const tagsInputRootRef = ref<InstanceType<typeof TagsInputRoot> | null>(null)

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
            :class="[
              {
                'border-input-border focus-within:ring-ring': !props.isInvalid,
                'border-destructive focus-within:border-input-border focus-within:ring-destructive': props.isInvalid,
              },
            ]"
            class="flex min-h-10 w-full flex-wrap items-center gap-1 truncate rounded-input border border-solid bg-input p-1.5 ring-offset-background transition-shadow duration-200 placeholder:text-input-placeholder focus-within:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                :class="{
                  'ml-0.5': model.length === 0,
                }"
                :placeholder="props.placeholder ?? undefined"
                class="size-full flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-input-placeholder"
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
                class="pointer-events-none size-4 text-muted-foreground"
              />

              <AppIcon
                v-else
                class="text-muted-foreground"
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
            <AppComboboxContent>
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
