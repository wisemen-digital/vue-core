<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { DropdownMenuContent as RekaDropdownMenuContent } from 'reka-ui'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  isOpen,
  classConfig,
  customClassConfig,
  popoverAlign,
  popoverCollisionPadding,
  popoverContainerElement,
  popoverOffset,
  popoverSide,
  popoverWidth,
  style,
} = useInjectDropdownMenuContext()
</script>

<template>
  <AnimatePresence>
    <RekaDropdownMenuContent
      v-if="isOpen"
      :force-mount="true"
      :as-child="true"
      :data-content-width="popoverWidth"
      :align="popoverAlign"
      :collision-padding="popoverCollisionPadding"
      :collision-boundary="popoverContainerElement"
      :side="popoverSide"
      :side-offset="popoverOffset"
      :class="style.content({
        class: mergeClasses(customClassConfig.content, classConfig?.content),
      })"
      sticky="always"
    >
      <slot />
    </RekaDropdownMenuContent>
  </AnimatePresence>
</template>
