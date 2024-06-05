<script setup lang="ts"  generic="TValue extends AcceptableValue">
import { ComboboxItem } from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import type { CommandItem } from '@/types/commandItem.type'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = defineProps<{
  item: CommandItem
}>()
</script>

<template>
  <ComboboxItem
    :value="props.item.label"
    class="relative flex cursor-pointer items-center gap-x-3 rounded-lg p-3.5 text-muted-foreground outline-none duration-100 data-[highlighted]:bg-muted-background data-[highlighted]:text-foreground"
    @select="props.item.onSelect"
  >
    <AppIcon
      v-if="props.item.icon !== undefined"
      :icon="props.item.icon"
      class="text-muted-foreground"
    />

    <img
      v-if="props.item.image !== undefined"
      :src="props.item.image"
      class="size-5 rounded"
      alt=""
    >

    <AppText
      variant="subtext"
      class="text-muted-foreground"
    >
      {{ props.item.label }}
    </AppText>
  </ComboboxItem>
</template>
