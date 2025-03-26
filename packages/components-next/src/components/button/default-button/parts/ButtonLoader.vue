<script setup lang="ts">
import { useInjectButtonContext } from '@/components/button/default-button/button.context'
import Spinner from '@/components/spinner/Spinner.vue'
import { mergeClasses } from '@/customClassVariants'

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
      <Spinner :aria-hidden="true" />
    </slot>
  </div>
</template>
