<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationListItem,
} from 'reka-ui'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/button/AppButton.vue'

const props = defineProps<{
  items: any[]
}>()

const { n } = useI18n()
</script>

<template>
  <template v-for="(page, index) in props.items">
    <PaginationListItem
      v-if="page.type === 'page'"
      :key="index"
      :as-child="true"
      :value="page.value"
      class="data-[selected]:bg-primary-hover"
    >
      <AppButton
        variant="tertiary"
        size="sm"
        class="min-w-9"
      >
        {{ n(page.value) }}
      </AppButton>
    </PaginationListItem>

    <PaginationEllipsis
      v-else
      :key="page.type"
      :index="index"
      class="text-tertiary"
    >
      &#8230;
    </PaginationEllipsis>
  </template>
</template>
