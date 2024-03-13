<script setup lang="ts">
import { DropdownMenuSubTrigger } from 'radix-vue'

import type { Icon } from '@/icons/icons'

import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = withDefaults(
  defineProps<{
    icon?: Icon | null
  }>(),
  {
    icon: null,
  },
)
</script>

<template>
  <DropdownMenuSubTrigger
    class="group cursor-default overflow-hidden rounded-md p-2 py-1.5 outline-none focus:bg-muted-background"
  >
    <div class="flex items-center justify-between gap-x-3 overflow-hidden">
      <div class="flex items-center gap-x-3 overflow-hidden">
        <AppIcon
          v-if="props.icon !== null"
          :icon="props.icon"
          class="shrink-0 text-muted-foreground group-focus:text-foreground"
          size="default"
        />

        <AppText
          class="truncate group-focus:text-foreground"
          variant="subtext"
        >
          <slot />
        </AppText>
      </div>

      <AppIcon
        class="shrink-0 text-muted-foreground"
        icon="chevronRight"
        size="sm"
      />
    </div>
  </DropdownMenuSubTrigger>
</template>
