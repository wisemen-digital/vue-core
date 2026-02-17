<script setup lang="ts">
import { computed } from 'vue'

import { useProvideSidebarNavigationLinkContext } from '@/ui/sidebar/components/sidebarNavigationLink.context'

const props = defineProps<{
  isActive: boolean
}>()

useProvideSidebarNavigationLinkContext({
  isActive: computed<boolean>(() => props.isActive),
})
</script>

<template>
  <slot />
</template>
