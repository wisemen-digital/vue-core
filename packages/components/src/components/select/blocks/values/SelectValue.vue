<script setup lang="ts">
import SelectValueBasic from '@/components/select/blocks/values/SelectValueBasic.vue'
import SelectValueMultiple from '@/components/select/blocks/values/SelectValueMultiple.vue'
import { injectSelectContext } from '@/components/select/select.context'

const props = withDefaults(defineProps<{
  hasValueSlot?: boolean
}>(), {
  hasValueSlot: false,
})

const selectContext = injectSelectContext()
</script>

<template>
  <SelectValueMultiple v-if="selectContext.isMultiple.value && !props.hasValueSlot">
    <template #tag="{ value }">
      <slot
        :value="value"
        name="tag"
      />
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

    <template #loader>
      <slot name="loader" />
    </template>

    <template #right>
      <slot name="right" />
    </template>
  </SelectValueMultiple>

  <SelectValueBasic v-else>
    <template #left>
      <slot name="left" />
    </template>

    <template #icon-left>
      <slot name="icon-left" />
    </template>

    <template #icon-right>
      <slot name="icon-right" />
    </template>

    <template #value="{ value }">
      <slot
        :value="value"
        name="value"
      />
    </template>

    <template #loader>
      <slot name="loader" />
    </template>

    <template #right>
      <slot name="right" />
    </template>
  </SelectValueBasic>
</template>
