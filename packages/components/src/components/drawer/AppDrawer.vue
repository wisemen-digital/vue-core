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

import AppDrawerContent from '@/components/drawer/AppDrawerContent.vue'
import AppDrawerOverlay from '@/components/drawer/AppDrawerOverlay.vue'
import type { AppDrawerProps } from '@/components/drawer/drawer.props'

const props = withDefaults(defineProps<AppDrawerProps>(), {
  triggerId: null,
  animateFromTrigger: false,
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

if (props.animateFromTrigger && props.triggerId === null) {
  throw new Error('[AppDrawer] The `triggerId` prop is required when using the `animateFromTrigger` prop')
}

function getTriggerElement(): HTMLElement | null {
  const triggerEl = document.querySelector(`#${props.triggerId}`)

  return triggerEl as HTMLElement ?? null
}

function getDrawerElement(): HTMLElement {
  const drawerEl = document.querySelector('[role="drawer"]')

  if (drawerEl === null) {
    throw new Error('[AppDrawer] No drawer element found')
  }

  return drawerEl as HTMLElement
}

function animateInWithViewTransitionsApi(): void {
  const trigger = getTriggerElement()

  if (trigger === null) {
    throw new Error('[AppDrawer] No trigger element found')
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
    throw new Error('[AppDrawer] No trigger element found')
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

function hideDrawer(): void {
  if (hasSupportForViewTransitionsApi && props.animateFromTrigger) {
    animateOutWithViewTransitionsApi()
  }
  else {
    isActuallyOpen.value = false
  }

  setTimeout(() => {
    focusTriggerElement()
  }, props.animateFromTrigger ? 300 : 0)
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
      <DialogPortal>
        <Transition
          enter-active-class="duration-300"
          enter-from-class="opacity-0"
          leave-active-class="duration-300"
          leave-to-class="opacity-0"
        >
          <AppDrawerOverlay />
        </Transition>

        <Component
          :is="animateFromTrigger ? 'div' : Transition"
          enter-active-class="duration-300"
          enter-from-class="opacity-0 translate-x-full"
          leave-active-class="duration-300"
          leave-to-class="opacity-0 translate-x-full"
        >
          <AppDrawerContent
            v-if="isActuallyOpen"
            :data-test-id="props.testId"
            :should-prevent-click-outside="props.shouldPreventClickOutside"
            :style="props.styleConfig"
          >
            <slot />
          </AppDrawerContent>
        </Component>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<style lang="scss">
::view-transition-old(drawer) {
  animation-duration: 100ms;
}

::view-transition-new(drawer) {
  animation-duration: 150ms;
}

::view-transition-group(drawer) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.49, 0.5, 0, 1.07);
}

::view-transition-old(drawer-leave) {
  animation-duration: 250ms;
  animation-timing-function: ease;
}

::view-transition-new(drawer-leave) {
  animation-duration: 250ms;
}

::view-transition-group(drawer-leave) {
  animation-duration: 250ms;
  animation-timing-function: ease;
}
</style>
