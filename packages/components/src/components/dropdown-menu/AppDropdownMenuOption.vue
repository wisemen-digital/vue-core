<script setup lang="ts">
import { DropdownMenuItem as RadixDropdownMenuItem } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import AppText from '@/components/text/AppText.vue'
import type { DropdownMenuSelectOption } from '@/types/dropdownMenuItem.type'

const props = defineProps<{
  item: DropdownMenuSelectOption
}>()

const dropdownMenuStyle = useDropdownMenuStyle()

const containerClasses = computed<string>(() => dropdownMenuStyle.itemContainer())
const contentClasses = computed<string>(() => dropdownMenuStyle.itemContent())
const iconClasses = computed<string>(() => dropdownMenuStyle.itemOptionIcon())
const textClasses = computed<string>(() => dropdownMenuStyle.itemText())
</script>

<template>
  <RadixDropdownMenuItem
    :class="containerClasses"
    @select="props.item.onSelect"
  >
    <div :class="contentClasses">
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="iconClasses"
        size="default"
      />

      <Component
        :is="props.item.render()"
        v-if="props.item.render !== undefined"
      />

      <AppText
        v-else
        :class="textClasses"
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
