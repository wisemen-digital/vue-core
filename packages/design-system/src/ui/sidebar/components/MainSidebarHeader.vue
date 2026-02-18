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
  <Logo
    v-if="variant === 'icons-only'"
    :name="props.name"
    src="https://picsum.photos/300/300"
    alt="Logo"
    size="xs"
  />
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
