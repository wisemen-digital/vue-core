<script setup lang="ts">
import Logo from '@/ui/logo/Logo.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import MainSidebarFadeTransition from '@/ui/sidebar/components/MainSidebarFadeTransition.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const props = defineProps<{
  name: string
  url: string
}>()

const {
  isSidebarOpen,
  sidebarLogoHeight,
  sidebarLogoPadding,
  variant,
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
      <MainSidebarFadeTransition>
        <span
          v-if="variant !== 'icons-only' || isSidebarOpen"
          class="text-sm font-semibold text-secondary"
        >
          {{ props.name }}
        </span>
      </MainSidebarFadeTransition>
    </RowLayout>
    <MainSidebarFadeTransition>
      <slot
        v-if="variant !== 'icons-only' || isSidebarOpen"
        name="right"
      />
    </MainSidebarFadeTransition>
  </RowLayout>
</template>
