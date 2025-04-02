<script setup lang="ts">
import { SwitchThumb as RekaSwitchThumb } from 'reka-ui'

import { useInjectSwitchContext } from '@/components/switch/switch.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectSwitchContext()
</script>

<template>
  <RekaSwitchThumb
    :class="style.thumb({
      class: mergeClasses(customClassConfig.thumb, classConfig?.thumb),
    })"
  />
</template>
