<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { computed } from 'vue'

import { useDrawerStyle } from '@/components/drawer/drawer.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  shouldPreventClickOutside: boolean
}>()

const themeProviderContext = injectThemeProviderContext()

const drawerStyle = useDrawerStyle()
const wrapperClasses = computed<string>(() => drawerStyle.wrapper())
const contentClasses = computed<string>(() => drawerStyle.content())

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
    :class="[
      wrapperClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
    ]"
    :disable-outside-pointer-events="false"
    class="drawer-default"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <div :class="contentClasses">
      <slot />
    </div>
  </DialogContent>
</template>
