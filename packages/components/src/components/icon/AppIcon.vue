<script setup lang="ts">
import { useAttrs } from 'vue'

import AppAsyncIcon from '@/components/icon/AppAsyncIcon.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(
  defineProps<{
  /**
   * The icon to be displayed
   */
    icon: Icon
    /**
     * The size of the icon
     * @default 'default'
     */
    // size?: IconStyleProps['size']
    size?: 'default' | 'lg' | 'sm' | 'xl' | 'xs'
  }>(),
  {
    size: 'default',
  },
)

const attrs = useAttrs()
</script>

<template>
  <Suspense>
    <AppAsyncIcon
      :icon="props.icon"
      v-bind="attrs"
    />
  </Suspense>
</template>
