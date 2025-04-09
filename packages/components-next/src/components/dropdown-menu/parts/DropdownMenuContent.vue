<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { DropdownMenuContent as RekaDropdownMenuContent } from 'reka-ui'

import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'

const {
  isOpen,
  classConfig,
  customClassConfig,
  popoverAlign,
  popoverAlignOffset,
  popoverAnchorReferenceElement,
  popoverCollisionPadding,
  popoverContainerElement,
  popoverSide,
  popoverSideOffset,
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
      :reference="popoverAnchorReferenceElement ?? undefined"
      :align-offset="popoverAlignOffset"
      :collision-padding="popoverCollisionPadding"
      :collision-boundary="popoverContainerElement"
      :side="popoverSide"
      :side-offset="popoverSideOffset"
      :class="style.content({
        class: mergeClasses(customClassConfig.content, classConfig?.content),
      })"
      sticky="always"
    >
      <slot />
    </RekaDropdownMenuContent>
  </AnimatePresence>
</template>
