<!-- eslint-disable simple-import-sort/imports -->
<script setup lang="ts">
import {
  DialogPortal,
  DialogRoot,
} from 'radix-vue'
import {
  Transition,
  nextTick,
  ref,
  watch,
} from 'vue'

import AppDialogContent from './AppDialogContent.vue'
import AppDialogOverlay from './AppDialogOverlay.vue'

const props = withDefaults(defineProps<{
  /**
   * The accessible description for the dialog
   */
  accessibleDescription: string
  /**
   * The accessible title for the dialog
   */
  accessibleTitle: string
  /**
   * Whether to animate the dialog with the View Transitions API
   * @default false
   */
  animateFromTrigger?: boolean
  /**
   * Whether to hide the close button
   * @default false
   */
  hideCloseButton?: boolean
  /**
   * The id of the element that triggers the dialog.
   * Will be set automatically when using the `useDialog` composable
   * @default null
   */
  triggerId?: null | string
}>(), {
  animateFromTrigger: false,
  hideCloseButton: false,
  triggerId: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const isActuallyOpen = ref<boolean>(false)

const hasSupportForViewTransitionsApi = document.startViewTransition !== undefined

if (props.animateFromTrigger && props.triggerId === null) {
  throw new Error('[AppDialog] The `triggerId` prop is required when using the `animateFromTrigger` prop')
}

function getTriggerElement(): HTMLElement | null {
  const triggerEl = document.querySelector(`#${props.triggerId}`)

  return triggerEl as HTMLElement ?? null
}

function getDialogElement(): HTMLElement {
  const dialogEl = document.querySelector('[role="dialog"]')

  if (dialogEl === null) {
    throw new Error('[AppDialog] No dialog element found')
  }

  return dialogEl as HTMLElement
}

function animateInWithViewTransitionsApi(): void {
  const trigger = getTriggerElement()

  if (trigger === null) {
    throw new Error('[AppDialog] No trigger element found')
  }

  trigger.style.viewTransitionName = 'dialog'

  const transition = document.startViewTransition(async () => {
    isActuallyOpen.value = true

    await nextTick()

    trigger.style.viewTransitionName = ''
    trigger.style.opacity = '0'

    const dialog = getDialogElement()

    dialog.style.viewTransitionName = 'dialog'
  })

  void transition.finished.finally(() => {
    const dialog = getDialogElement()
    dialog.style.viewTransitionName = ''
  })
}

function animateOutWithViewTransitionsApi(): void {
  const trigger = getTriggerElement()

  if (trigger === null) {
    throw new Error('[AppDialog] No trigger element found')
  }

  const dialog = getDialogElement()

  dialog.style.viewTransitionName = 'dialog-leave'

  const transition = document.startViewTransition(() => {
    dialog.style.viewTransitionName = ''

    trigger.style.viewTransitionName = 'dialog-leave'
    trigger.style.opacity = '1'

    isActuallyOpen.value = false
  })

  void transition.finished.finally(() => {
    trigger.style.viewTransitionName = ''
  })
}

function showDialog(): void {
  if (hasSupportForViewTransitionsApi && props.animateFromTrigger) {
    animateInWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = true
  }
}

function focusTriggerElement(): void {
  if (props.triggerId === null) {
    return
  }

  const triggerEl = getTriggerElement()

  const isInDom = document.body.contains(triggerEl)

  if (isInDom && triggerEl !== null) {
    triggerEl.focus()
  }
}

function hideDialog(): void {
  if (hasSupportForViewTransitionsApi && props.animateFromTrigger) {
    animateOutWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = false
  }

  setTimeout(() => {
    focusTriggerElement()
  }, props.animateFromTrigger ? 200 : 0)
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    showDialog()
  }
  else {
    hideDialog()
  }
})
</script>

<template>
  <div>
    <DialogRoot
      v-model:open="isOpen"
      :modal="isActuallyOpen"
    >
      <DialogPortal>
        <AppDialogOverlay />

        <Component
          :is="animateFromTrigger ? 'div' : Transition"
          enter-active-class="duration-300 ease-dialog"
          enter-from-class="opacity-0 scale-110"
          leave-active-class="duration-300 ease-dialog"
          leave-to-class="opacity-0 scale-110"
        >
          <AppDialogContent
            v-if="isActuallyOpen"
            :accessible-title="props.accessibleTitle"
            :accessible-description="props.accessibleDescription"
            :hide-close-button="props.hideCloseButton"
          >
            <slot />
          </AppDialogContent>
        </Component>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<style lang="scss">
@keyframes dialog-overlay-animate-in {
  from {
    opacity: 0;
  }
}

@keyframes dialog-overlay-animate-out {
  to {
    opacity: 0;
  }
}

.dialog-overlay {
  &[data-state='open'] {
    animation: dialog-overlay-animate-in 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }

  &[data-state='closed'] {
    animation: dialog-overlay-animate-out 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }
}

::view-transition-old(dialog) {
  animation-duration: 100ms;
}

::view-transition-new(dialog) {
  animation-duration: 150ms;
}

::view-transition-group(dialog) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1.07);
}

::view-transition-old(dialog-leave) {
  animation-duration: 250ms;
  animation-timing-function: ease;
}

::view-transition-new(dialog-leave) {
  animation-duration: 250ms;
}

::view-transition-group(dialog-leave) {
  animation-duration: 250ms;
  animation-timing-function: ease;
}
</style>
