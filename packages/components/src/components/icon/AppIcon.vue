<script setup lang="ts">
import { useAttrs } from 'vue'

import AppAsyncIcon from '@/components/icon/AppAsyncIcon.vue'
import type { Icon } from '@/icons/icons'
import type { StyleConfig } from '@/types/style.type.js'

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
    size?: 'default' | 'full' | 'lg' | 'sm' | 'xl' | 'xs'
    /**
     *
     */
    styleConfig?: StyleConfig<'icon'> | null
  }>(),
  {
    size: 'default',
    styleConfig: null,
  },
)

const attrs = useAttrs()
</script>

<template>
  <Suspense>
    <AppAsyncIcon
      :icon="props.icon"
      :size="props.size"
      :style-config="props.styleConfig"
      v-bind="attrs"
    />
  </Suspense>
</template>
