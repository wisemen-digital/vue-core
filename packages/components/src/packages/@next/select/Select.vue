<script setup lang="ts" generic="TValue extends SelectValueType">
import SelectFilter from '@/packages/@next/select/parts/SelectSearchInput.vue'
import SelectIconLeft from '@/packages/@next/select/parts/SelectIconLeft.vue'
import SelectIconRight from '@/packages/@next/select/parts/SelectIconRight.vue'
import SelectListItem from '@/packages/@next/select/parts/SelectItem.vue'
import SelectList from '@/packages/@next/select/parts/SelectList.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectValue from '@/packages/@next/select/parts/SelectValue.vue'
import type { SelectProps, SelectValue as SelectValueType } from '@/packages/@next/select/select.props'

const props = defineProps<SelectProps<TValue>>()

const modelValue = defineModel<TValue>({
  required: true,
})
</script>

<template>
  <SelectRoot
    v-bind="props"
    v-model="modelValue"
  >
    <SelectPopover>
      <template #trigger>
        <SelectIconLeft />
        <SelectValue />
        <SelectIconRight />
      </template>

      <template #content>
        <SelectFilter v-if="props.filter !== null && props.filter?.isEnabled && !props.filter.isInline" />

        <SelectList>
          <SelectListItem value="First option">
            First option
          </SelectListItem>

          <SelectListItem value="Second option">
            Second option
          </SelectListItem>

          <SelectListItem value="Third option">
            Third option
          </SelectListItem>

          <SelectListItem value="Fourth option">
            Fourth option
          </SelectListItem>

          <SelectListItem value="Fifth option">
            Fifth option
          </SelectListItem>
        </SelectList>
      </template>
    </SelectPopover>
  </SelectRoot>
</template>
