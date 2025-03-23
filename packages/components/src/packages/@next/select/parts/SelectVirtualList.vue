<script setup lang="ts">
import {
  ListboxVirtualizer as RekaListboxVirtualizer,
} from 'reka-ui'
import { type Component, computed } from 'vue'

import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  displayFn,
  virtualList,
  virtualListFilteredItems,
} = useInjectSelectContext()

const itemComponent = computed<Component>(() => virtualList.value?.itemComponent ?? SelectItem)
</script>

<template>
  <RekaListboxVirtualizer
    v-if="virtualList !== null && virtualList.isEnabled"
    v-slot="{ option }"
    :options="virtualListFilteredItems"
    :overscan="10"
    :estimate-size="virtualList.optionHeight ?? 39"
    :text-content="displayFn"
  >
    <Component
      :is="itemComponent"
      :value="option"
    >
      {{ displayFn(option) }}
    </Component>
  </RekaListboxVirtualizer>
</template>
