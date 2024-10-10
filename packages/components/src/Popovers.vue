<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppPopover>
        <template #trigger>
          <AppButton>
            Popover trigger
          </AppButton>
        </template>

        <template #content>
          <div class="h-40 w-80" />
        </template>
      </AppPopover>
    </div>

    <div>
      <AppPopover
        :is-arrow-hidden="true"
        side="right"
        align="start"
      >
        <template #trigger>
          <AppButton>
            Popover trigger
          </AppButton>
        </template>

        <template #content>
          <div class="h-40 w-80" />
        </template>
      </AppPopover>
    </div>
  </div>
</template>
