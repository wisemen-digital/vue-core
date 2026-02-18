<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import LogoWithText from '@/ui/logo/LogoWithText.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

const props = defineProps<{
  name: string
}>()

const {
  variant,
} = useSidebar()
</script>

<template>
  <RowLayout
    v-if="variant === 'default'"

    justify="between"
  >
    <LogoWithText
      :name="props.name"
      src="https://picsum.photos/300/300"
      size="xs"
    />
    <slot name="right" />
  </RowLayout>
  <Logo
    v-else
    :name="props.name"
    src="https://picsum.photos/300/300"
    alt="Logo"
    size="xs"
  />
</template>
