<script setup lang="ts">
import { AvatarFallback as RekaAvatarFallback } from 'reka-ui'
import { computed } from 'vue'

import { useInjectAvatarContext } from '@/components/avatar/avatar.context'
import { mergeClasses } from '@/customClassVariants'

const {
  name,
  classConfig,
  customClassConfig,
  style,
} = useInjectAvatarContext()

const initials = computed<string>(() => {
  const parts = name.value.split(' ')
  const initials = parts.map((part) => part.charAt(0).toUpperCase())

  return initials.join('')
})
</script>

<template>
  <RekaAvatarFallback
    :class="style.fallback({
      class: mergeClasses(customClassConfig.fallback, classConfig?.fallback),
    })"
  >
    {{ initials }}
  </RekaAvatarFallback>
</template>
