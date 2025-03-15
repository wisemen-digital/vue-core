<script setup lang="ts">
import { PopoverClose as RekaPopoverClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/packages/@next/button/icon/IconButton.vue'
import { useInjectPopoverContext } from '@/packages/@next/popover/popover.context'

const { t } = useI18n()

const { isCloseButtonHidden } = useInjectPopoverContext()
</script>

<template>
  <RekaPopoverClose
    v-if="!isCloseButtonHidden"
    :as-child="true"
  >
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
