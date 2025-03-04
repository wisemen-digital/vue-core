<script setup lang="ts">
import { computed, useSlots } from 'vue'

import SelectValueBasic from '@/components/select/blocks/values/SelectValueBasic.vue'
import SelectValueMultiple from '@/components/select/blocks/values/SelectValueMultiple.vue'
import { injectSelectContext } from '@/components/select/select.context'

const selectContext = injectSelectContext()

const slots = useSlots()
const hasValueSlot = computed<boolean>(() => slots.value !== undefined)
</script>

<template>
  <SelectValueMultiple v-if="selectContext.isMultiple.value && !hasValueSlot">
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
