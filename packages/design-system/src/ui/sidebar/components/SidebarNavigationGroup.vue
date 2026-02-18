<script setup lang="ts">
import { UIColumnLayout } from '@/ui/column-layout/index'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

const props = withDefaults(defineProps<{
  label?: string | null
}>(), {
  label: null,
})

const {
  variant,
} = useSidebar()
</script>

<template>
  <div class="w-full">
    <span
      v-if="props.label !== null"
      :class="{
        'opacity-0': variant === 'icons-only',
      }"
      class="block px-lg pb-sm text-xs font-medium text-quaternary"
    >
      {{ props.label }}
    </span>

    <UIColumnLayout gap="xs">
      <slot />
    </UIColumnLayout>
  </div>
</template>
