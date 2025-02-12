<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { computed } from 'vue'

import { useDialogStyle } from '@/components/dialog/dialog.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  /**
   * Prevent clicks outside the dialog content to close the dialog
   * @default false
   */
  shouldPreventClickOutside?: boolean
}>(), {
  shouldPreventClickOutside: false,
})

defineSlots<{
  /**
   * Use to indicate the main content of the dialog.
   */
  'default': () => void
}>()

const themeProviderContext = injectThemeProviderContext()

const dialogStyle = useDialogStyle()
const contentClasses = computed<string>(() => dialogStyle.content())

function onInteractOutside(e: CustomEvent): void {
  if (props.shouldPreventClickOutside) {
    e.preventDefault()

    return
  }

  const target = e.target as HTMLElement
  const isOverlay = target.classList.contains('custom-dialog-overlay')

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
      contentClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
    ]"
    :disable-outside-pointer-events="false"
    class="dialog-default"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <slot />
  </DialogContent>
</template>
