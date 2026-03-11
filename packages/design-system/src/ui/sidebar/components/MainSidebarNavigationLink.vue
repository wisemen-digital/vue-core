<script setup lang="ts">
import type { Component } from 'vue'
import type {
  RouteLocationNormalized,
  RouteLocationRaw,
} from 'vue-router'
import {
  RouterLink,
  useRoute,
} from 'vue-router'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import MainSidebarNavigationLinkProvider from '@/ui/sidebar/components/MainSidebarNavigationLinkProvider.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

export interface Props {
  isActive?: (route: RouteLocationNormalized) => boolean
  icon: Component
  keyboardShortcut?: string | null
  label: string
  to: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  isActive: () => false,
  keyboardShortcut: null,
})

const emit = defineEmits<{
  click: []
}>()

const {
  isSidebarOpen,
  closeIfFloatingSidebar,
  sidebarIconSize,
  sidebarLinkHeight,
  sidebarLinkPadding,
  variant,
} = useMainSidebar()

const route = useRoute()

function onClick(): void {
  closeIfFloatingSidebar()
  emit('click')
}
</script>

<template>
  <ActionTooltip
    :is-disabled="variant !== 'icons-only' && !isSidebarOpen && props.keyboardShortcut === null"
    :keyboard-shortcut="props.keyboardShortcut"
    :label="props.label"
    popover-side="right"
  >
    <ClickableElement>
      <RouterLink
        v-slot="{ isActive: isRouteActive }"
        :to="props.to"
        class="w-full"
        @click="onClick"
      >
        <MainSidebarNavigationLinkProvider
          :is-active="isRouteActive"
        >
          <div
            :data-active="isRouteActive || props.isActive(route) || undefined"
            :style="{ height: sidebarLinkHeight }"
            class="
              group rounded-md
              hover:bg-primary-hover
              data-active:bg-brand-primary
              dark:data-active:glassy dark:data-active:p-px
            "
          >
            <RowLayout
              :style="{ padding: sidebarLinkPadding }"
              gap="md"
              justify="between"
              class="
                group h-full rounded-[0.4rem] duration-100
                dark:group-data-active:glassy-inner-content
              "
            >
              <RowLayout>
                <Component
                  :is="props.icon"
                  :style="{
                    width: sidebarIconSize,
                    height: sidebarIconSize,
                  }"
                  class="
                    shrink-0 text-fg-quaternary duration-100
                    group-data-active:text-fg-brand-primary
                    dark:group-data-active:text-fg-primary
                  "
                />

                <span
                  v-if="variant !== 'icons-only' || isSidebarOpen"
                  class="
                    text-xs font-medium text-secondary duration-100
                    group-hover:text-primary
                    group-data-active:text-brand-secondary
                  "
                >
                  {{ props.label }}
                </span>
              </RowLayout>
              <RowLayout
                v-if="variant !== 'icons-only' || isSidebarOpen"
                gap="lg"
              >
                <slot
                  name="right"
                />
              </RowLayout>
            </RowLayout>
          </div>
        </MainSidebarNavigationLinkProvider>
      </RouterLink>
    </ClickableElement>
  </ActionTooltip>
</template>
