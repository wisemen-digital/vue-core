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
import { useRouter } from 'vue-router'

import type { DropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props'
import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import DropdownMenuItem from '@/components/dropdown-menu/DropdownMenuItem.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useKeyboardShortcut } from '@/composables/index'
import type {
  DropdownMenuItem as DropdownMenuItemType,
  DropdownMenuOption,
  DropdownMenuRoute,
} from '@/types/dropdownMenu.type'

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  isArrowHidden: false,
  enableGlobalKeyboardShortcuts: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 4,
  popoverSide: 'bottom',
  popoverWidth: 'available-width',
})

const themeContext = injectThemeProviderContext()

const router = useRouter()

const dropdownMenuTriggerRef = ref<InstanceType<typeof DropdownMenuTrigger> | null>(null)
const isOpen = ref<boolean>(false)

const style = dropdownMenuStyle()

const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())

const arrowClasses = computed<string>(() => style.arrow())
const arrowBoxClasses = computed<string>(() => style.arrowBox())

function getAllItems(items: DropdownMenuItemType[]): DropdownMenuItemType[] {
  const allItems: DropdownMenuItemType[] = []

  items.forEach((item) => {
    allItems.push(item)

    if (item.type === 'group' || item.type === 'subMenu') {
      allItems.push(...getAllItems(item.items))
    }
  })

  return allItems
}

const itemsWithKeyboardShortcuts = computed<(DropdownMenuOption | DropdownMenuRoute)[]>(() => {
  return getAllItems(props.items)
    .filter((item) => {
      return item.type === 'option' || item.type === 'route'
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

        if (keyboardKeys === undefined) {
          return
        }

        // Shortcut for when the dropdown trigger is focused.
        const shortcut = useKeyboardShortcut({
          isDisabled: computed<boolean>(() => props.enableGlobalKeyboardShortcuts),
          element: dropdownMenuTriggerRef.value?.$el,
          keys: keyboardKeys,
          onTrigger: () => {
            if (item.type === 'option') {
              item.onSelect()
            }
            else if (item.type === 'route') {
              router.push(item.to)
            }
          },
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
            isOpen.value = false

            if (item.type === 'option') {
              item.onSelect()
            }
            else if (item.type === 'route') {
              router.push(item.to)
            }
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
    <slot>
      <DropdownMenuTrigger
        ref="dropdownMenuTriggerRef"
        :as-child="true"
      >
        <slot name="trigger" />
      </DropdownMenuTrigger>
    </slot>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="[dropdownClasses, themeContext.theme.value]"
        :side-offset="props.popoverOffsetInPx"
        :side="props.popoverSide"
        :align="props.popoverAlign"
        :collision-padding-in-px="props.popoverCollisionPaddingInPx"
        :container-element="props.popoverContainerElement"
        :offset-in-px="props.popoverOffsetInPx"
        position="popper"
        class="dropdown-menu-variant-default"
      >
        <!-- Without this relative div, the arrow is a bit glitchy -->
        <div class="relative size-full">
          <!-- Since we can't ly `overflow-hidden` on the parent div, we need another wrer -->
          <div :class="dropdownContentClasses">
            <slot name="content-top" />

            <DropdownMenuItem
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
            </DropdownMenuItem>

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
