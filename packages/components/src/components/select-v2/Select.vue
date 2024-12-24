<script setup lang="ts" generic="TValue extends SelectValueType">
import { useId } from 'vue'

import InputField from '@/components/input-field/InputField.vue'
import type { SelectProps } from '@/components/select/select.props'
import SelectEmpty from '@/components/select-v2/blocks/SelectEmpty.vue'
import SelectFilter from '@/components/select-v2/blocks/SelectFilter.vue'
import SelectList from '@/components/select-v2/blocks/SelectList.vue'
import SelectPopover from '@/components/select-v2/blocks/SelectPopover.vue'
import SelectRoot from '@/components/select-v2/blocks/SelectRoot.vue'
import SelectValue from '@/components/select-v2/blocks/values/SelectValue.vue'
import type { SelectValue as SelectValueType } from '@/types/select.type'

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

const model = defineModel<TValue | null>({
  required: true,
})

const inputId = props.id ?? useId()

// TODO: add slots
// TODO: option styling
// TODO: remove `displayFn`
// TODO: add default `filterFn`
// TODO: add virtualizer
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
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <template #bottom>
      <slot name="bottom" />
    </template>

    <SelectRoot
      v-model="model"
      v-bind="props"
      :style="props.styleConfig"
      class="input-field-label-default input-field-error-default input-field-hint-default"
      @select="emit('select', $event)"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <SelectPopover>
        <template #trigger>
          <SelectValue />
        </template>

        <template #content>
          <SelectFilter />
          <SelectEmpty />
          <SelectList />
        </template>
      </SelectPopover>
    </SelectRoot>
  </InputField>
</template>
