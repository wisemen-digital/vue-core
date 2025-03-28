<script setup lang="ts">
import { PopoverClose as RekaPopoverClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { useInjectPopoverContext } from '@/components/popover/popover.context'

const { classConfig } = useInjectPopoverContext()

const { t } = useI18n()
</script>

<template>
  <RekaPopoverClose :as-child="true">
    <slot>
      <IconButton
        :label="t('shared.close')"
        :class-config="classConfig?.closeButton"
        icon="close"
        variant="tertiary"
        size="sm"
      />
    </slot>
  </RekaPopoverClose>
</template>
