<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppTooltip>
        <template #trigger>
          <AppButton>
            Tooltip trigger
          </AppButton>
        </template>

        <template #content>
          <div class="p-2 text-sm">
            This is a tooltip.
          </div>
        </template>
      </AppTooltip>
    </div>
  </div>
</template>
