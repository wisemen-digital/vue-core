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
      <AppText variant="subtext">
        {{ props.label }}
      </AppText>
    </SelectLabel>

    <slot />
  </SelectGroup>
</template>
