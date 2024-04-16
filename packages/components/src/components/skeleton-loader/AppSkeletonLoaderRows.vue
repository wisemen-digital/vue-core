<script setup lang="ts">
import AppSkeletonLoaderRow from './AppSkeletonLoaderRow.vue'

const props = withDefaults(
  defineProps<{
    rows?: number
  }>(),
  {
    rows: 3,
  },
)
</script>

<template>
  <div class="flex flex-col gap-y-4 p-4">
    <AppSkeletonLoaderRow
      v-for="i in props.rows"
      :key="i"
    />
  </div>
</template>
