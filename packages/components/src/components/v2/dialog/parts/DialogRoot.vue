<script setup lang="ts">
import { DialogRoot as RekaDialogRoot } from 'reka-ui'
import { computed } from 'vue'

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
  preventClickOutside: false,
  preventEsc: false,
})

const emit = defineEmits<{
  close: []
}>()

const themeContext = injectThemeProviderContext()

const dialogStyle = computed<CreateDialogStyle>(() => createDialogStyle({}))

const customClassConfig = computed<ClassConfig<'dialog'>>(
  () => getComponentClassConfig('dialog', themeContext.theme.value, {}),
)

useProvideDialogContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: dialogStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <RekaDialogRoot>
      <slot />
    </RekaDialogRoot>
  </PrimitiveElement>
</template>
