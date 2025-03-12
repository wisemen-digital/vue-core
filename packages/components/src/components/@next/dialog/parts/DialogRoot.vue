<script setup lang="ts">
import { DialogRoot as RekaDialogRoot } from 'reka-ui'
import {
  computed,
  watch,
} from 'vue'

import PrimitiveElement from '@/components/@next/core/PrimitiveElement.vue'
import { useProvideDialogContext } from '@/components/@next/dialog/dialog.context'
import type { DialogProps } from '@/components/@next/dialog/dialog.props'
import {
  type CreateDialogStyle,
  createDialogStyle,
} from '@/components/@next/dialog/style/dialog.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import {
  type ClassConfig,
  getComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DialogProps>(), {
  id: null,
  teleportTargetId: null,
  testId: null,
  classConfig: null,
  hideOverlay: false,
  mode: 'overlay',
  preventClickOutside: false,
  preventEsc: false,
})

const emit = defineEmits<{
  close: []
}>()

defineSlots<{
  /**
   * Slot for the dialog components.
   */
  default: () => void
}>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const themeContext = injectThemeProviderContext()

const dialogStyle = computed<CreateDialogStyle>(() => createDialogStyle({}))

const customClassConfig = computed<ClassConfig<'dialog'>>(
  () => getComponentClassConfig('dialog', themeContext.theme.value, {}),
)

watch(isOpen, (isOpen) => {
  if (!isOpen) {
    emit('close')
  }
})

useProvideDialogContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: dialogStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <RekaDialogRoot
      v-model:open="isOpen"
      :modal="!props.hideOverlay"
    >
      <slot />
    </RekaDialogRoot>
  </PrimitiveElement>
</template>
