<script setup lang="ts">
import {
  DialogPortal,
  DialogRoot,
} from 'reka-ui'
import {
  nextTick,
  ref,
  Transition,
  watch,
} from 'vue'

import AppDialogContent from '@/components/dialog/AppDialogContent.vue'
import AppDialogOverlay from '@/components/dialog/AppDialogOverlay.vue'
import type { AppDialogProps } from '@/components/dialog/dialog.props'

const props = withDefaults(defineProps<AppDialogProps>(), {
  triggerId: null,
  shouldAnimateFromTrigger: false,
  shouldPreventClickOutside: false,
  styleConfig: null,
})

const emit = defineEmits<{
  close: []
}>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const isActuallyOpen = ref<boolean>(false)

const hasSupportForViewTransitionsApi = document.startViewTransition !== undefined

if (props.shouldAnimateFromTrigger && props.triggerId === null) {
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
  if (hasSupportForViewTransitionsApi && props.shouldAnimateFromTrigger) {
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
  if (hasSupportForViewTransitionsApi && props.shouldAnimateFromTrigger) {
    animateOutWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = false
  }

  setTimeout(() => {
    focusTriggerElement()
  }, props.shouldAnimateFromTrigger ? 200 : 0)
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    showDialog()
  }
  else {
    hideDialog()
  }
})

watch(isActuallyOpen, () => {
  if (!isActuallyOpen.value) {
    emit('close')
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
        <Transition
          enter-active-class="duration-200"
          enter-from-class="opacity-0"
          leave-active-class="duration-200"
          leave-to-class="opacity-0"
        >
          <AppDialogOverlay />
        </Transition>

        <Component
          :is="props.shouldAnimateFromTrigger ? 'div' : Transition"
          enter-active-class="duration-300 ease-dialog"
          enter-from-class="opacity-0 scale-110"
          leave-active-class="duration-300 ease-dialog"
          leave-to-class="opacity-0 scale-110"
        >
          <AppDialogContent
            v-if="isActuallyOpen"
            :data-test-id="props.testId"
            :should-prevent-click-outside="props.shouldPreventClickOutside"
            :style="props.styleConfig"
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

.custom-dialog-overlay {
  &[data-state='open'] {
    animation: dialog-overlay-animate-in 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }

  &[data-state='closed'] {
    animation: dialog-overlay-animate-out 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }
}

@keyframes dialog-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

::view-transition-old(dialog),
::view-transition-new(dialog)
::view-transition-old(dialog-leave),
::view-transition-new(dialog-leave)
{
  height: 100%;
  width: 100%;
  object-fit: fill;
  animation: none;
}

/* Open animation */
::view-transition-group(dialog) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1.07);
}

/* Button */
::view-transition-old(dialog) {
  animation: dialog-fade-out 100ms forwards;
}

/* Dialog */
::view-transition-new(dialog) {
  animation: dialog-fade-in 200ms forwards;
}

/* Close animation */
::view-transition-group(dialog-leave) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1);
}

/* Button */
::view-transition-new(dialog-leave) {
  opacity: 0;
  animation: dialog-fade-in 150ms 100ms forwards;
}

/* Dialog */
::view-transition-old(dialog-leave) {
  animation: dialog-fade-out 200ms 50ms forwards;
}
</style>
