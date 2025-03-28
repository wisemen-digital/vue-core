<script setup lang="ts">
import { DialogRoot as RekaDialogRoot } from 'reka-ui'
import {
  computed,
  watch,
} from 'vue'

import { useProvideDialogContext } from '@/components/dialog/dialog.context'
import type { DialogProps } from '@/components/dialog/dialog.props'
import {
  type CreateDialogStyle,
  createDialogStyle,
} from '@/components/dialog/dialog.style'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useComponentClassConfig } from '@/customClassVariants'
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
  variant: null,
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

const dialogStyle = computed<CreateDialogStyle>(() => createDialogStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = useComponentClassConfig('dialog', {
  variant: props.variant ?? undefined,
})

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
