<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import LogoWithText from '@/ui/logo/LogoWithText.vue'
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
    v-if="variant === 'icons-only' && !isSidebarOpen"
    justify="center"
    class="h-8"
  >
    <Logo
      :name="props.name"
      :src="props.url"
      alt="Logo"
      size="xs"
    />
  </RowLayout>
  <RowLayout
    v-else
    justify="between"
    class="h-8"
  >
    <LogoWithText
      :name="props.name"
      :src="props.url"
      size="xs"
    />
    <slot name="right" />
  </RowLayout>
</template>
