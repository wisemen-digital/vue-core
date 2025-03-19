<script setup lang="ts" generic="TValue extends SelectValueType">
import SelectContent from '@/packages/@next/select/parts/SelectContent.vue'
import SelectEmpty from '@/packages/@next/select/parts/SelectEmpty.vue'
import SelectGroup from '@/packages/@next/select/parts/SelectGroup.vue'
import SelectGroupLabel from '@/packages/@next/select/parts/SelectGroupLabel.vue'
import SelectIconLeft from '@/packages/@next/select/parts/SelectIconLeft.vue'
import SelectIconRight from '@/packages/@next/select/parts/SelectIconRight.vue'
import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectFilter from '@/packages/@next/select/parts/SelectSearchInput.vue'
import SelectSeparator from '@/packages/@next/select/parts/SelectSeparator.vue'
import SelectValue from '@/packages/@next/select/parts/SelectValue.vue'
import type { SelectProps, SelectValue as SelectValueType } from '@/packages/@next/select/select.props'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  // Vue automatically defaults boolean props to false, even if no value is provided
  remainOpenOnValueChange: null,
})

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

        <SelectContent>
          <SelectItem value="First option">
            First option
          </SelectItem>

          <SelectSeparator />

          <SelectItem value="Second option">
            Second option
          </SelectItem>

          <SelectItem value="Third option">
            Third option
          </SelectItem>

          <SelectGroup>
            <SelectGroupLabel>
              Label
            </SelectGroupLabel>

            <SelectItem value="Fourth option">
              Fourth option
            </SelectItem>

            <SelectItem value="Fifth option">
              Fifth option
            </SelectItem>
          </SelectGroup>

          <SelectEmpty />
        </SelectContent>
      </template>
    </SelectPopover>
  </SelectRoot>
</template>
