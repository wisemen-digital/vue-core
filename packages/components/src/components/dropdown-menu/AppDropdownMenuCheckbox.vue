<script setup lang="ts">
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
} from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import AppText from '@/components/text/AppText.vue'
import type { DropdownMenuCheckbox } from '@/types/dropdownMenuItem.type'

const props = defineProps<{
  item: DropdownMenuCheckbox
}>()
</script>

<template>
  <DropdownMenuCheckboxItem
    :checked="props.item.isSelected.value"
    class="group flex cursor-default items-center justify-between overflow-hidden rounded-md px-2 py-1.5 outline-none focus:bg-muted-background"
    @select.prevent="props.item.onSelect"
  >
    <!-- Content -->
    <div class="flex items-center gap-x-3">
      <div class="flex size-4 items-center justify-center rounded border border-solid border-transparent duration-100 group-data-[highlighted]:border-input-border group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary">
        <DropdownMenuItemIndicator>
          <AppIcon
            class="text-primary-foreground"
            icon="checkmark"
            size="sm"
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
  </DropdownMenuCheckboxItem>
</template>
