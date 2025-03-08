<script setup lang="ts">
import { VisuallyHidden } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import { VcSpinner } from '@/components/index'
import { useInjectButtonContext } from '@/components-v2/button/button.context'
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
    <VisuallyHidden>
      <span>
        {{ t('shared.loading') }}
      </span>
    </VisuallyHidden>

    <slot>
      <VcSpinner :aria-hidden="true" />
    </slot>
  </div>
</template>
