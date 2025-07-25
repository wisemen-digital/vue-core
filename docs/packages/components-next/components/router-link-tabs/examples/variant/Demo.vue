<script setup lang="ts">
import {
  VcRouterLinkTabs,
  VcRouterLinkTabsItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex flex-col items-center gap-2">
      <p>`underline`</p>
      <VcRouterLinkTabs>
        <template #items>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/router-link-tabs/router-link-tabs.html"
          >
            Router Link tabs docs
          </VcRouterLinkTabsItem>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/tabs/tabs.html"
          >
            Tabs docs
          </VcRouterLinkTabsItem>
        </template>
      </VcRouterLinkTabs>
    </div>
    <div class="flex flex-col items-center gap-2">
      <p>`button-border`</p>
      <VcRouterLinkTabs variant="button-border">
        <template #items>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/router-link-tabs/router-link-tabs.html"
          >
            Router Link tabs docs
          </VcRouterLinkTabsItem>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/tabs/tabs.html"
          >
            Tabs docs
          </VcRouterLinkTabsItem>
        </template>
      </VcRouterLinkTabs>
    </div>
    <div class="flex flex-col items-center gap-2">
      <p>`button-brand`</p>
      <VcRouterLinkTabs variant="button-brand">
        <template #items>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/router-link-tabs/router-link-tabs.html"
          >
            Router Link tabs docs
          </VcRouterLinkTabsItem>
          <VcRouterLinkTabsItem
            to="/vue-core/packages/components-next/components/tabs/tabs.html"
          >
            Tabs docs
          </VcRouterLinkTabsItem>
        </template>
      </VcRouterLinkTabs>
    </div>
  </div>
</template>
