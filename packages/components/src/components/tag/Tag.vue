<script setup lang="ts">
import { computed } from 'vue'

import { provideTagContext } from '@/components/tag/tag.context'
import { useTagStyle } from '@/components/tag/tag.style'
import TagRemoveButton from '@/components/tag/TagRemoveButton.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'
import { ThemeUtil } from '@/utils/theme.util'

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

const tagStyle = useTagStyle()

const tagBoxClasses = computed<string>(() => tagStyle.tagBox({
  isDisabled: props.isDisabled,
}))

const tagContentClasses = computed<string>(() => tagStyle.tagContent({
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
    :class="[
      tagBoxClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.darkModeValue.value),
    ]"
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
