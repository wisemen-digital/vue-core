<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'

import AppDropdownMenuItem from '@/components/dropdown-menu/AppDropdownMenuItem.vue'
import type { AppDropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props.js'
import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'
import { useKeyboardShortcut } from '@/composables/index.js'
import type {
  DropdownMenuItem,
  DropdownMenuOption,
} from '@/types/dropdownMenu.type.js'

const props = withDefaults(defineProps<AppDropdownMenuProps>(), {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  enableGlobalKeyboardShortcuts: false,
  offsetInPx: 4,
  popoverWidth: 'available-width',
  side: 'bottom',
})

const dropdownMenuTriggerRef = ref<InstanceType<typeof DropdownMenuTrigger> | null>(null)
const isOpen = ref<boolean>(false)

const style = dropdownMenuStyle()

const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())

const arrowClasses = computed<string>(() => style.arrow())
const arrowBoxClasses = computed<string>(() => style.arrowBox())

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

const itemsWithKeyboardShortcuts = computed<DropdownMenuOption[]>(() => {
  return getAllItems(props.items)
    .filter((item) => {
      return item.type === 'option'
    }) as DropdownMenuOption[]
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

      itemsWithKeyboardShortcuts.value.forEach((item) => {
        const { keyboardKeys } = item

        if (item.type !== 'option') {
          return
        }

        if (keyboardKeys === undefined) {
          return
        }

        // Shortcut for when the dropdown trigger is focused.
        const shortcut = useKeyboardShortcut({
          isDisabled: computed<boolean>(() => props.enableGlobalKeyboardShortcuts),
          element: dropdownMenuTriggerRef.value?.$el,
          keys: keyboardKeys,
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
          keys: keyboardKeys,
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

onBeforeUnmount(() => {
  keyboardShortcutsUnbindFns.forEach((unbind) => {
    unbind()
  })
})
</script>

<template>
  <DropdownMenuRoot v-model:open="isOpen">
    <DropdownMenuTrigger
      ref="dropdownMenuTriggerRef"
      :as-child="true"
    >
      <slot name="trigger" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="dropdownClasses"
        :side-offset="props.offsetInPx"
        :side="props.side"
        :align="props.align"
        :collision-padding-in-px="props.collisionPaddingInPx"
        :container-element="props.containerElement"
        :offset-in-px="props.offsetInPx"
        position="popper"
      >
        <!-- Without this relative div, the arrow is a bit glitchy -->
        <div class="relative size-full">
          <!-- Since we can't apply `overflow-hidden` on the parent div, we need another wrapper -->
          <div :class="dropdownContentClasses">
            <slot name="content-top" />

            <AppDropdownMenuItem
              v-for="(item, itemIndex) of props.items"
              :key="itemIndex"
              :item="item"
            >
              <template #option-content="{ item: selectItem }">
                <slot
                  :item="selectItem"
                  name="option-content"
                />
              </template>

              <template #group-label="{ label }">
                <slot
                  :label="label"
                  name="group-label"
                />
              </template>

              <template #sub-menu-trigger-content="{ label }">
                <slot
                  :label="label"
                  name="sub-menu-trigger-content"
                />
              </template>
            </AppDropdownMenuItem>

            <slot name="content-bottom" />
          </div>

          <DropdownMenuArrow
            v-if="!props.isArrowHidden"
            :as-child="true"
          >
            <div :class="arrowBoxClasses">
              <div :class="arrowClasses" />
            </div>
          </DropdownMenuArrow>
        </div>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
