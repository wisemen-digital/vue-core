<script setup lang="ts">
import type {
  PageBreadcrumb,
  PageTab,
} from '@/ui/page/dashboardPage.type'
import DashboardPageContainer from '@/ui/page/DashboardPageContainer.vue'
import DashboardPageHeaderBreadcrumbs from '@/ui/page/DashboardPageHeaderBreadcrumbs.vue'
import DashboardPageHeaderSidebarToggle from '@/ui/page/DashboardPageHeaderSidebarToggle.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import Separator from '@/ui/separator/Separator.vue'

const props = defineProps<{
  title: string | null
  actions: any[]
  breadcrumbs: PageBreadcrumb[]
  tabs: PageTab[]
}>()
</script>

<template>
  <header class="flex h-11 shrink-0 items-center border-b border-secondary">
    <DashboardPageContainer>
      <RowLayout justify="between">
        <RowLayout gap="none">
          <DashboardPageHeaderSidebarToggle />

          <Separator
            v-if="props.breadcrumbs.length > 0 || props.title !== null"
            class="mr-lg ml-md h-4.5 bg-quaternary"
            orientation="vertical"
          />

          <RowLayout
            v-if="props.breadcrumbs.length === 0 && props.title !== null"
            gap="none"
          >
            <slot name="title-left" />

            <slot name="title">
              <h1 class="text-sm font-medium text-primary">
                {{ props.title }}
              </h1>
            </slot>
          </RowLayout>

          <h1
            v-if="breadcrumbs.length > 0 && props.title !== null"
            class="sr-only"
          >
            {{ props.title }}
          </h1>

          <RowLayout gap="xs">
            <DashboardPageHeaderBreadcrumbs :breadcrumbs="props.breadcrumbs" />
          </RowLayout>
        </RowLayout>

        <slot name="actions" />
      </RowLayout>
    </DashboardPageContainer>
  </header>
</template>
