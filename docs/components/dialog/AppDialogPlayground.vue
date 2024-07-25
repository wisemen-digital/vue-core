<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppDialogContainer,
  useDialog,
} from '@wisemen/vue-core'

const controls = createControls({
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

const dialogAnimated = useDialog({
  component: () => import('@docs/components/dialog/AppDialogExample.vue'),
  animateFromTrigger: true,
})

function onButtonClick(
  hideCloseButton: boolean,
  shouldPreventClickOutside?: boolean,
): void {
  void dialog.open({
    title: 'This is a dialog',
    hideCloseButton,
    shouldPreventClickOutside,
  })
}

function onButtonClickAnimated(
  hideCloseButton: boolean,
  shouldPreventClickOutside?: boolean,
): void {
  void dialogAnimated.open({
    title: 'This is a dialog',
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

      <div class="flex gap-x-2">
        <AppButton
          :id="dialog.triggerId"
          @click="onButtonClick(values.hideCloseButton, values.shouldPreventClickOutside)"
        >
          Click to show dialog
        </AppButton>

        <AppButton
          :id="dialogAnimated.triggerId"
          @click="onButtonClickAnimated(values.hideCloseButton, values.shouldPreventClickOutside)"
        >
          Click to show dialog (animated)
        </AppButton>
      </div>
    </template>
  </ComponentPlayground>
</template>
