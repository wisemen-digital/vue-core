<script setup lang="ts">
import { PopoverClose as RekaPopoverClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/packages/@next/button/icon-button/IconButton.vue'

const { t } = useI18n()
</script>

<template>
  <RekaPopoverClose :as-child="true">
    <slot>
      <IconButton
        :label="t('shared.close')"
        icon="close"
        variant="tertiary-gray"
        size="sm"
      />
    </slot>
  </RekaPopoverClose>
</template>
