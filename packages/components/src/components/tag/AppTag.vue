<script setup lang="ts">
import { computed } from 'vue'

import AppTagRemoveButton from '@/components/tag/AppTagRemoveButton.vue'
import { provideTagContext } from '@/components/tag/tag.context.js'
import { tagStyle } from '@/components/tag/tag.style.js'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  isRemovable?: boolean
  styleConfig?: StyleConfig<'tag'> | null
}>(), {
  isDisabled: false,
  isRemovable: false,
  styleConfig: null,
})

const emit = defineEmits<{
  remove: []
}>()

const themeProviderContext = injectThemeProviderContext()

const style = tagStyle()

const tagBoxClasses = computed<string>(() => style.tagBox({
  isDisabled: props.isDisabled,
}))

const tagContentClasses = computed<string>(() => style.tagContent({
  isDisabled: props.isDisabled,
}))

provideTagContext({
  isDisabled: computed<boolean>(() => props.isDisabled),
  removeTag: () => {
    emit('remove')
  },
})
</script>

<template>
  <div
    :class="[tagBoxClasses, themeProviderContext.theme.value]"
    :style="props.styleConfig"
    class="tag-variant-default"
  >
    <slot name="left" />

    <span :class="tagContentClasses">
      <slot />
    </span>

    <slot name="remove-button">
      <AppTagRemoveButton v-if="props.isRemovable" />
    </slot>

    <slot name="right" />
  </div>
</template>
