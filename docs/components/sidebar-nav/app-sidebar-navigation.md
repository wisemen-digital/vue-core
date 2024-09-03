---
sidebar: auto
---

# AppSidebarNavigation


<!-- @include: ./app-sidebar-navigation-meta.md -->

## Types

::: code-group
```js [NavigationItem]
export interface NavigationItemGroup {
  items: NavigationItemOption[]
  label: string
  type: 'group'
}

export interface NavigationItemOption {
  icon: Icon
  keyboardShortcut?: KeyboardShortcut
  label: string
  to: RouteLocationTyped<keyof Routes>
  type: 'option'
}

export type NavigationItem = NavigationItemGroup | NavigationItemOption
```
::: 

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import {
  AppButton,
  AppIcon,
  AppKeyboardShortcut,
  AppSidebarNavigation,
  AppText,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const navigationItems = ref<NavigationItem[]>([
  {
    type: 'group',
    label: 'Group',
    items: [
      {
        icon: 'warning',
        label: 'Invoices',
        to: {
          name: 'test',
        },
        type: 'option',
      },
      {
        icon: 'eye',
        label: 'Statistics',
        to: {
          name: 'test',
        },
        type: 'option',
      },
    ],
  },
])
</script>
  
<template>
  <AppSidebarNavigation
    :items="(navigationItems as NavigationItem[])"
    v-bind="values"
  >
    <template #header>
      // Header: Company logo for example
    </template>
    <template #trigger="{ icon, isOpen, label }">
      <AppButton
        variant="ghost"
        class="w-full"
      >
        <div class="flex gap-2">
          <AppIcon
            :icon="icon"
          />
          <AppText
            v-if="isOpen"
            variant="subtext"
          >
            {{ label }}
          </AppText>
        </div>
      </AppButton>
    </template>
    <template #content="{ keyboardShortcut, label }">
      <div class="flex items-center gap-x-2 p-1.5">
        <AppText
          variant="caption"
        >
          {{ `Go to ${label}` }}
        </AppText>

        <AppKeyboardShortcut
          v-if="keyboardShortcut !== undefined"
          :keys="keyboardShortcut.keys"
          variant="bordered"
        />
      </div>
    </template>
    <template #footer>
      // Footer: User avatar with some actions for example
    </template>
  </AppSidebarNavigation>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/dropdown-menu/AppDropdownMenu.vue).
