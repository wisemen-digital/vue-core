<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
import {
  computed,
  onMounted,
  ref,
  watch,
} from 'vue'

import { useKeyboardShortcut } from '../../composables/keyboardShortcut.composable'
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
     * Whether keyboard commands are enabled without the need to focus the dropdown.
     * @default false
     */
    enableGlobalKeyboardShortcuts?: boolean
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
    enableGlobalKeyboardShortcuts: false,
    hasArrow: false,
    inheritTriggerWidth: false,
    offset: 4,
    side: 'bottom',
  },
)

const dropdownMenuTriggerRef = ref<InstanceType<typeof DropdownMenuTrigger> | null>(null)
const isOpen = ref<boolean>(false)

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

onMounted(() => {
  watch(
    () => props.items,
    () => {
      keyboardShortcutsUnbindFns.forEach((unbind) => {
        unbind()
      })

      keyboardShortcutsUnbindFns = []

      optionItems.value.forEach((item) => {
        const { keyboardShortcutKeys } = item

        if (keyboardShortcutKeys === undefined) {
          return
        }

        // Shortcut for when the dropdown trigger is focused.
        const shortcut = useKeyboardShortcut({
          element: dropdownMenuTriggerRef.value?.$el,
          isDisabled: computed<boolean>(() => props.enableGlobalKeyboardShortcuts),
          keys: keyboardShortcutKeys,
          onTrigger: item.onSelect,
        })

        // Shortcut for when the dropdown is open.
        const globalShortcut = useKeyboardShortcut({
          isDisabled: computed<boolean>(() => {
            if (props.enableGlobalKeyboardShortcuts) {
              return false
            }

            return !isOpen.value
          }),
          keys: keyboardShortcutKeys,
          onTrigger: () => {
            item.onSelect()
            isOpen.value = false
          },
        })

        keyboardShortcutsUnbindFns.push(shortcut.unbind, globalShortcut.unbind)
      })
    },
    {
      immediate: true,
    },
  )
})
</script>

<template>
  <DropdownMenuRoot v-model:open="isOpen">
    <DropdownMenuTrigger
      ref="dropdownMenuTriggerRef"
      :as-child="true"
    >
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
