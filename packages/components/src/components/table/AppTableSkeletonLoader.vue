<script setup lang="ts">
import { computed } from 'vue'

import AppContainer from '@/components/container/AppContainer.vue'
import { useTableStyle } from '@/components/table/table.style'

const props = withDefaults(
  defineProps<{
    /**
   * The number of skeleton rows to show in the table
   */
    numberOfRows?: number
    /**
   * Set to true to hide the table header
   */
    withoutHeader?: boolean
  }>(),
  {
    numberOfRows: 7,
    withoutHeader: false,
  },
)

const tableStyle = useTableStyle()

const skeletonLoaderContainerClasses = computed<string>(() => tableStyle.skeletonLoaderContainer())
const skeletonLoaderContentContainerClasses = computed<string>(() => tableStyle.skeletonLoaderContentContainer())
const skeletonLoaderContentGridClasses = computed<string>(() => tableStyle.skeletonLoaderContentGrid())
const skeletonLoaderContentCellClasses = computed<string>(() => tableStyle.skeletonLoaderContentCell())
const skeletonLoaderContentRowClasses = computed<string>(() => tableStyle.skeletonLoaderContentRow())
const skeletonLoaderHeaderContainerClasses = computed<string>(() => tableStyle.skeletonLoaderHeaderContainer())
const skeletonLoaderHeaderGridClasses = computed<string>(() => tableStyle.skeletonLoaderHeaderGrid())
const skeletonLoaderHeaderRowClasses = computed<string>(() => tableStyle.skeletonLoaderHeaderRow())
</script>

<template>
  <div :class="skeletonLoaderContainerClasses">
    <div
      v-if="!props.withoutHeader"
      :class="skeletonLoaderHeaderContainerClasses"
    >
      <AppContainer :class="skeletonLoaderHeaderGridClasses">
        <div
          v-for="i of 4"
          :key="i"
          :class="skeletonLoaderHeaderRowClasses"
        />
      </AppContainer>
    </div>

    <div :class="skeletonLoaderContentContainerClasses">
      <div
        v-for="i of props.numberOfRows"
        :key="i"
        :class="skeletonLoaderContentRowClasses"
      >
        <AppContainer :class="skeletonLoaderContentGridClasses">
          <div
            v-for="j of 4"
            :key="j"
            :class="skeletonLoaderContentCellClasses"
          />
        </AppContainer>
      </div>

      <div class="" />
    </div>
  </div>
</template>
