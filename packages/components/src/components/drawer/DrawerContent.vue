<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { computed } from 'vue'

import { drawerStyle } from '@/components/drawer/drawer.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = defineProps<{
  shouldPreventClickOutside: boolean
}>()

const themeProviderContext = injectThemeProviderContext()

const style = drawerStyle()
const wrapperClasses = computed<string>(() => style.wrapper())
const contentClasses = computed<string>(() => style.content())

function onInteractOutside(e: CustomEvent): void {
  if (props.shouldPreventClickOutside) {
    e.preventDefault()

    return
  }

  const target = e.target as HTMLElement
  const isOverlay = target.classList.contains('custom-drawer-overlay')

  if (!isOverlay) {
    e.preventDefault()
  }
}

function onOpenAutoFocus(e: Event): void {
  e.preventDefault()
}
</script>

<template>
  <DialogContent
    :force-mount="true"
    :class="[wrapperClasses, themeProviderContext.theme.value]"
    :disable-outside-pointer-events="false"
    class="drawer-variant-default"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <div :class="contentClasses">
      <slot />
    </div>
  </DialogContent>
</template>
