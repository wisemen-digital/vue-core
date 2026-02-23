<script setup lang="ts">
import { onMounted } from 'vue'

import type { DashboardPageProps } from '@/ui/page/dashboardPage.type'
import DashboardPageHeader from '@/ui/page/DashboardPageHeader.vue'
import Page from '@/ui/page/Page.vue'

const props = withDefaults(defineProps<DashboardPageProps>(), {
  actions: () => [],
  breadcrumbs: () => [],
  tabs: () => [],
})

function warnIfMissingH1(): void {
  const h1El = document.querySelector('h1') ?? null

  if (h1El === null) {
    console.warn('[DashboardPage] No <h1> found in the default slot. For accessibility reasons, please ensure that there is exactly one <h1> element within the default slot content.')
  }
}

onMounted(() => {
  warnIfMissingH1()
})
</script>

<template>
  <Page
    class="relative flex size-full h-full flex-col overflow-hidden bg-primary"
  >
    <DashboardPageHeader
      :title="props.title"
      :tabs="props.tabs"
      :breadcrumbs="props.breadcrumbs"
      :actions="props.actions"
    >
      <template #title>
        <slot name="title" />
      </template>

      <template #title-left>
        <slot name="title-left" />
      </template>

      <template #actions>
        <slot name="actions" />
      </template>

      <template #breadcrumb-actions>
        <slot name="breadcrumb-actions" />
      </template>
    </DashboardPageHeader>

    <slot />
  </Page>
</template>
