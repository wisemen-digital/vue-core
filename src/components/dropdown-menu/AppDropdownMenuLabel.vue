<script setup lang="ts">
import { DropdownMenuLabel } from 'radix-vue'

import AppText from '../text/AppText.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <DropdownMenuLabel class="px-2 py-1 text-muted-foreground">
    <AppText variant="subtext">
      {{ props.label }}
    </AppText>
  </DropdownMenuLabel>
</template>
