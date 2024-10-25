<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { computed } from 'vue'

import { dialogStyle } from '@/components/dialog/dialog.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = defineProps<{
  shouldPreventClickOutside: boolean
}>()

const themeProviderContext = injectThemeProviderContext()

const style = dialogStyle()
const contentClasses = computed<string>(() => style.content())

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
    :class="[contentClasses, themeProviderContext.theme.value]"
    :disable-outside-pointer-events="false"
    class="dialog-variant-default"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <div>
      <slot />
    </div>
  </DialogContent>
</template>
