<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import SelectPlaceholder from '@/packages/@next/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  displayFn,
  modelValue,
} = useInjectSelectContext()

const tagContainerRef = ref<HTMLDivElement | null>(null)
const tagContainerWidth = ref<number>(0)
const tagRef = ref<HTMLDivElement[]>([])
const moreTagsCountRef = ref<HTMLDivElement | null>(null)

let resizeObserver: ResizeObserver | null = null

const modelValueAsArray = computed<AcceptableValue[]>(() => (
  modelValue.value as AcceptableValue[]
))

const filteredModelValue = computed<AcceptableValue[]>(() => {
  if (tagContainerWidth.value === 0) {
    return []
  }

  return modelValueAsArray.value.filter((value, index) => {
    if (tagRef.value[index] === undefined) {
      return false
    }

    const tagWidth = tagRef.value[index].getBoundingClientRect().width
    const moreTagsCountWidth = moreTagsCountRef.value?.getBoundingClientRect().width ?? 0
    const previousTagsWidth = tagRef.value.slice(0, index).reduce((sum, tag) => {
      return sum + tag.getBoundingClientRect().width
    }, 0)

    return tagWidth + previousTagsWidth + moreTagsCountWidth <= tagContainerWidth.value
  })
})

const moreTagsCount = computed<number>(() => {
  return modelValueAsArray.value.length - filteredModelValue.value.length
})

onMounted(() => {
  if (tagContainerRef.value === null) {
    return
  }

  resizeObserver = new ResizeObserver(() => {
    tagContainerWidth.value = tagContainerRef.value?.getBoundingClientRect().width ?? 0
  })

  resizeObserver.observe(tagContainerRef.value)
})
</script>

<template>
  <div
    ref="tagContainerRef"
    class="px-sm flex items-center gap-xs w-full"
  >
    <SelectPlaceholder />

    <!-- Used to calculate the width of the tags -->
    <div
      v-for="(value, valueIndex) of modelValueAsArray"
      :key="valueIndex"
      ref="tagRef"
      class="absolute invisible text-xs px-sm py-xs bg-secondary rounded-md border border-solid border-secondary whitespace-nowrap"
    >
      {{ displayFn(value) }}
    </div>

    <div
      v-for="(value, valueIndex) of filteredModelValue"
      :key="valueIndex"
      class="text-xs px-sm py-xs bg-secondary rounded-md border border-solid border-secondary whitespace-nowrap"
    >
      {{ displayFn(value) }}
    </div>

    <div
      v-if="moreTagsCount > 0"
      ref="moreTagsCountRef"
    >
      <span class="text-sm font-medium text-secondary pl-xs">
        +{{ moreTagsCount }}
      </span>
    </div>
  </div>
</template>
