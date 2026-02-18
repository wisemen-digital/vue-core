<script setup lang="ts">
import { SearchLgIcon } from '@wisemen/vue-core-icons'
import { useI18n } from 'vue-i18n'

import { UIIconButton } from '@/ui/button/index'

const i18n = useI18n()
</script>

<template>
  <UIIconButton
    :icon="SearchLgIcon"
    :label="i18n.t('components.sidebar.global_search.label')"
    variant="tertiary"
  />
</template>
