<script setup lang="ts" generic="TValue extends SelectValueType">
import SelectFilter from '@/packages/@next/select/parts/SelectFilter.vue'
import SelectList from '@/packages/@next/select/parts/SelectList.vue'
import SelectListItem from '@/packages/@next/select/parts/SelectListItem.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectValue from '@/packages/@next/select/parts/value/SelectValue.vue'
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
        <SelectValue />
      </template>

      <template #content>
        <SelectFilter v-if="false" />

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
