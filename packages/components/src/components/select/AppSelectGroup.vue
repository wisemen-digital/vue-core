<script setup lang="ts">
import { SelectGroup, SelectLabel } from 'radix-vue'

import AppText from '../text/AppText.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <SelectGroup>
    <SelectLabel class="px-2 py-1">
      <AppText
        variant="caption"
        class="text-secondary-foreground"
      >
        {{ props.label }}
      </AppText>
    </SelectLabel>

    <div class="pl-2">
      <slot />
    </div>
  </SelectGroup>
</template>
