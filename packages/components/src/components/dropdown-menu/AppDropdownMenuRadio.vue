<script setup lang="ts">
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
} from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import AppText from '@/components/text/AppText.vue'
import type { DropdownMenuRadio } from '@/types/dropdownMenuItem.type'

const props = defineProps<{
  item: DropdownMenuRadio
}>()
</script>

<template>
  <DropdownMenuRadioItem
    :value="JSON.stringify(props.item.value)"
    class="group flex cursor-default items-center justify-between overflow-hidden rounded-md px-2 py-1.5 outline-none focus:bg-muted-background"
    @select.prevent
  >
    <div class="flex items-center gap-x-3">
      <div class="flex size-4 items-center justify-center">
        <DropdownMenuItemIndicator>
          <AppIcon
            class="text-muted-foreground"
            icon="checkmark"
          />
        </DropdownMenuItemIndicator>
      </div>

      <Component
        :is="props.item.render()"
        v-if="props.item.render !== undefined"
      />

      <AppText
        v-else
        variant="subtext"
        class="truncate text-muted-foreground"
      >
        {{ props.item.label }}
      </AppText>
    </div>

    <AppKeyboardShortcut
      v-if="props.item.keyboardShortcutKeys !== undefined"
      :keys="props.item.keyboardShortcutKeys"
    />
  </DropdownMenuRadioItem>
</template>
