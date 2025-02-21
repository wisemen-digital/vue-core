<script setup lang="ts">
import { Label } from 'reka-ui'
import { computed } from 'vue'

import { inputFieldLabelStyle } from '@/components/input-field-label/inputFieldLabel.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  /**
   * Whether the input field is required.
   */
  isRequired: boolean
  /**
   * Point to the id of the related input field.
   */
  for: string
  /**
   * The label to be displayed.
   */
  label: string | null
} & Stylable<'inputFieldLabel'>>(), {
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = inputFieldLabelStyle()
const labelClasses = computed<string>(() => style.label())
</script>

<template>
  <Label
    v-if="props.label !== null"
    :class="[
      labelClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
    ]"
    :for="props.for"
    :style="props.styleConfig"
    class="input-field-label-default"
  >
    {{ props.label }} <template v-if="props.isRequired">*</template>
  </Label>
</template>
