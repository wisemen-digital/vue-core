<script setup lang="ts">
import { DialogRoot as RekaDialogRoot } from 'reka-ui'
import {
  computed,
  watch,
} from 'vue'

import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import PrimitiveElement from '@/components/v2/core/PrimitiveElement.vue'
import { useProvideDialogContext } from '@/components/v2/dialog/dialog.context'
import type { DialogProps } from '@/components/v2/dialog/dialog.props'
import {
  type CreateDialogStyle,
  createDialogStyle,
} from '@/components/v2/dialog/style/dialog.style'
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
  mode: 'overlay',
  preventClickOutside: false,
  preventEsc: false,
})

const emit = defineEmits<{
  close: []
  unmounted: []
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

if (props.mode === 'inline' && props.teleportTargetId === null) {
  throw new Error('``teleportTargetId` is required when `mode` is set to "inline"')
}

const themeContext = injectThemeProviderContext()

const dialogStyle = computed<CreateDialogStyle>(() => createDialogStyle({}))

const customClassConfig = computed<ClassConfig<'dialog'>>(
  () => getComponentClassConfig('dialog', themeContext.theme.value, {}),
)

function onUnmounted(): void {
  emit('unmounted')
}

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
  onUnmounted,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <RekaDialogRoot v-model:open="isOpen">
      <slot />
    </RekaDialogRoot>
  </PrimitiveElement>
</template>
