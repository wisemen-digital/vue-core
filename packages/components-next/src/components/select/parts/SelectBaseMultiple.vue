<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import {
  computed,
  onMounted,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import SelectPlaceholder from '@/components/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  displayFn,
  modelValue,
  style,
} = useInjectSelectContext()

const { t } = useI18n()

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

function onRemoveValue(value: AcceptableValue): void {
  modelValue.value = (modelValue.value as AcceptableValue[]).filter((v) => (
    JSON.stringify(v) !== JSON.stringify(value)
  ))
}

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
    :class="style.baseMultiple({
      class: mergeClasses(customClassConfig.baseMultiple, classConfig?.baseMultiple),
    })"
  >
    <SelectPlaceholder />

    <!-- Used to calculate the width of the tags -->
    <div
      v-for="(value, valueIndex) of modelValueAsArray"
      :key="valueIndex"
      ref="tagRef"
      class="absolute invisible flex items-center gap-sm text-sm pl-sm pr-xxs h-8 bg-secondary rounded-md border border-solid border-secondary whitespace-nowrap"
    >
      {{ displayFn(value) }}

      <IconButton
        :label="t('component.select.remove_value')"
        :class-config="{
          root: 'size-6 min-w-auto rounded-sm',
          icon: 'size-3',
        }"
        variant="tertiary"
        icon="close"
      />
    </div>

    <div
      v-for="(value, valueIndex) of filteredModelValue"
      :key="valueIndex"
      class="flex items-center gap-sm text-sm pl-sm pr-xxs h-7 bg-secondary rounded-md border border-solid border-secondary whitespace-nowrap"
    >
      {{ displayFn(value) }}

      <IconButton
        :label="t('component.select.remove_value')"
        :class-config="{
          root: 'size-6 min-w-auto rounded-sm',
          icon: 'size-3',
        }"
        variant="tertiary"
        icon="close"
        class="z-10"
        @click="onRemoveValue(value)"
      />
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
