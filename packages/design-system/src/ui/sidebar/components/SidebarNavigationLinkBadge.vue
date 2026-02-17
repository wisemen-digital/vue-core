<script setup lang="ts">
import { UIBadge } from '@/ui/badge/index'
import { useInjectSidebarNavigationLinkContext } from '@/ui/sidebar/components/sidebarNavigationLink.context'

const props = defineProps<{
  label: string
}>()

const {
  isActive,
} = useInjectSidebarNavigationLinkContext()
</script>

<template>
  <UIBadge
    :label="props.label"
    :color="isActive ? 'brand' : 'gray'"
    size="sm"
  />
</template>
