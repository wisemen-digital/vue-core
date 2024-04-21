<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
import { computed, watch } from 'vue'

import { useKeyboardShortcut } from '@/composables/keyboardShortcut.composable'

import type {
  DropdownMenuItem,
  DropdownMenuOption,
} from '../../types/dropdownMenuItem.type'
import AppDropdownMenuContent from './AppDropdownMenuContent.vue'
import AppDropdownMenuItem from './AppDropdownMenuItem.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The alignment of the dropdown.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * Whether keyboard commands are enabled.
     * @default false
     */
    enableKeyboardShortcuts?: boolean
    /**
     * Whether the dropdown has an arrow.
     * @default false
     */
    hasArrow?: boolean
    /**
     * Whether to inherit the trigger's width.
     */
    inheritTriggerWidth?: boolean
    /**
     * The dropdown items.
     */
    items: DropdownMenuItem[]
    /**
     * The offset of the dropdown.
     * @default 4
     */
    offset?: number
    /**
     * The side of the dropdown.
     * @default 'bottom'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    enableKeyboardShortcuts: false,
    hasArrow: false,
    inheritTriggerWidth: false,
    offset: 4,
    side: 'bottom',
  },
)

function getAllItems(items: DropdownMenuItem[]): DropdownMenuItem[] {
  const allItems: DropdownMenuItem[] = []

  items.forEach((item) => {
    allItems.push(item)

    if (item.type === 'group' || item.type === 'subMenu') {
      allItems.push(...getAllItems(item.items))
    }
  })

  return allItems
}

const optionItems = computed<DropdownMenuOption[]>(() => {
  return getAllItems(props.items).filter(item => item.type === 'option') as DropdownMenuOption[]
})

let keyboardShortcutsUnbindFns: (() => void)[] = []

watch(
  [
    () => props.items,
    () => props.enableKeyboardShortcuts,
  ],
  () => {
    keyboardShortcutsUnbindFns.forEach((unbind) => {
      unbind()
    })

    keyboardShortcutsUnbindFns = []

    if (!props.enableKeyboardShortcuts) {
      return
    }

    optionItems.value.forEach((item) => {
      const { keyboardShortcutKeys } = item

      if (keyboardShortcutKeys === undefined) {
        return
      }

      const shortcut = useKeyboardShortcut({
        keys: keyboardShortcutKeys,
        onTrigger: item.onSelect,
      })

      keyboardShortcutsUnbindFns.push(shortcut.unbind)
    })
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :as-child="true">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <AppDropdownMenuContent
        :align="props.align"
        :side="props.side"
        :side-offset="props.offset"
        :has-arrow="props.hasArrow"
        :inherit-trigger-width="props.inheritTriggerWidth"
      >
        <slot name="header" />

        <AppDropdownMenuItem
          v-for="(item, i) of props.items"
          :key="i"
          :item="item"
        >
          <template #default="{ item: itemValue }">
            <slot
              v-if="itemValue.type === 'option'"
              :item="itemValue"
              name="option"
            />

            <slot
              v-else-if="itemValue.type === 'subMenu'"
              :item="itemValue"
              name="subMenuTrigger"
            />
          </template>
        </AppDropdownMenuItem>

        <slot name="footer" />
      </AppDropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
