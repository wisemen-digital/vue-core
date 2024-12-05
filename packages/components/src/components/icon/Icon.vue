<script setup lang="ts">
import { useAttrs } from 'vue'

import AsyncIcon from '@/components/icon/AsyncIcon.vue'
import type { IconProps } from '@/components/icon/icon.props'

const props = withDefaults(defineProps<IconProps>(), {
  size: 'default',
  styleConfig: null,
})

const attrs = useAttrs()
</script>

<template>
  <Suspense>
    <AsyncIcon
      :icon="props.icon"
      :style-config="props.styleConfig"
      v-bind="attrs"
    />
  </Suspense>
</template>
