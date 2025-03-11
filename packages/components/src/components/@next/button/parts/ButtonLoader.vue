<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { VcSpinner } from '@/components/index'
import { useInjectButtonContext } from '@/components/@next/button/button.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectButtonContext()

const { t } = useI18n()
</script>

<template>
  <div
    :class="style.loader({
      class: mergeClasses(customClassConfig.loader, classConfig?.loader),
    })"
  >
    <span class="sr-only">
      {{ t('shared.loading') }}
    </span>

    <slot>
      <VcSpinner :aria-hidden="true" />
    </slot>
  </div>
</template>
