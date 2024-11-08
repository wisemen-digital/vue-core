<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  SelectIcon,
  SelectPortal,
} from 'radix-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppUnstyledButton from '@/components/button/AppUnstyledButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppSelectContent from '@/components/select/AppSelectContent.vue'
import AppSelectItem from '@/components/select/AppSelectItem.vue'
import AppSelectRoot from '@/components/select/AppSelectRoot.vue'
import AppSelectTrigger from '@/components/select/AppSelectTrigger.vue'
import AppSelectValue from '@/components/select/AppSelectValue.vue'
import { useSelectStyle } from '@/components/select/select.style'
import type { Icon } from '@/icons/icons'
import type {
  AcceptableValue,
  SelectItem,
} from '@/types/selectItem.type'

const props = withDefaults(
  defineProps<{
    /**
     * The id of the select.
     * @default null
     */
    id?: string | null
    /**
     * Whether the select has a clear button.
     * @default false
     */
    hasClearButton?: boolean
    /**
     * Whether the select chevron is hidden.
     */
    isChevronHidden?: boolean
    /**
     * Whether the select is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the select is invalid.
     * @default false
     */
    isInvalid?: boolean
    /**
     * Whether the select is loading.
     */
    isLoading?: boolean
    /**
     * The value can be hidden to provide more customization.
     */
    isValueHidden?: boolean
    /**
     * display function for the selected value
     */
    displayFn: (value: TValue) => string | null
    /**
     * The icon to display on the left side of the select.
     */
    iconLeft?: Icon | null
    /**
     * The items of the select.
     */
    items: SelectItem<TValue>[]
    /**
     * The placeholder of the select.
     */
    placeholder?: string | null
    /**
     * The class to apply to the select trigger.
     */
    selectTriggerClass?: string | null
  }>(),
  {
    id: null,
    hasClearButton: false,
    isChevronHidden: false,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    isValueHidden: false,
    iconLeft: null,
    placeholder: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: TValue | null]
}>()

defineSlots<{
  /** Override the display of the left icon */
  left: () => any
  /** Override the option rendering of the select */
  option: (props: {
    value: TValue
  }) => any
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const { t } = useI18n()

const isOpen = ref<boolean>(false)

function onBlur(): void {
  emit('blur')
}

function onTriggerBlur(): void {
  if (!isOpen.value) {
    onBlur()
  }
}

function onClearButtonClick(): void {
  emit('update:modelValue', null)
}

const selectStyle = useSelectStyle()

const iconLeftClasses = computed<string>(() => selectStyle.iconLeft())
const loaderClasses = computed<string>(() => selectStyle.loader())
const triggerIconClasses = computed<string>(() => selectStyle.triggerIcon())
const popoverContainerClasses = computed<string>(() => selectStyle.popoverContainer())
const clearButtonClasses = computed<string>(() => selectStyle.clearButton())

const isClearButtonVisible = computed<boolean>(() => {
  return model.value !== null && props.hasClearButton
})
</script>

<template>
  <div>
    <AppSelectRoot
      v-model="model"
      v-model:is-open="isOpen"
      :is-disabled="props.isDisabled"
    >
      <div class="relative size-full">
        <AppSelectTrigger
          :id="id"
          :is-disabled="props.isDisabled"
          :is-invalid="props.isInvalid"
          :class="props.selectTriggerClass"
          @blur="onTriggerBlur"
        >
          <slot name="left">
            <AppIcon
              v-if="props.iconLeft !== null"
              :icon="props.iconLeft"
              :class="iconLeftClasses"
            />
          </slot>

          <AppSelectValue
            v-if="!isValueHidden"
            :is-empty="model === null"
            :class="{
              'pr-8': isClearButtonVisible,
            }"
          >
            <template v-if="placeholder !== null && model === null">
              {{ props.placeholder }}
            </template>

            <template v-else-if="model !== null">
              {{ props.displayFn(model) }}
            </template>
          </AppSelectValue>

          <AppLoader
            v-if="props.isLoading"
            :class="loaderClasses"
          />

          <SelectIcon
            v-else-if="!isChevronHidden"
            :as-child="true"
            class="mr-3"
          >
            <AppIcon
              :class="triggerIconClasses"
              icon="chevronDown"
              size="sm"
            />
          </SelectIcon>
        </AppSelectTrigger>

        <AppUnstyledButton
          v-if="isClearButtonVisible"
          :label="t('shared.clear')"
          :class="clearButtonClasses"
          @click="onClearButtonClick"
        >
          <AppIcon icon="close" />
        </AppUnstyledButton>
      </div>

      <SelectPortal>
        <Transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isOpen"
            :class="popoverContainerClasses"
          >
            <AppSelectContent>
              <AppSelectItem
                v-for="(item, i) of props.items"
                :key="i"
                :item="item"
                :display-fn="props.displayFn"
              >
                <template #default="{ item: itemValue }">
                  <slot
                    v-if="itemValue.type === 'option'"
                    :value="itemValue.value"
                    name="option"
                  />
                </template>
              </AppSelectItem>
            </AppSelectContent>
          </div>
        </Transition>
      </SelectPortal>
    </AppSelectRoot>
  </div>
</template>
