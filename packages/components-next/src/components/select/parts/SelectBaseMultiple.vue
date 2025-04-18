<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

import { mergeClasses } from '@/class-variant/customClassVariants'
import Badge from '@/components/badge/Badge.vue'
import SelectPlaceholder from '@/components/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/components/select/select.context'

const {
  classConfig,
  customClassConfig,
  displayFn,
  modelValue,
  style,
} = useInjectSelectContext()

const tagContainerRef = ref<HTMLElement | null>(null)
const tagContainerWidth = ref<number>(0)
const tagRef = ref<InstanceType<typeof Badge>[]>([])
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

    const tagWidth = tagRef.value[index].$el.getBoundingClientRect().width
    const moreTagsCountWidth = moreTagsCountRef.value?.getBoundingClientRect().width ?? 0
    const previousTagsWidth = tagRef.value.slice(0, index).reduce((sum, tag) => {
      return sum + tag.$el.getBoundingClientRect().width
    }, 0)

    // TODO: this 10 is a hack, find a better way to calculate the width of the tags
    return tagWidth + previousTagsWidth + moreTagsCountWidth + 10 <= tagContainerWidth.value
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
    tagContainerWidth.value = tagContainerRef.value!.getBoundingClientRect().width ?? 0
  })

  resizeObserver.observe(tagContainerRef.value)
})

onBeforeUnmount(() => {
  if (resizeObserver === null || tagContainerRef.value === null) {
    return
  }

  resizeObserver.unobserve(tagContainerRef.value)
  resizeObserver.disconnect()
})
</script>

<template>
  <div
    ref="tagContainerRef"
    :class="style.baseMultiple({
      class: mergeClasses(customClassConfig.baseMultiple, classConfig?.baseMultiple),
    })"
  >
    <SelectPlaceholder class="pl-sm" />

    <!-- Used to calculate the width of the tags -->
    <div
      :class="style.baseMultiple({
        class: mergeClasses(customClassConfig.baseMultiple, classConfig?.baseMultiple),
      })"
      aria-hidden="true"
      class="invisible absolute"
    >
      <Badge
        v-for="(value, valueIndex) of modelValueAsArray"
        :key="valueIndex"
        ref="tagRef"
        :class-config="{ root: 'rounded-md' }"
        color="gray"
        variant="translucent"
      >
        <div class="whitespace-nowrap">
          {{ displayFn(value) }}
        </div>
      </Badge>
    </div>

    <Badge
      v-for="(value, valueIndex) of filteredModelValue"
      :key="valueIndex"
      :class-config="{ root: 'rounded-md' }"
      color="gray"
      variant="translucent"
    >
      <div class="whitespace-nowrap">
        {{ displayFn(value) }}
      </div>
    </Badge>

    <div
      v-if="moreTagsCount > 0"
      ref="moreTagsCountRef"
    >
      <span class="text-secondary pl-xs text-sm font-medium">
        +{{ moreTagsCount }}
      </span>
    </div>
  </div>
</template>
