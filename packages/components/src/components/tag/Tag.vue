<script setup lang="ts">
import { computed } from 'vue'

import { provideTagContext } from '@/components/tag/tag.context'
import { tagStyle } from '@/components/tag/tag.style'
import TagRemoveButton from '@/components/tag/TagRemoveButton.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  isRemovable?: boolean
} & Stylable<'tag'>>(), {
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
    class="tag-default"
  >
    <slot name="left" />

    <span :class="tagContentClasses">
      <slot />
    </span>

    <slot name="remove-button">
      <TagRemoveButton v-if="props.isRemovable" />
    </slot>

    <slot name="right" />
  </div>
</template>
