<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { VcSpinner } from '@/components/index'
import { mergeClasses } from '@/customClassVariants'
import { useInjectIconButtonContext } from '@/packages/@next/button/icon-button/iconButton.context'

const {
  classConfig,
  customClassConfig,
  loadingLabel,
  style,
} = useInjectIconButtonContext()

const { t } = useI18n()
</script>

<template>
  <div
    :class="style.loader({
      class: mergeClasses(customClassConfig.loader, classConfig?.loader),
    })"
  >
    <span class="sr-only">
      {{ loadingLabel ?? t('component.button.loading_label') }}
    </span>

    <slot>
      <VcSpinner :aria-hidden="true" />
    </slot>
  </div>
</template>
