<script setup lang="ts">
import {
  BarChartSquare02Icon,
  LifeBuoy01Icon,
  Rows01Icon,
  Settings01Icon,
} from '@wisemen/vue-core-icons'
import {
  Motion,
  useReducedMotion,
} from 'motion-v'
import type { Component } from 'vue'
import { computed } from 'vue'

import { UIButton } from '@/ui/button/index'
import Sidebar from '@/ui/sidebar/components/Sidebar.vue'
import SidebarFooterAccountCard from '@/ui/sidebar/components/SidebarFooterAccountCard.vue'
import SidebarFooterFeaturedCard from '@/ui/sidebar/components/SidebarFooterFeaturedCard.vue'
import SidebarFooterNavigation from '@/ui/sidebar/components/SidebarFooterNavigation.vue'
import SidebarGlobalSearch from '@/ui/sidebar/components/SidebarGlobalSearch.vue'
import SidebarHeader from '@/ui/sidebar/components/SidebarHeader.vue'
import SidebarNavigationGroup from '@/ui/sidebar/components/SidebarNavigationGroup.vue'
import SidebarNavigationLink from '@/ui/sidebar/components/SidebarNavigationLink.vue'
import SidebarNavigationLinkBadge from '@/ui/sidebar/components/SidebarNavigationLinkBadge.vue'
import SidebarNavigationLinkStatus from '@/ui/sidebar/components/SidebarNavigationLinkStatus.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

const {
  isFloatingSidebar,
  isSidebarOpen,
  sidebarWidth,
} = useSidebar()

const isReduceMotionEnabledOnDevice = useReducedMotion()

export interface NavigationGroup {
  label: string
  links: NavigationItem[]
}
export interface NavigationItem {
  name: string
  icon: Component
  to: any
}

const navigation = computed<NavigationGroup[]>(() => ([
  {
    label: 'Main',
    links: [
      {
        name: 'Dashboard',
        icon: BarChartSquare02Icon,
        to: {
          path: '/',
        },
      },
      {
        name: 'Projects',
        icon: Rows01Icon,
        to: {
          path: '/projects',
        },
      },
    ],
  },
]))

const footerNavigation = computed<NavigationItem[]>(() => ([
  {
    name: 'Support',
    icon: LifeBuoy01Icon,
    to: {
      path: '/support',
    },
  },
  {
    name: 'Settings',
    icon: Settings01Icon,
    to: {
      path: '/test',
    },
  },
]))
</script>

<template>
  <div class="flex w-full overflow-hidden border border-primary">
    <Sidebar>
      <template #header>
        <SidebarHeader
          name="Wisemen"
        >
          <template #right>
            <SidebarGlobalSearch />
          </template>
        </SidebarHeader>
      </template>

      <template #navigation>
        <SidebarNavigationGroup
          v-for="group in navigation"
          :key="group.label"
          :label="group.label"
        >
          <SidebarNavigationLink
            v-for="link in group.links"
            :key="link.name"
            :to="link.to"
            :icon="link.icon"
            :label="link.name"
          >
            <template #right>
              <SidebarNavigationLinkBadge
                label="10"
              />
              <SidebarNavigationLinkStatus />
            </template>
          </SidebarNavigationLink>
        </SidebarNavigationGroup>
      </template>

      <template #footer>
        <SidebarFooterFeaturedCard />
        <SidebarFooterNavigation>
          <SidebarNavigationLink
            v-for="link in footerNavigation"
            :key="link.name"
            :to="link.to"
            :icon="link.icon"
            :label="link.name"
          />
        </SidebarFooterNavigation>
        <SidebarFooterAccountCard
          :menu-options="[{
            icon: Settings01Icon,
            label: 'Account settings',
            onSelect: () => {},
          }, {
            icon: LifeBuoy01Icon,
            label: 'Support',
            onSelect: () => {},
          }]"
          name="jeroen"
          email="jeroen.vc1@icloud.comsdfsfsfdf"
          @sign-out="() => {}"
        />
      </template>
    </Sidebar>

    <Motion
      :initial="{
        paddingLeft: isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0.5rem',
      }"
      :animate="{
        paddingLeft: isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0.5rem',
      }"
      :transition="{
        duration: isReduceMotionEnabledOnDevice ? 0 : 0.3,
        type: 'spring',
        bounce: 0,
      }"
      class="w-full"
    >
      <div class="h-dvh bg-secondary p-xl">
        <UIButton
          :label="isSidebarOpen ? 'Close sidebar' : 'Open sidebar'"
          @click="() => isSidebarOpen = !isSidebarOpen"
        />
      </div>
    </Motion>
  </div>
</template>
