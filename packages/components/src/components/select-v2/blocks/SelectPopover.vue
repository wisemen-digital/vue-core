<script setup lang="ts">
import Popover from '@/components/popover/Popover.vue'
import PopoverAnchor from '@/components/popover/PopoverAnchor.vue'
import { injectSelectContext } from '@/components/select-v2/select.context'
import { ThemeUtil } from '@/utils/theme.util'

const selectContext = injectSelectContext()
</script>

<template>
  <Popover
    v-model:is-open="selectContext.isOpen.value"
    :popover-align="selectContext.popoverAlign.value"
    :is-arrow-hidden="!selectContext.isArrowVisible.value"
    :popover-collision-padding-in-px="selectContext.popoverCollisionPaddingInPx.value"
    :popover-container-element="selectContext.popoverContainerElement.value"
    :popover-offset-in-px="selectContext.popoverOffsetInPx.value"
    :popover-width="selectContext.popoverWidth.value"
    :popover-side="selectContext.popoverSide.value"
    :style-config="{
      '--popover-max-width-default': 'var(--select-dropdown-max-width-default)',
      '--popover-min-width-default': 'var(--select-dropdown-min-width-default)',
      ...selectContext.styleConfig.value ?? {},
    }"
  >
    <PopoverAnchor>
      <slot name="trigger" />
    </PopoverAnchor>

    <template #content>
      <div
        :class="ThemeUtil.getClasses(selectContext.theme.value, selectContext.darkModeValue.value)"
        class="select-default"
      >
        <slot name="content" />
      </div>
    </template>
  </Popover>
</template>
