<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import AppDropdownMenuItem from '@/components/dropdown-menu/AppDropdownMenuItem.vue'
import type { AppDropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props.js'
import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'

const props = withDefaults(defineProps<AppDropdownMenuProps>(), {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  offsetInPx: 4,
  popoverWidth: 'available-width',
  side: 'bottom',
})

const style = dropdownMenuStyle()

const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())

const arrowClasses = computed<string>(() => style.arrow())
const arrowBoxClasses = computed<string>(() => style.arrowBox())
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :as-child="true">
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
