<script setup lang="ts">
import { Toggle } from 'reka-ui'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import { useInjectDetailPaneContext } from '@/ui/page/detailPane.context'

const {
  isOpen, toggleIsOpen,
} = useInjectDetailPaneContext()

const i18n = useI18n()

const label = computed<string>(() => (isOpen.value
  ? i18n.t('component.dashboard_page_detail_pane_toggle.collapse')
  : i18n.t('component.dashboard_page_detail_pane_toggle.expand')))
</script>

<template>
  <ActionTooltip
    :label="label"
    keyboard-shortcut="meta_i"
  >
    <ClickableElement>
      <Toggle
        :aria-label="label"
        class="
          flex size-7 cursor-pointer items-center justify-center rounded-sm
          hover:bg-tertiary
        "
        @click="toggleIsOpen"
      >
        <div
          class="
            relative h-3 w-4 overflow-hidden rounded-[3px] border-[1.5px]
            border-fg-tertiary
          "
        >
          <div class="mr-xs ml-auto h-full w-[1.5px] bg-fg-tertiary" />

          <div
            :class="{
              'translate-x-full': !isOpen,
            }"
            class="
              absolute top-0 right-0 h-full w-1 bg-fg-tertiary duration-150
            "
          />
        </div>
      </Toggle>
    </ClickableElement>
  </ActionTooltip>
</template>
