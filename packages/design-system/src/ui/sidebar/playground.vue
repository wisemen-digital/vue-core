<script setup lang="ts">
import {
  BarChartSquare02Icon,
  CalendarIcon,
  File05Icon,
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
import MainSidebarFooterAccountCard from '@/ui/sidebar/components/MainSidebarFooterAccountCard.vue'
import MainSidebarFooterFeaturedCard from '@/ui/sidebar/components/MainSidebarFooterFeaturedCard.vue'
import MainSidebarFooterNavigation from '@/ui/sidebar/components/MainSidebarFooterNavigation.vue'
import MainSidebarGlobalSearch from '@/ui/sidebar/components/MainSidebarGlobalSearch.vue'
import MainSidebarHeader from '@/ui/sidebar/components/MainSidebarHeader.vue'
import MainSidebarNavigationGroup from '@/ui/sidebar/components/MainSidebarNavigationGroup.vue'
import MainSidebarNavigationLink from '@/ui/sidebar/components/MainSidebarNavigationLink.vue'
import MainSidebarNavigationLinkBadge from '@/ui/sidebar/components/MainSidebarNavigationLinkBadge.vue'
import MainSidebarNavigationLinkStatus from '@/ui/sidebar/components/MainSidebarNavigationLinkStatus.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'
import MainSidebar from '@/ui/sidebar/MainSidebar.vue'

const {
  isFloatingSidebar,
  isSidebarOpen,
  sidebarWidth,
} = useMainSidebar()

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
  {
    label: 'Other',
    links: [
      {
        name: 'Documents',
        icon: File05Icon,
        to: {
          path: '/others',
        },
      },
      {
        name: 'Calendar',
        icon: CalendarIcon,
        to: {
          path: '/other-projects',
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
  <div
    class="
      relative flex h-[80dvh] w-full overflow-hidden rounded-lg border
      border-primary
    "
  >
    <MainSidebar
      variant="icons-only"
    >
      <template #header>
        <MainSidebarHeader
          name="Wisemen"
        >
          <template #right>
            <MainSidebarGlobalSearch />
          </template>
        </MainSidebarHeader>
      </template>

      <template #navigation>
        <MainSidebarNavigationGroup
          v-for="group in navigation"
          :key="group.label"
          :label="group.label"
        >
          <MainSidebarNavigationLink
            v-for="link in group.links"
            :key="link.name"
            :to="link.to"
            :icon="link.icon"
            :label="link.name"
          >
            <template #right>
              <MainSidebarNavigationLinkBadge
                label="10"
              />
              <MainSidebarNavigationLinkStatus />
            </template>
          </MainSidebarNavigationLink>
        </MainSidebarNavigationGroup>
      </template>

      <template #footer>
        <MainSidebarFooterFeaturedCard />
        <MainSidebarFooterNavigation>
          <MainSidebarNavigationLink
            v-for="link in footerNavigation"
            :key="link.name"
            :to="link.to"
            :icon="link.icon"
            :label="link.name"
          />
        </MainSidebarFooterNavigation>
        <MainSidebarFooterAccountCard
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
    </MainSidebar>

    <Motion
      :initial="{
        paddingLeft: isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0',
      }"
      :animate="{
        paddingLeft: isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0',
      }"
      :transition="{
        duration: isReduceMotionEnabledOnDevice ? 0 : 0.3,
        type: 'spring',
        bounce: 0,
      }"
      class="size-full"
    >
      <div class="h-full rounded-l-lg bg-secondary p-xl">
        <UIButton
          :label="isSidebarOpen ? 'Close sidebar' : 'Open sidebar'"
          @click="() => isSidebarOpen = !isSidebarOpen"
        />
      </div>
    </Motion>
  </div>
</template>
