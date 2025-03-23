<script setup lang="ts" generic="TValue extends SelectValueType">
import SelectBase from '@/packages/@next/select/parts/SelectBase.vue'
import SelectContent from '@/packages/@next/select/parts/SelectContent.vue'
import SelectEmpty from '@/packages/@next/select/parts/SelectEmpty.vue'
import SelectIconLeft from '@/packages/@next/select/parts/SelectIconLeft.vue'
import SelectIconRight from '@/packages/@next/select/parts/SelectIconRight.vue'
import SelectLoader from '@/packages/@next/select/parts/SelectLoader.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectFilter from '@/packages/@next/select/parts/SelectSearchInput.vue'
import type { SelectProps, SelectValue as SelectValueType } from '@/packages/@next/select/select.props'

const props = withDefaults(defineProps<SelectProps<TValue>>(), {
  // Vue automatically defaults boolean props to false, even if no value is provided
  remainOpenOnValueChange: null,
})

const modelValue = defineModel<TValue>({
  required: true,
})

const searchTerm = defineModel<string>('searchTerm', {
  required: false,
})
</script>

<template>
  <SelectRoot
    v-bind="props"
    v-model="modelValue"
    v-model:search-term="searchTerm"
  >
    <SelectPopover>
      <template #trigger>
        <slot name="left" />

        <slot name="icon-left">
          <SelectIconLeft />
        </slot>

        <slot name="base">
          <SelectBase />
        </slot>

        <slot name="icon-right">
          <SelectIconRight />
        </slot>

        <slot name="loader">
          <SelectLoader />
        </slot>

        <slot name="right" />
      </template>

      <template #content>
        <SelectFilter v-if="props.filter !== null && props.filter?.isEnabled && !props.filter.isInline" />

        <SelectContent>
          <slot />

          <SelectEmpty />
        </SelectContent>
      </template>
    </SelectPopover>
  </SelectRoot>
</template>
