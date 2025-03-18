<script setup lang="ts" generic="TValue extends SelectValue">
import SelectFilter from '@/packages/@next/select/parts/SelectFilter.vue'
import SelectList from '@/packages/@next/select/parts/SelectList.vue'
import SelectListItem from '@/packages/@next/select/parts/SelectListItem.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectInlineFilter from '@/packages/@next/select/parts/value/SelectInlineFilter.vue'
import SelectTagsValue from '@/packages/@next/select/parts/value/SelectTagsValue.vue'
import SelectTextValue from '@/packages/@next/select/parts/value/SelectTextValue.vue'
import type { SelectProps, SelectValue } from '@/packages/@next/select/select.props'

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
        <SelectInlineFilter v-if="false" />
        <SelectTextValue v-if="true" />
        <SelectTagsValue v-if="false" />
      </template>

      <template #content>
        <SelectFilter v-if="false" />

        <SelectList>
          <SelectListItem value="1">
            First option
          </SelectListItem>

          <SelectListItem value="2">
            Second option
          </SelectListItem>

          <SelectListItem value="3">
            Third option
          </SelectListItem>

          <SelectListItem value="4">
            Fourth option
          </SelectListItem>

          <SelectListItem value="5">
            Fifth option
          </SelectListItem>
        </SelectList>
      </template>
    </SelectPopover>
  </SelectRoot>
</template>
