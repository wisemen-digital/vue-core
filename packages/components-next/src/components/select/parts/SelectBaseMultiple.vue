<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import {
  RovingFocusGroup as RekaRovingFocusGroup,
  RovingFocusItem as RekaRovingFocusItem,
} from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
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

const tagContainerRef = ref<InstanceType<typeof RekaRovingFocusGroup> | null>(null)
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

    // TODO: this 10 is a hack, find a better way to calculate the width of the tags
    return tagWidth + previousTagsWidth + moreTagsCountWidth + 10 <= tagContainerWidth.value
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
    tagContainerWidth.value = tagContainerRef.value?.$el.getBoundingClientRect().width ?? 0
  })

  resizeObserver.observe(tagContainerRef.value.$el)
})

onBeforeUnmount(() => {
  if (resizeObserver === null || tagContainerRef.value === null) {
    return
  }

  resizeObserver.unobserve(tagContainerRef.value.$el)
  resizeObserver.disconnect()
})
</script>

<template>
  <RekaRovingFocusGroup
    ref="tagContainerRef"
    :class="style.baseMultiple({
      class: mergeClasses(customClassConfig.baseMultiple, classConfig?.baseMultiple),
    })"
    orientation="horizontal"
  >
    <SelectPlaceholder class="pl-md" />

    <!-- Used to calculate the width of the tags -->
    <div
      :class="style.baseMultiple({
        class: mergeClasses(customClassConfig.baseMultiple, classConfig?.baseMultiple),
      })"
      aria-hidden="true"
      class="invisible absolute"
    >
      <div
        v-for="(value, valueIndex) of modelValueAsArray"
        :key="valueIndex"
        ref="tagRef"
        class="
          gap-sm pl-sm pr-xxs bg-secondary border-secondary flex h-7
          items-center rounded-md border border-solid text-sm whitespace-nowrap
        "
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
    </div>

    <div
      v-for="(value, valueIndex) of filteredModelValue"
      :key="valueIndex"
      class="
        gap-sm pl-sm pr-xxs bg-secondary border-secondary flex h-7 items-center
        rounded-md border border-solid text-sm whitespace-nowrap
      "
    >
      {{ displayFn(value) }}

      <RekaRovingFocusItem :as-child="true">
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
      </RekaRovingFocusItem>
    </div>

    <div
      v-if="moreTagsCount > 0"
      ref="moreTagsCountRef"
    >
      <span class="text-secondary pl-xs text-sm font-medium">
        +{{ moreTagsCount }}
      </span>
    </div>
  </RekaRovingFocusGroup>
</template>
