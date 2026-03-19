<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import MainSidebarLabelTransition from '@/ui/sidebar/components/MainSidebarLabelTransition.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const props = defineProps<{
  name: string
  url: string
}>()

const {
  sidebarLogoHeight,
  sidebarLogoPadding,
} = useMainSidebar()
</script>

<template>
  <RowLayout
    :style="{ height: sidebarLogoHeight }"
    justify="between"
  >
    <RowLayout :style="{ padding: sidebarLogoPadding }">
      <Logo
        :src="props.url"
        alt="Logo"
        size="xs"
      />
      <MainSidebarLabelTransition>
        <span class="text-sm font-semibold text-secondary">
          {{ props.name }}
        </span>
      </MainSidebarLabelTransition>
    </RowLayout>
    <MainSidebarLabelTransition>
      <slot name="right" />
    </MainSidebarLabelTransition>
  </RowLayout>
</template>
