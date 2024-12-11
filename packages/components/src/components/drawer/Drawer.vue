<script setup lang="ts">
import { DialogRoot } from 'reka-ui'
import {
  nextTick,
  ref,
  Transition,
  useAttrs,
  watch,
} from 'vue'

import type { DrawerProps } from '@/components/drawer/drawer.props'
import DrawerContent from '@/components/drawer/DrawerContent.vue'
import DrawerOverlay from '@/components/drawer/DrawerOverlay.vue'

const props = withDefaults(defineProps<DrawerProps>(), {
  id: null,
  shouldPreventClickOutside: false,
  shouldShouldAnimateFromTrigger: false,
  styleConfig: null,
  transitionClasses: null,
})

const emit = defineEmits<{
  close: []
}>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const attrs = useAttrs()

const isActuallyOpen = ref<boolean>(false)

const hasSupportForViewTransitionsApi = document.startViewTransition !== undefined

if (props.shouldAnimateFromTrigger && props.id === null) {
  throw new Error('[Drawer] The `id` prop is required when using the `shouldAnimateFromTrigger` prop')
}

function isReduceMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getTriggerElement(): HTMLElement | null {
  const triggerEl = document.querySelector(`#${props.id}`)

  return triggerEl as HTMLElement ?? null
}

function getDrawerElement(): HTMLElement {
  const drawerEl = document.querySelector('[role="dialog"]')

  if (drawerEl === null) {
    throw new Error('[Drawer] No drawer element found')
  }

  return drawerEl as HTMLElement
}

function animateInWithViewTransitionsApi(): void {
  const trigger = getTriggerElement()

  if (trigger === null) {
    throw new Error('[Drawer] No trigger element found')
  }

  trigger.style.viewTransitionName = 'drawer'

  const transition = document.startViewTransition(async () => {
    isActuallyOpen.value = true

    await nextTick()

    trigger.style.viewTransitionName = ''
    trigger.style.opacity = '0'

    const drawer = getDrawerElement()

    drawer.style.viewTransitionName = 'drawer'
  })

  void transition.finished.finally(() => {
    const drawer = getDrawerElement()

    drawer.style.viewTransitionName = ''
  })
}

function animateOutWithViewTransitionsApi(): void {
  const trigger = getTriggerElement()

  if (trigger === null) {
    throw new Error('[Drawer] No trigger element found')
  }

  const drawer = getDrawerElement()

  drawer.style.viewTransitionName = 'drawer-leave'

  const transition = document.startViewTransition(() => {
    drawer.style.viewTransitionName = ''

    trigger.style.viewTransitionName = 'drawer-leave'
    trigger.style.opacity = '1'

    isActuallyOpen.value = false
  })

  void transition.finished.finally(() => {
    trigger.style.viewTransitionName = ''
  })
}

function showDrawer(): void {
  if (
    hasSupportForViewTransitionsApi
    && props.shouldAnimateFromTrigger
    && !isReduceMotion()
    && getTriggerElement() !== null
  ) {
    animateInWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = true
  }
}

function focusTriggerElement(): void {
  if (props.id === null) {
    return
  }

  const triggerEl = getTriggerElement()

  const isInDom = document.body.contains(triggerEl)

  if (isInDom && triggerEl !== null) {
    triggerEl.focus()
  }
}

function hideDrawer(): void {
  if (
    hasSupportForViewTransitionsApi
    && props.shouldAnimateFromTrigger
    && !isReduceMotion()
    && getTriggerElement() !== null
  ) {
    animateOutWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = false
  }

  setTimeout(() => {
    focusTriggerElement()
  }, props.shouldAnimateFromTrigger ? 300 : 0)
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    showDrawer()
  }
  else {
    hideDrawer()
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
      <Transition
        enter-active-class="duration-300"
        enter-from-class="opacity-0"
        leave-active-class="duration-300"
        leave-to-class="opacity-0"
      >
        <DrawerOverlay />
      </Transition>

      <Component
        :is="shouldAnimateFromTrigger ? 'div' : Transition"
        :enter-active-class="props.transitionClasses?.enterActive ?? 'duration-300'"
        :enter-from-class="props.transitionClasses?.enterFrom ?? 'opacity-0 not-motion-reduce:translate-x-full '"
        :leave-active-class="props.transitionClasses?.leaveActive ?? 'duration-300'"
        :leave-to-class="props.transitionClasses?.leaveTo ?? 'opacity-0 not-motion-reduce:translate-x-full'"
      >
        <DrawerContent
          v-if="isActuallyOpen"
          v-bind="attrs"
          :data-test-id="props.testId"
          :should-prevent-click-outside="props.shouldPreventClickOutside"
          :style="props.styleConfig"
        >
          <slot />
        </DrawerContent>
      </Component>
    </DialogRoot>
  </div>
</template>

<style lang="scss">
@keyframes drawer-overlay-animate-in {
  from {
    opacity: 0;
  }
}

@keyframes drawer-overlay-animate-out {
  to {
    opacity: 0;
  }
}

.custom-drawer-overlay {
  &[data-state='open'] {
    animation: drawer-overlay-animate-in 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }

  &[data-state='closed'] {
    animation: drawer-overlay-animate-out 0.5s cubic-bezier(0.17, 0.67, 0.16, 0.99);
  }
}

@keyframes drawer-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes drawer-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

::view-transition-old(drawer),
::view-transition-new(drawer)
::view-transition-old(drawer-leave),
::view-transition-new(drawer-leave)
{
  height: 100%;
  width: 100%;
  object-fit: fill;
  animation: none;
}

/* Open animation */
::view-transition-group(drawer) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1.07);
}

/* Button */
::view-transition-old(drawer) {
  animation: drawer-fade-out 100ms forwards;
}

/* Drawer */
::view-transition-new(drawer) {
  animation: drawer-fade-in 200ms forwards;
  mix-blend-mode: normal;
  height: 100%;
  width: 100%;
  transform-origin: center;
}

/* Close animation */
::view-transition-group(drawer-leave) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1);
}

/* Button */
::view-transition-new(drawer-leave) {
  opacity: 0;
  mix-blend-mode: normal;
  height: 100%;
  width: 100%;
  transform-origin: center;
  animation: drawer-fade-in 150ms 100ms forwards;
}

/* Drawer */
::view-transition-old(drawer-leave) {
  animation: drawer-fade-out 200ms 50ms forwards;
  mix-blend-mode: normal;
  height: 100%;
  width: 100%;
  transform-origin: center;
}
</style>
