<script setup lang="ts">
import { DialogClose as RekaDialogClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { useInjectDialogContext } from '@/components/dialog/dialog.context'

const { classConfig } = useInjectDialogContext()

const { t } = useI18n()
</script>

<template>
  <RekaDialogClose :as-child="true">
    <slot>
      <IconButton
        :class-config="classConfig?.closeButton"
        :label="t('shared.close')"
        icon="close"
        variant="tertiary"
        size="sm"
      />
    </slot>
  </RekaDialogClose>
</template>
