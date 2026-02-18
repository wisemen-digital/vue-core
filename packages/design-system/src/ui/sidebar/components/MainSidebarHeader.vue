<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import LogoWithText from '@/ui/logo/LogoWithText.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const props = defineProps<{
  name: string
}>()

const {
  variant,
} = useMainSidebar()
</script>

<template>
  <RowLayout
    v-if="variant === 'icons-only'"
    justify="center"
  >
    <Logo
      :name="props.name"
      src="https://picsum.photos/300/300"
      alt="Logo"
      size="xs"
    />
  </RowLayout>
  <RowLayout
    v-else
    justify="between"
  >
    <LogoWithText
      :name="props.name"
      src="https://picsum.photos/300/300"
      size="xs"
    />
    <slot name="right" />
  </RowLayout>
</template>
