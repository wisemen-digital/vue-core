<script setup lang="ts">
import { DropdownMenuItem as RadixDropdownMenuItem } from 'radix-vue'

import type { DropdownMenuOption } from '../../types/dropdownMenuItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppKeyboardCommand from '../keyboard/AppKeyboardCommand.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  item: DropdownMenuOption
}>()
</script>

<template>
  <RadixDropdownMenuItem
    class="group flex cursor-default items-center justify-between overflow-hidden rounded-md p-2 outline-none focus:bg-muted-background"
    @select="props.item.onSelect"
  >
    <slot>
      <div class="flex items-center gap-x-3 overflow-hidden">
        <AppIcon
          v-if="props.item.icon !== undefined"
          :icon="props.item.icon"
          class="shrink-0 text-muted-foreground group-focus:text-foreground"
          size="default"
        />

        <AppText
          class="truncate text-muted-foreground group-focus:text-foreground"
          variant="subtext"
        >
          {{ props.item.label }}
        </AppText>
      </div>
    </slot>

    <AppKeyboardCommand
      v-if="props.item.command !== undefined"
      :keys="props.item.command.keys"
      :command-type="props.item.command.type"
      class="ml-4"
    />
  </RadixDropdownMenuItem>
</template>
