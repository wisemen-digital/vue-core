<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { injectSelectContext } from '@/components/select/select.context'

const selectContext = injectSelectContext()

const { t } = useI18n()
</script>

<template>
  <div v-if="selectContext.isEmpty.value">
    <slot :search-term="selectContext.searchTerm.value">
      <span
        class="
          text-tertiary block px-(--select-option-padding-x-default)
          py-(--select-option-padding-y-default)
          text-(length:--text-sm)
        "
      >
        {{ t('component.select.empty_text', { searchTerm: selectContext.searchTerm.value }) }}
      </span>
    </slot>
  </div>
</template>
