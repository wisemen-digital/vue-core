<!-- eslint-disable unicorn/consistent-destructuring -->
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
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  isArrowHidden: false,
  enableGlobalKeyboardShortcuts: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 6,
  popoverSide: 'bottom',
  popoverWidth: 'available-width',
  styleConfig: null,
})

defineSlots<{
  /**
   * Can be used to add other content to the bottom of the dropdown.
   */
  'content-bottom': () => null
  /**
   * Can be used to add other content at the top of the dropdown.
   */
  'content-top': () => void
  /**
   * Use this to render your own trigger. Import VcDropdownMenuTrigger for the trigger to work.
   */
  'default': () => void
  /**
   * Can be used to render the label of a group.
   */
  'group-label': ({ label }: { label: any }) => void
  /**
   * Can be used to render the content for each option.
   */
  'option-content': ({ item }: { item: DropdownMenuItemType }) => void
  /**
   * Can be used to render the label of sub menu trigger.
   */
  'sub-menu-trigger-content': ({ label }: { label: any }) => void
  /**
   * The content that will trigger the dropdown.
   */
  'trigger': () => void
}>()

const themeProviderContext = injectThemeProviderContext()

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

  for (const item of items) {
    allItems.push(item)

    if (item.type === 'group' || item.type === 'subMenu') {
      allItems.push(...getAllItems(item.items))
    }
  }

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
      for (const unbind of keyboardShortcutsUnbindFns) {
        unbind()
      }

      keyboardShortcutsUnbindFns = []

      for (const item of itemsWithKeyboardShortcuts.value) {
        const { keyboardKeys } = item

        if (keyboardKeys === undefined) {
          continue
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
      }
    },
    { immediate: true },
  )
})

onBeforeUnmount(() => {
  for (const unbind of keyboardShortcutsUnbindFns) {
    unbind()
  }
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
        :class="[
          dropdownClasses,
          ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
        ]"
        :side-offset="props.popoverOffsetInPx"
        :side="props.popoverSide"
        :align="props.popoverAlign"
        :collision-padding-in-px="props.popoverCollisionPaddingInPx"
        :container-element="props.popoverContainerElement"
        :offset-in-px="props.popoverOffsetInPx"
        :style="props.styleConfig"
        position="popper"
        class="dropdown-menu-default"
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
