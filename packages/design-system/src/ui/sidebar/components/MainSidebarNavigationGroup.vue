<script setup lang="ts">
import { UIColumnLayout } from '@/ui/column-layout/index'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const props = withDefaults(defineProps<{
  label?: string | null
}>(), {
  label: null,
})

const {
  isSidebarOpen, variant,
} = useMainSidebar()
</script>

<template>
  <div class="w-full">
    <span
      v-if="props.label !== null"
      :class="{
        'opacity-0': variant === 'icons-only' && !isSidebarOpen,
      }"
      class="block px-lg pb-sm text-xs font-medium text-quaternary"
    >
      {{ props.label }}
    </span>

    <UIColumnLayout
      :align="variant === 'icons-only' ? 'center' : 'start'"
      gap="xs"
    >
      <slot />
    </UIColumnLayout>
  </div>
</template>
