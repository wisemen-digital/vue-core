<script setup lang="ts">
import AppAsyncIcon from '@/components/icon/AppAsyncIcon.vue'
import type { IconStyleProps } from '@/components/icon/icon.style'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { Icon } from '@/icons/icons'

withDefaults(
  defineProps<{
  /**
   * The icon to be displayed
   */
    icon: Icon
    /**
     * The size of the icon
     * @default 'default'
     */
    size?: IconStyleProps['size']
  }>(),
  {
    size: 'default',
  },
)

const { classAttr } = useComponentAttrs()
</script>

<template>
  <Suspense>
    <AppAsyncIcon
      :icon="icon"
      :size="size"
      :class="classAttr"
    />
  </Suspense>
</template>
