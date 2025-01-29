<script setup lang="ts">
import { computed, ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import type {
  NavigationItem,
  NavigationItemOption,
} from '@/types/navigationItem.type'

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
    navigationItem: NavigationItemOption
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
    navigationItem: NavigationItemOption
  }) => any
}>()

const sidebarNavStyle = useSidebarNavStyle()

const isOpen = ref<boolean>(false)

const containerClosedClasses = computed<string>(() => sidebarNavStyle.containerClosed())
const containerOpenClasses = computed<string>(() => sidebarNavStyle.containerOpen())
const toggleButtonClasses = computed<string>(() => sidebarNavStyle.toggleButton())
const navClasses = computed<string>(() => sidebarNavStyle.nav())
const itemsListClasses = computed<string>(() => sidebarNavStyle.itemsList())
const headerClasses = computed<string>(() => sidebarNavStyle.header())

function toggleSidebar(): void {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    :class="isOpen ? containerOpenClasses : containerClosedClasses"
  >
    <div :class="headerClasses">
      <slot
        :is-open="isOpen"
        name="header"
      />
    </div>
    <button
      :class="toggleButtonClasses"
      aria-label="Toggle sidebar"
      @click="toggleSidebar"
    >
      <AppIcon
        :icon="isOpen ? 'chevronLeft' : 'chevronRight'"
      />
    </button>
    <nav :class="navClasses">
      <ul
        v-for="item of props.items"
        :key="item.label"
        :class="itemsListClasses"
        class="w-full"
      >
        <AppSidebarNavigationItem
          v-if="item.type === 'option'"
          :item="item"
        >
          <template #trigger="{ navigationItem }">
            <slot
              :navigation-item="navigationItem"
              :is-open="isOpen"
              name="trigger"
            />
          </template>
          <template #content="{ navigationItem }">
            <slot
              :navigation-item="navigationItem"
              :is-open="isOpen"
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
            <template #trigger="{ navigationItem }">
              <slot
                :navigation-item="navigationItem"
                :is-open="isOpen"
                name="trigger"
              />
            </template>
            <template #content="{ navigationItem }">
              <slot
                :navigation-item="navigationItem"
                :is-open="isOpen"
                name="content"
              />
            </template>
          </AppSidebarNavigationItem>
        </AppSidebarNavigationGroup>
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
