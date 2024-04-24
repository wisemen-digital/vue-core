<script setup lang="ts">
import { DropdownMenuItem as RadixDropdownMenuItem } from 'radix-vue'

import type { DropdownMenuOption } from '../../types/dropdownMenuItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppKeyboardShortcut from '../keyboard/AppKeyboardShortcut.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  item: DropdownMenuOption
}>()
</script>

<template>
  <RadixDropdownMenuItem
    class="group flex cursor-default items-center justify-between overflow-hidden rounded-md px-2 py-1.5 outline-none focus:bg-muted-background"
    @select="props.item.onSelect"
  >
    <div class="flex items-center gap-x-3 overflow-hidden">
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        class="shrink-0 text-muted-foreground group-focus:text-foreground"
        size="default"
      />

      <Component
        :is="props.item.render()"
        v-if="props.item.render !== undefined"
      />

      <AppText
        v-else
        class="truncate text-muted-foreground group-focus:text-foreground"
        variant="subtext"
      >
        {{ props.item.label }}
      </AppText>
    </div>

    <AppKeyboardShortcut
      v-if="props.item.keyboardShortcutKeys !== undefined"
      :keys="props.item.keyboardShortcutKeys"
      class="ml-4"
    />
  </RadixDropdownMenuItem>
</template>
