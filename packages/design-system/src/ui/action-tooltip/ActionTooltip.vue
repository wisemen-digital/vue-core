<script setup lang="ts">
import KeyboardShortcut from '@/ui/keyboard-shortcut/KeyboardShortcut.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import type { TooltipProps } from '@/ui/tooltip/tooltip.props'
import Tooltip from '@/ui/tooltip/Tooltip.vue'
import TooltipContent from '@/ui/tooltip/TooltipContent.vue'
import TooltipText from '@/ui/tooltip/TooltipText.vue'

interface Props extends Pick<TooltipProps, 'disableCloseOnTriggerClick' | 'isDisabled' | 'popoverAlign' | 'popoverSide'> {
  keyboardShortcut?: string | null
  label?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  disableCloseOnTriggerClick: false,
  keyboardShortcut: null,
  keyboardShortcutKeys: null,
  label: null,
  popoverAlign: 'center',
  popoverSide: 'top',
})
</script>

<template>
  <Tooltip
    :is-disabled="props.isDisabled"
    :popover-side="props.popoverSide ?? undefined"
    :disable-hoverable-content="true"
    :popover-side-offset="4"
    :popover-align="props.popoverAlign"
    :disable-close-on-trigger-click="props.disableCloseOnTriggerClick"
  >
    <template #trigger>
      <slot />
    </template>

    <template #content>
      <TooltipContent>
        <RowLayout gap="sm">
          <TooltipText
            v-if="props.label !== null"
            :text="props.label"
          />

          <KeyboardShortcut
            v-if="props.keyboardShortcut !== null"
            :keyboard-shortcut="props.keyboardShortcut"
          />
        </RowLayout>
      </TooltipContent>
    </template>
  </Tooltip>
</template>
