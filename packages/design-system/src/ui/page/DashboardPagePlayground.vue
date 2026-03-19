<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BarChartSquare02Icon,
  Bell01Icon,
  CalendarIcon,
  File05Icon,
  InfoCircleIcon,
  LifeBuoy01Icon,
  PlusIcon,
  Rows01Icon,
  SearchMdIcon,
  Settings01Icon,
  Trash01Icon,
} from '@wisemen/vue-core-icons'
import type { Component } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import IconButton from '@/ui/button/icon/IconButton.vue'
import { UIButton } from '@/ui/button/index'
import MainContent from '@/ui/layout/MainContent.vue'
import MainLayoutContainer from '@/ui/layout/MainLayoutContainer.vue'
import type { PageBreadcrumb } from '@/ui/page/dashboardPage.type'
import DashboardPage from '@/ui/page/DashboardPage.vue'
import DashboardPageActions from '@/ui/page/DashboardPageActions.vue'
import DashboardPageContent from '@/ui/page/DashboardPageContent.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import MainSidebarFooterAccountCard from '@/ui/sidebar/components/MainSidebarFooterAccountCard.vue'
import MainSidebarFooterFeaturedCard from '@/ui/sidebar/components/MainSidebarFooterFeaturedCard.vue'
import MainSidebarGlobalSearch from '@/ui/sidebar/components/MainSidebarGlobalSearch.vue'
import MainSidebarHeaderLogoWithText from '@/ui/sidebar/components/MainSidebarHeaderLogoWithText.vue'
import MainSidebarNavigationGroup from '@/ui/sidebar/components/MainSidebarNavigationGroup.vue'
import MainSidebarNavigationLink from '@/ui/sidebar/components/MainSidebarNavigationLink.vue'
import MainSidebar from '@/ui/sidebar/MainSidebar.vue'
import Tabs from '@/ui/tabs/Tabs.vue'
import TabsItem from '@/ui/tabs/TabsItem.vue'
import TabsList from '@/ui/tabs/TabsList.vue'

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

const tabsModelValue = ref<string>('tab1')
</script>

<template>
  <div
    class="
      relative flex h-[80dvh] w-full overflow-hidden rounded-lg border
      border-primary
    "
  >
    <MainLayoutContainer>
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

      <MainContent>
        <DashboardPage
          :breadcrumbs="breadcrumbs"
          title="Dashboard"
        >
          <template #actions>
            <IconButton
              :icon="Bell01Icon"
              label="Notifications"
              variant="tertiary"
            />
            <IconButton
              :icon="SearchMdIcon"
              label="global search"
              variant="tertiary"
            />
          </template>
          <template #left>
            <RowLayout>
              <Tabs
                v-model="tabsModelValue"
                variant="button-border"
              >
                <TabsList>
                  <TabsItem
                    label="Tab"
                    value="tab1"
                  />
                  <TabsItem
                    label="Tab"
                    value="tab2"
                  />
                  <TabsItem
                    label="Tab"
                    value="tab3"
                  />
                </TabsList>
              </Tabs>
            </RowLayout>
          </template>

          <template #right>
            <UIButton
              :icon-left="Trash01Icon"
              variant="destructive-secondary"
              size="md"
              label="Destructive"
            />
            <UIButton
              :icon-left="InfoCircleIcon"
              variant="secondary"
              size="md"
              label="Secondary"
            />
            <UIButton
              :icon-left="PlusIcon"
              size="md"
              label="Button"
            />
          </template>
          <DashboardPageActions>
            <template #left>
              <div>
                <UIButton
                  :icon-right="ArrowRightIcon"
                  variant="secondary"
                  size="md"
                  label="Page Actions Left"
                />
              </div>
            </template>
            <template #right>
              <div>
                <UIButton
                  :icon-left="ArrowLeftIcon"
                  variant="secondary"
                  size="md"
                  label="Page Actions Right"
                />
              </div>
            </template>
          </DashboardPageActions>
          <DashboardPageContent />
        </DashboardPage>
      </MainContent>
    </MainLayoutContainer>
  </div>
</template>
