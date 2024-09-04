<script setup lang="ts">
import { computed, ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import type { Icon } from '@/icons/icons'
import type { KeyboardShortcut } from '@/types/keyboardShortcut.type'
import type { NavigationItem } from '@/types/navigationItem.type'
import type {
  RouteLocationTyped,
  Routes,
} from '@/types/routes.type.js'

import AppSidebarNavigationGroup from './AppSidebarNavigationGroup.vue'
import AppSidebarNavigationItem from './AppSidebarNavigationItem.vue'
import { useSidebarNavStyle } from './sidebarNav.style'

const props = defineProps<{
  /**
   * The items to show in the sidebar navigation.
   */
  items: NavigationItem[]
}>()

defineSlots<{
  /** Add content for navigations items' tooltip */
  content: (props: {
    isOpen: boolean
    keyboardShortcut?: KeyboardShortcut
    label: string
  }) => any
  /** Add content for the sidebar's footer */
  footer: (props: {
    isOpen: boolean
  }) => any
  /** Add content for the sidebar header */
  header: (props: {
    isOpen: boolean
  }) => any
  /** Add content for navigations items' trigger */
  trigger: (props: {
    isOpen: boolean
    icon: Icon
    label: string
    to: RouteLocationTyped<keyof Routes>
  }) => any
}>()

const sidebarNavStyle = useSidebarNavStyle()

const isOpen = ref<boolean>(false)

const containerClosedClasses = computed<string>(() => sidebarNavStyle.containerClosed())
const containerOpenClasses = computed<string>(() => sidebarNavStyle.containerOpen())
const toggleButtonClasses = computed<string>(() => sidebarNavStyle.toggleButton())
const toggleButtonIconClasses = computed<string>(() => sidebarNavStyle.toggleButtonIcon())
const navClasses = computed<string>(() => sidebarNavStyle.nav())
const itemsListClasses = computed<string>(() => sidebarNavStyle.itemsList())

function toggleSidebar(): void {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    :class="isOpen ? containerOpenClasses : containerClosedClasses"
  >
    <div>
      <slot
        :is-open="isOpen"
        name="header"
      />
    </div>
    <button
      :class="toggleButtonClasses"
      @click="toggleSidebar"
    >
      <AppIcon
        :icon="isOpen ? 'chevronLeft' : 'chevronRight'"
        :class="toggleButtonIconClasses"
      />
    </button>
    <nav :class="navClasses">
      <ul :class="itemsListClasses">
        <div
          v-for="item of props.items"
          :key="item.label"
          class="size-full "
        >
          <AppSidebarNavigationItem
            v-if="item.type === 'option'"
            :item="item"
          >
            <template #trigger="{ icon, label, to }">
              <slot
                :label="label"
                :icon="icon"
                :is-open="isOpen"
                :to="to"
                name="trigger"
              />
            </template>
            <template #content="{ label, keyboardShortcut }">
              <slot
                :label="label"
                :is-open="isOpen"
                :keyboard-shortcut="keyboardShortcut"
                name="content"
              />
            </template>
          </AppSidebarNavigationItem>

          <AppSidebarNavigationGroup
            v-else
            :item="item"
          >
            <AppSidebarNavigationItem
              v-for="option of item.items"
              :key="option.label"
              :item="option"
            >
              <template #trigger="{ icon, label, to }">
                <slot
                  :label="label"
                  :icon="icon"
                  :is-open="isOpen"
                  :to="to"
                  name="trigger"
                />
              </template>
              <template #content="{ label, keyboardShortcut }">
                <slot
                  :label="label"
                  :is-open="isOpen"
                  :keyboard-shortcut="keyboardShortcut"
                  name="content"
                />
              </template>
            </AppSidebarNavigationItem>
          </AppSidebarNavigationGroup>
        </div>
      </ul>
    </nav>
    <div>
      <slot
        :is-open="isOpen"
        name="footer"
      />
    </div>
  </div>
</template>
