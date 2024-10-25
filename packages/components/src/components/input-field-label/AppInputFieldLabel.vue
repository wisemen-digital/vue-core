<script setup lang="ts">
import { Label } from 'reka-ui'
import { computed } from 'vue'

import { inputFieldLabelStyle } from '@/components/input-field-label/inputFieldLabel.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { StyleConfig } from '@/types/style.type'

const props = withDefaults(defineProps<{
  isRequired: boolean
  for: string
  label: null | string
  styleConfig?: StyleConfig<'inputFieldLabel'> | null
}>(), {
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = inputFieldLabelStyle()
const labelClasses = computed<string>(() => style.label())
</script>

<template>
  <Label
    v-if="props.label !== null"
    :class="[labelClasses, themeProviderContext.theme.value]"
    :for="props.for"
    :style="props.styleConfig"
    class="input-field-label-variant-default"
  >
    {{ props.label }} <template v-if="props.isRequired">*</template>
  </Label>
</template>
