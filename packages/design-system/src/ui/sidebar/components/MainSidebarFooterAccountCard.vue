<script setup lang="ts">
import {
  ChevronDownIcon,
  LogOut01Icon,
} from '@wisemen/vue-core-icons'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'

import Avatar from '@/ui/avatar/avatar/Avatar.vue'
import AvatarLabel from '@/ui/avatar/avatar-label/AvatarLabel.vue'
import { UICard } from '@/ui/card/index'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuGroup from '@/ui/dropdown-menu/DropdownMenuGroup.vue'
import DropdownMenuItem from '@/ui/dropdown-menu/DropdownMenuItem.vue'
import { UIRowLayout } from '@/ui/row-layout/index'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

export interface MenuOption {
  icon: Component
  keyboardShortcut?: string
  label: string
  onSelect: () => void
}

const props = defineProps<{
  name: string
  avatarUrl?: string
  email: string
  menuOptions: MenuOption[]
  onSignOut: () => void
}>()

const i18n = useI18n()

const {
  isSidebarOpen,
  sidebarAvatarPadding,
  variant,
} = useMainSidebar()

function onSignOut(): void {
  if (props.onSignOut == null) {
    return
  }

  props.onSignOut()
}
</script>

<template>
  <DropdownMenu
    popover-side="right"
    popover-align="end"
  >
    <template #trigger>
      <ClickableElement>
        <button
          class="flex h-12 items-center justify-center"
          type="button"
        >
          <UICard
            :class="variant === 'icons-only' && !isSidebarOpen
              ? 'border-transparent'
              : `
                bg-primary-alt p-md py-sm
                hover:bg-tertiary/50
              `
            "
            :style="variant === 'icons-only' && !isSidebarOpen
              ? { padding: sidebarAvatarPadding }
              : undefined
            "
            class="flex w-full flex-col overflow-hidden text-left duration-100"
          >
            <UIRowLayout
              justify="between"
              class="overflow-hidden"
            >
              <UIRowLayout
                gap="md"
                class="overflow-hidden"
              >
                <Avatar
                  v-if="variant === 'icons-only' && !isSidebarOpen"
                  :name="props.name"
                  :src="props.avatarUrl"
                  size="xs"
                />
                <AvatarLabel
                  v-else
                  :name="props.name"
                  :src="props.avatarUrl"
                  :supporting-text="props.email"
                  size="xs"
                />
              </UIRowLayout>

              <ColumnLayout
                class="h-full self-start"
              >
                <ChevronDownIcon
                  v-if="variant !== 'icons-only' || isSidebarOpen"
                  class="size-4 shrink-0 text-quaternary"
                />
              </ColumnLayout>
            </UIRowLayout>
          </UICard>
        </button>
      </ClickableElement>
    </template>

    <template #content>
      <div class="bg-secondary">
        <div
          class="
            rounded-b-lg bg-primary/75 outline outline-gray-200
            dark:outline-gray-700/50
          "
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              v-for="option of props.menuOptions"
              :key="option.label"
              :icon="option.icon"
              :keyboard-shortcut="option.keyboardShortcut ?? null"
              :label="option.label"
              @select="option.onSelect()"
            />
          </DropdownMenuGroup>
        </div>

        <DropdownMenuGroup>
          <DropdownMenuItem
            :icon="LogOut01Icon"
            :label="i18n.t('components.sidebar.sign_out')"
            @select="onSignOut()"
          />
        </DropdownMenuGroup>
      </div>
    </template>
  </DropdownMenu>
</template>
