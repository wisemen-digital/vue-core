<script setup lang="ts">
import { VcButton, VcPopover } from '@wisemen/vue-core'
</script>

<template>
  <VcPopover
    :popover-offset-in-px="25"
    popover-side="top"
  >
    <template #trigger>
      <div class="flex flex-col border border-primary p-3 rounded-md hover:bg-primary-hover cursor-pointer">
        <p class="font-semibold text-lg">
          Meeting: Sprint planning
        </p>
        <p>1pm - 2pm</p>
      </div>
    </template>

    <template #content>
      <div class="py-3 px-4">
        <h4 class="font-semibold text-xl">
          Meeting: Sprint planning
        </h4>
        <div class="my-4">
          <p>Wednesday, 1pm - 2pm</p>
          <p class="text-sm">
            Weekly on Wednesdays
          </p>
        </div>

        <VcButton>Join meet</VcButton>
      </div>
    </template>
  </VcPopover>
</template>
