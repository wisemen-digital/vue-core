<script setup lang="ts">
import { AvatarImage as RekaAvatarImage } from 'reka-ui'

import { useInjectAvatarContext } from '@/components/avatar/avatar.context'
import { mergeClasses } from '@/customClassVariants'

const {
  name,
  classConfig,
  customClassConfig,
  src,
  style,
} = useInjectAvatarContext()
</script>

<template>
  <RekaAvatarImage
    v-if="src !== null"
    :src="src"
    :alt="name"
    :class="style.image({
      class: mergeClasses(customClassConfig.image, classConfig?.image),
    })"
  />
</template>
