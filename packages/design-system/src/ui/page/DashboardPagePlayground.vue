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

import type { PageBreadcrumb } from '@/ui/page/dashboardPage.type'
import DashboardPage from '@/ui/page/DashboardPage.vue'
import DashboardPageContent from '@/ui/page/DashboardPageContent.vue'
import MainSidebarFooterAccountCard from '@/ui/sidebar/components/MainSidebarFooterAccountCard.vue'
import MainSidebarFooterFeaturedCard from '@/ui/sidebar/components/MainSidebarFooterFeaturedCard.vue'
import MainSidebarGlobalSearch from '@/ui/sidebar/components/MainSidebarGlobalSearch.vue'
import MainSidebarHeaderLogoWithText from '@/ui/sidebar/components/MainSidebarHeaderLogoWithText.vue'
import MainSidebarNavigationGroup from '@/ui/sidebar/components/MainSidebarNavigationGroup.vue'
import MainSidebarNavigationLink from '@/ui/sidebar/components/MainSidebarNavigationLink.vue'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'
import MainSidebar from '@/ui/sidebar/MainSidebar.vue'

const {
  isFloatingSidebar,
  isSidebarOpen,
  sidebarWidth,
  variant,
} = useMainSidebar()

const isReduceMotionEnabledOnDevice = useReducedMotion()

interface NavigationGroup {
  label: string
  links: NavigationItem[]
}

interface NavigationItem {
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
          path: '/documents',
        },
      },
      {
        name: 'Calendar',
        icon: CalendarIcon,
        to: {
          path: '/calendar',
        },
      },
    ],
  },
]))

const footerNavigation = computed<NavigationGroup[]>(() => ([
  {
    label: '',
    links: [
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
          path: '/settings',
        },
      },
    ],
  },
]))

const breadcrumbs = computed<PageBreadcrumb[]>(() => ([
  {
    label: 'Projects',
    to: {
      path: '/projects',
    },
  },
  {
    label: 'Project Alpha',
    to: {
      path: '/projects/alpha',
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
    <MainSidebar>
      <template #header>
        <MainSidebarHeaderLogoWithText
          url="../../../storybook-assets/wisemen-logo.png"
          name="Wisemen"
        >
          <template #right>
            <MainSidebarGlobalSearch />
          </template>
        </MainSidebarHeaderLogoWithText>
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
          />
        </MainSidebarNavigationGroup>
      </template>

      <template #footer>
        <MainSidebarFooterFeaturedCard />
        <MainSidebarNavigationGroup
          v-for="group in footerNavigation"
          :key="group.label"
          :label="group.label"
        >
          <MainSidebarNavigationLink
            v-for="link in group.links"
            :key="link.name"
            :to="link.to"
            :icon="link.icon"
            :label="link.name"
          />
        </MainSidebarNavigationGroup>
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
          avatar-url="../../../storybook-assets/profile-picture.jpg"
          name="Jeroen Van Caekenberghe"
          email="jeroen.vancaekenberghe@wisemen.digital"
          @sign-out="() => {}"
        />
      </template>
    </MainSidebar>

    <Motion
      :initial="{
        paddingLeft: variant === 'icons-only' ? sidebarWidth : isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0.5rem',
      }"
      :animate="{
        paddingLeft: variant === 'icons-only' ? sidebarWidth : isSidebarOpen && !isFloatingSidebar ? sidebarWidth : '0.5rem',
      }"
      :transition="{
        duration: isReduceMotionEnabledOnDevice ? 0 : variant === 'icons-only' ? 0.1 : 0.3,
        type: 'spring',
        bounce: 0,
      }"
      class="size-full overflow-hidden bg-secondary p-md"
    >
      <div
        class="
          size-full overflow-auto rounded-xl border border-secondary bg-primary
          shadow-sm/5
          dark:shadow-none
        "
      >
        <DashboardPage
          :breadcrumbs="breadcrumbs"
          title="Dashboard"
        >
          <DashboardPageContent />
        </DashboardPage>
      </div>
    </Motion>
  </div>
</template>
