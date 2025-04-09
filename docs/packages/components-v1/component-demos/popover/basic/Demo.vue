<script setup lang="ts">
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core'
</script>

<template>
  <VcPopover
    :popover-offset-in-px="25"
    popover-side="top"
  >
    <template #trigger>
      <div
        class="
          border-primary flex cursor-pointer flex-col rounded-md border p-3
          hover:bg-primary-hover
        "
      >
        <p class="text-lg font-semibold">
          Meeting: Sprint planning
        </p>
        <p>1pm - 2pm</p>
      </div>
    </template>

    <template #content>
      <div class="px-4 py-3">
        <h4 class="text-xl font-semibold">
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
