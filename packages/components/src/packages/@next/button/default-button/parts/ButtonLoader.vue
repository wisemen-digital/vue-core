<script setup lang="ts">
import { VcSpinner } from '@/components/index'
import { mergeClasses } from '@/customClassVariants'
import { useInjectButtonContext } from '@/packages/@next/button/default-button/button.context'

const {
  isLoading,
  classConfig,
  customClassConfig,
  style,
} = useInjectButtonContext()
</script>

<template>
  <div
    v-if="isLoading"
    :class="style.loader({
      class: mergeClasses(customClassConfig.loader, classConfig?.loader),
    })"
  >
    <slot>
      <VcSpinner :aria-hidden="true" />
    </slot>
  </div>
</template>
