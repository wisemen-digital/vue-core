<script setup lang="ts">
import { DropdownMenuItem } from 'radix-vue'

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

const emit = defineEmits<{
  select: []
}>()

function onSelect(): void {
  emit('select')
}
</script>

<template>
  <DropdownMenuItem
    class="group cursor-default overflow-hidden rounded-md p-2 outline-none focus:bg-muted-background"
    @select="onSelect"
  >
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
  </DropdownMenuItem>
</template>
