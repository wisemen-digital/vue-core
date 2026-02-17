<script setup lang="ts">
import { UIColumnLayout } from '@/ui/column-layout/index'

const props = withDefaults(defineProps<{
  label?: string | null
}>(), {
  label: null,
})
</script>

<template>
  <div class="w-full">
    <span
      v-if="props.label !== null"
      class="block px-lg pb-sm text-xs font-medium text-quaternary"
    >
      {{ props.label }}
    </span>

    <UIColumnLayout gap="xs">
      <slot />
    </UIColumnLayout>
  </div>
</template>
