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
    size?: 'default' | 'full' | 'lg' | 'sm' | 'xl' | 'xs'
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
      :size="props.size"
      v-bind="attrs"
    />
  </Suspense>
</template>

<style lang="scss">
:root {
  --icon-color: #000000;
  --icon-size: 16px;
}

.icon-sm {
  --icon-size: 14px;
}

.icon-xs {
  --icon-size: 12px;
}

.icon-lg {
  --icon-size: 18px;
}

.icon-xl {
  --icon-size: 24px;
}

.icon-full {
  --icon-size: 100%;
}
</style>
