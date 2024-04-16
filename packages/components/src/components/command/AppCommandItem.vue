<script setup lang="ts"  generic="TValue extends AcceptableValue">
import { ComboboxItem } from 'radix-vue'

import type { CommandItem } from '@/types/commandItem.type'
import type { AcceptableValue } from '@/types/selectItem.type'

import AppIcon from '../icon/AppIcon.vue'

const props = defineProps<{
  item: CommandItem
}>()
</script>

<template>
  <ComboboxItem
    :value="props.item.value"
    class="relative flex cursor-pointer items-center gap-x-3 rounded-lg p-3 text-muted-foreground outline-none duration-100 data-[highlighted]:bg-muted-background data-[highlighted]:text-foreground"
  >
    <AppIcon
      v-if="props.item.icon !== undefined"
      :icon="props.item.icon"
    />

    <img
      v-if="props.item.image !== undefined"
      :src="props.item.image"
      class="size-5 rounded"
      alt=""
    >

    <span>
      {{ props.item.label }}
    </span>
  </ComboboxItem>
</template>
