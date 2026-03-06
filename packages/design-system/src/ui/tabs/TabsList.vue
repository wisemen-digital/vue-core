<script setup lang="ts">
import {
  TabsIndicator as RekaTabsIndicator,
  TabsList as RekaTabsList,
} from 'reka-ui'
import {
  onMounted,
  ref,
} from 'vue'

import { UIAdaptiveContent } from '@/ui/adaptive-content/index'
import { useInjectTabsContext } from '@/ui/tabs/tabs.context'
import TabsAdaptiveContentDropdown from '@/ui/tabs/TabsAdaptiveContentDropdown.vue'

const scrollContainerRef = ref<HTMLElement | null>(null)

const {
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isAdaptive,
  isScrolledHorizontally,
  orientation,
  scrollToLeft,
  scrollToRight,
  setScrollContainerRef,
  tabs,
  variants,
} = useInjectTabsContext()

onMounted(() => {
  if (scrollContainerRef.value === null) {
    throw new Error('scrollContainerRef is null')
  }

  setScrollContainerRef(scrollContainerRef.value)
})
</script>

<template>
  <div :class="variants.base()">
    <div
      v-if="!isAdaptive && isScrolledHorizontally && hasHorizontalOverflow && orientation === 'horizontal'"
      class="
        absolute top-0 left-0 z-20 flex h-full items-center bg-linear-to-r
        from-primary to-transparent px-md
      "
    >
      <button
        class="
          flex size-7 items-center justify-center rounded-md bg-primary
          text-secondary
          hover:bg-primary-hover
        "
        tabindex="-1"
        type="button"
        aria-label="Scroll left"
        @click="scrollToLeft"
      >
        <svg
          aria-hidden="true"
          class="size-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
    </div>

    <div
      ref="scrollContainerRef"
      :class="variants.scrollContainer()"
      :data-orientation="orientation"
    >
      <UIAdaptiveContent v-if="isAdaptive">
        <template #default="{ hiddenBlockCount }">
          <RekaTabsList
            :class="variants.list()"
            class="overflow-hidden"
          >
            <slot />

            <RekaTabsIndicator :class="variants.indicator()" />
            <TabsAdaptiveContentDropdown
              :hidden-tabs-count="hiddenBlockCount"
              :tabs="tabs"
            />
          </RekaTabsList>
        </template>
      </UIAdaptiveContent>

      <RekaTabsList
        v-else
        :class="variants.list()"
      >
        <slot />

        <RekaTabsIndicator :class="variants.indicator()" />
      </RekaTabsList>
    </div>

    <div
      v-if="!isAdaptive && !hasReachedHorizontalEnd && hasHorizontalOverflow && orientation === 'horizontal'"
      class="
        absolute top-0 right-0 z-20 flex h-full items-center bg-linear-to-l
        from-primary to-transparent px-md
      "
    >
      <button
        class="
          flex size-7 items-center justify-center rounded-md bg-primary
          text-secondary
          hover:bg-primary-hover
        "
        tabindex="-1"
        type="button"
        aria-label="Scroll right"
        @click="scrollToRight"
      >
        <svg
          aria-hidden="true"
          class="size-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>
