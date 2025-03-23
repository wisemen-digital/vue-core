<script setup lang="ts">
import { DialogClose as RekaDialogClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/packages/@next/button/icon-button/IconButton.vue'

const { t } = useI18n()
</script>

<template>
  <RekaDialogClose :as-child="true">
    <slot>
      <IconButton
        :label="t('shared.close')"
        icon="close"
        variant="tertiary-gray"
        size="sm"
      />
    </slot>
  </RekaDialogClose>
</template>
