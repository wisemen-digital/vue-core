<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useInjectIconButtonContext } from '@/components/button/icon-button/iconButton.context'
import Spinner from '@/components/spinner/Spinner.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  isLoading,
  classConfig,
  customClassConfig,
  loadingLabel,
  style,
} = useInjectIconButtonContext()

const { t } = useI18n()
</script>

<template>
  <div
    v-if="isLoading"
    :class="style.loader({
      class: mergeClasses(customClassConfig.loader, classConfig?.loader),
    })"
  >
    <span class="sr-only">
      {{ loadingLabel ?? t('component.button.loading_label') }}
    </span>

    <slot>
      <Spinner :aria-hidden="true" />
    </slot>
  </div>
</template>
