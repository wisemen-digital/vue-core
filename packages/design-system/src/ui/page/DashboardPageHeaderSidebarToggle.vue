<script setup lang="ts">
import { Toggle } from 'reka-ui'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const {
  isSidebarOpen,
} = useMainSidebar()

const i18n = useI18n()

const label = computed<string>(() => (isSidebarOpen.value
  ? i18n.t('component.dashboard_page_header_sidebar_toggle.collapse')
  : i18n.t('component.dashboard_page_header_sidebar_toggle.expand')))

function toggleSidebar(): void {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <ActionTooltip
    :label="label"
    keyboard-shortcut="meta_b"
  >
    <ClickableElement>
      <Toggle
        class="
          -ml-sm flex size-7 cursor-pointer items-center justify-center
          rounded-sm
          hover:bg-tertiary
        "
        @click="toggleSidebar"
      >
        <div
          class="
            relative h-3 w-4 overflow-hidden rounded-[3px] border-[1.5px]
            border-fg-tertiary
          "
        >
          <div class="ml-xs h-full w-[1.5px] bg-fg-tertiary" />

          <div
            :class="{
              '-translate-x-full': !isSidebarOpen,
            }"
            class="absolute top-0 left-0 h-full w-1 bg-fg-tertiary duration-150"
          />
        </div>
      </Toggle>
    </ClickableElement>
  </ActionTooltip>
</template>
