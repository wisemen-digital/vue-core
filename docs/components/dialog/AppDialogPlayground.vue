<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppDialogContainer,
  useDialog,
} from '@wisemen/vue-core'

const controls = createControls({
  animateFromTrigger: {
    default: false,
    label: 'Animate from trigger',
    type: 'switch',
  },
  hideCloseButton: {
    default: false,
    label: 'Hide close button',
    type: 'switch',
  },
  shouldPreventClickOutside: {
    default: false,
    label: 'Prevent click outside',
    type: 'switch',
  },
})

const dialog = useDialog({
  component: () => import('@docs/components/dialog/AppDialogExample.vue'),
})

function onButtonClick(
  animateFromTrigger: boolean,
  hideCloseButton: boolean,
  shouldPreventClickOutside?: boolean,
): void {
  void dialog.open({
    title: 'This is a dialog',
    animateFromTrigger,
    hideCloseButton,
    shouldPreventClickOutside,
  })
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppDialogContainer />
      <AppButton
        @click="onButtonClick(
          values.animateFromTrigger, values.hideCloseButton, values.shouldPreventClickOutside)"
      >
        Click to show dialog
      </AppButton>
    </template>
  </ComponentPlayground>
</template>
