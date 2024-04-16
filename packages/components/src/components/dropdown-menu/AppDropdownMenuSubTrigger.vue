<script setup lang="ts">
import { DropdownMenuSubTrigger } from 'radix-vue'

import type { DropdownMenuSubMenu } from '../../types/dropdownMenuItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  item: DropdownMenuSubMenu
}>()
</script>

<template>
  <DropdownMenuSubTrigger class="group cursor-default overflow-hidden rounded-md p-2 py-1.5 outline-none focus:bg-muted-background">
    <div class="flex items-center justify-between gap-x-3 overflow-hidden">
      <div class="flex items-center gap-x-3 overflow-hidden">
        <AppIcon
          v-if="props.item.icon !== undefined"
          :icon="props.item.icon"
          class="shrink-0 text-muted-foreground group-focus:text-foreground"
          size="default"
        />

        <slot :item="props.item">
          <AppText
            class="truncate text-muted-foreground group-focus:text-foreground"
            variant="subtext"
          >
            {{ props.item.label }}
          </AppText>
        </slot>
      </div>

      <AppIcon
        class="ml-4 shrink-0 text-muted-foreground"
        icon="chevronRight"
        size="sm"
      />
    </div>
  </DropdownMenuSubTrigger>
</template>
