<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const props = defineProps<{
  name: string
  url: string
}>()

const {
  isSidebarOpen, variant,
} = useMainSidebar()
</script>

<template>
  <RowLayout
    justify="between"
    class="h-7"
  >
    <RowLayout class="p-0.5">
      <Logo
        :src="props.url"
        alt="Logo"
        size="xs"
      />
      <span
        v-if="variant !== 'icons-only' || isSidebarOpen"
        class="text-sm font-semibold text-secondary"
      >
        {{ props.name }}
      </span>
    </RowLayout>
    <slot
      v-if="variant !== 'icons-only' || isSidebarOpen"
      name="right"
    />
  </RowLayout>
</template>
