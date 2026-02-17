<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import {
  RouterLink,
  useRoute,
} from 'vue-router'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import SidebarNavigationLinkProvider from '@/ui/sidebar/components/SidebarNavigationLinkProvider.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

export interface Props {
  isActive?: (route: RouteLocationNormalized) => boolean
  icon: Component
  keyboardShortcut?: string | null
  label: string
  // @ts-expect-error no matching signature
  to: Routes[number]
}

const props = withDefaults(defineProps<Props>(), {
  isActive: () => false,
  keyboardShortcut: null,
})

const emit = defineEmits<{
  click: []
}>()

const route = useRoute()

const {
  closeIfFloatingSidebar,
} = useSidebar()

function onClick(): void {
  closeIfFloatingSidebar()
  emit('click')
}
</script>

<template>
  <ActionTooltip
    :is-disabled="props.keyboardShortcut === null"
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
        <SidebarNavigationLinkProvider
          :is-active="isRouteActive"
        >
          <div
            :data-active="isRouteActive || props.isActive(route) || undefined"
            class="
              group rounded-md p-px
              hover:bg-primary-hover
              data-active:bg-brand-primary
              dark:data-active:glassy
            "
          >
            <RowLayout
              gap="md"
              justify="between"
              class="
                group h-7 rounded-[0.4rem] px-lg duration-100
                dark:group-data-active:glassy-inner-content
              "
            >
              <RowLayout>
                <Component
                  :is="props.icon"
                  class="
                    size-4 text-fg-quaternary duration-100
                    group-data-active:text-fg-brand-primary
                    dark:group-data-active:text-fg-primary
                  "
                />

                <span
                  class="
                    text-xs font-medium text-secondary duration-100
                    group-hover:text-primary
                    group-data-active:text-brand-secondary
                  "
                >
                  {{ props.label }}
                </span>
              </RowLayout>
              <RowLayout gap="lg">
                <slot
                  name="right"
                />
              </RowLayout>
            </RowLayout>
          </div>
        </SidebarNavigationLinkProvider>
      </RouterLink>
    </ClickableElement>
  </ActionTooltip>
</template>
