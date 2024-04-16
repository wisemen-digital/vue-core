<script setup lang="ts">
import AppContainer from '../container/AppContainer.vue'
import AppIcon from '../icon/AppIcon.vue'
import AppSkeletonLoaderButton from './AppSkeletonLoaderButton.vue'
import AppSkeletonLoaderRow from './AppSkeletonLoaderRow.vue'
</script>

<template>
  <div class="flex w-full flex-1 flex-col bg-background">
    <AppContainer class="pb-2 pt-10">
      <div class="space-y-2">
        <div class="flex items-center gap-x-2">
          <AppSkeletonLoaderRow class="w-32" />

          <AppIcon
            class="text-muted"
            icon="chevronRight"
            size="sm"
          />

          <AppSkeletonLoaderRow class="w-32" />
        </div>

        <div class="flex items-center justify-between">
          <AppSkeletonLoaderRow class="w-60" />
          <AppSkeletonLoaderButton class="w-40" />
        </div>
      </div>
    </AppContainer>
  </div>
</template>
