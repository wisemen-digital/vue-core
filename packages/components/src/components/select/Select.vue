<script setup lang="ts" generic="TValue extends SelectValueType">
import {
  computed,
  useAttrs,
  useId,
  useSlots,
} from 'vue'

import InputField from '@/components/input-field/InputField.vue'
import SelectEmpty from '@/components/select/blocks/SelectEmpty.vue'
import SelectFilter from '@/components/select/blocks/SelectFilter.vue'
import SelectList from '@/components/select/blocks/SelectList.vue'
import SelectPopover from '@/components/select/blocks/SelectPopover.vue'
import SelectRoot from '@/components/select/blocks/SelectRoot.vue'
import SelectValue from '@/components/select/blocks/values/SelectValue.vue'
import type { SelectProps } from '@/components/select/select.props'
import type {
  SelectItem,
  SelectOption,
  SelectValue as SelectValueType,
} from '@/types/select.type'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isOpenControlled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
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
  select: [value: TValue]
}>()

defineSlots<{
  /**
   * Can be used to render a custom hint and error message.
   */
  'bottom': ({ errors, hint }: { errors: string[], hint: string | null }) => void
  /**
   * Can be used to add other content to the top of the dropdown.
   */
  'content-bottom': () => null
  /**
   * Can be used to add other content to the top of the dropdown.
   */
  'content-top': () => null
  /**
   * Can be used to render content when no results are found.
   */
  'empty': ({ searchTerm }: { searchTerm: string }) => void
  /**
   * Can be used to render a custom error message.
   */
  'error': ({ errors }: { errors: string[] }) => void
  /**
   * Can be used to render the filter. Only rendered when `filterFn` is provided.
   */
  'filter': () => null
  /**
   * Can be used to render the label of a group.
   */
  'group-label': ({ label }: { label: any }) => void
  /**
   * Can be used to render a custom hint message.
   */
  'hint': ({ hint }: { hint: string | null }) => void
  /**
   * The icon to the left of the input.
   */
  'icon-left': () => null
  /**
   * The icon to the right of the input.
   */
  'icon-right': () => null
  /**
   * Can be used to render a custom label.
   */
  'label': ({ label }: { label: string | null }) => void
  /**
   * The content to display on the left side.
   */
  'left': () => null
  /**
   * Can be used to render a custom loader.
   */
  'loader': () => null
  /**
   * Can be used to replace the entire option with custom content.
   */
  'option': ({ item }: { item: SelectItem<TValue> }) => void
  /**
   * Can be used to render the content for each option.
   */
  'option-content': ({ item }: { item: SelectOption<TValue> }) => void
  /**
   * Can be used to render a custom indicator for each option.
   */
  'option-indicator': ({ item }: { item: SelectItem<TValue> }) => void
  /**
   * The content to display on the right side.
   */
  'right': () => null
  /**
   * Can be used to render the separator.
   */
  'separator': () => null
  /**
   * Only when you want to select multiple values: use to render a custom tag per selected item.
   */
  'tag': ({ value }: { value: TValue }) => void
  /**
   * Can be used to render the selected value(s).
   */
  'value': ({ value }: { value: TValue }) => void
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const attrs = useAttrs()
const slots = useSlots()

const inputId = props.id ?? useId()

const hasValueSlot = computed<boolean>(() => slots.value !== undefined)
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
    <template #label>
      <slot
        :label="props.label"
        name="label"
      />
    </template>

    <template #error>
      <slot
        :errors="props.errors"
        name="error"
      />
    </template>

    <template #hint>
      <slot
        :hint="props.hint"
        name="hint"
      />
    </template>

    <template #bottom>
      <slot
        :errors="props.errors"
        :hint="props.hint"
        name="bottom"
      />
    </template>

    <SelectRoot
      v-model="model"
      v-bind="{
        ...props,
        ...attrs,
      }"
      :style="props.styleConfig"
      @select="emit('select', $event)"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <SelectPopover>
        <template #trigger>
          <SelectValue :has-value-slot="hasValueSlot">
            <template #value="{ value }">
              <slot
                :value="(value as any)"
                name="value"
              />
            </template>

            <template #tag="{ value }">
              <slot
                :value="(value as any)"
                name="tag"
              />
            </template>

            <template #loader>
              <slot name="loader" />
            </template>

            <template #left>
              <slot name="left" />
            </template>

            <template #icon-left>
              <slot name="icon-left" />
            </template>

            <template #icon-right>
              <slot name="icon-right" />
            </template>

            <template #right>
              <slot name="right" />
            </template>
          </SelectValue>
        </template>

        <template #content>
          <slot name="content-top" />

          <slot name="filter">
            <SelectFilter />
          </slot>

          <SelectEmpty v-slot="{ searchTerm }">
            <slot
              :search-term="searchTerm"
              name="empty"
            />
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

          <slot name="content-bottom" />
        </template>
      </SelectPopover>
    </SelectRoot>
  </InputField>
</template>
