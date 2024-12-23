<script setup lang="ts" generic="TValue extends SelectValueType">
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
  errors: null,
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

// TODO: add slots
// TODO: option styling
// TODO: remove `displayFn`
// TODO: add default `filterFn`
// TODO: add virtualizer
</script>

<template>
  <SelectRoot
    v-model="model"
    v-bind="props"
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
</template>
