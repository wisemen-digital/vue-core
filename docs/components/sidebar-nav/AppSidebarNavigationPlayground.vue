<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import type { NavigationItem } from '@wisemen/vue-core'
import {
  AppButton,
  AppIcon,
  AppKeyboardShortcut,
  AppSidebarNavigation,
  AppText,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = null

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
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <AppSidebarNavigation
      :items="(navigationItems as NavigationItem[])"
      v-bind="values"
    >
      <template #header>
        <div>
          Header
        </div>
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
        <div>
          Footer
        </div>
      </template>
    </AppSidebarNavigation>
  </ComponentPlayground>
</template>
