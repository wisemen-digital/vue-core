<script setup lang="ts">
import { TagsInputClear } from 'reka-ui'

import IconButton from '@/components/button/icon-button/IconButton.vue'
</script>

<template>
  <TagsInputClear :as-child="true">
    <IconButton
      :class-config="{
        root: 'h-fit w-fit mr-sm rounded-full',
      }"
      :label="i18n.t('shared.delete')"
      icon="close"
      size="sm"
      variant="tertiary"
    />
  </TagsInputClear>
</template>
