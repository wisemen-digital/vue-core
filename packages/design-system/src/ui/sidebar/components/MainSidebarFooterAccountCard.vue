<script setup lang="ts">
import {
  ChevronDownIcon,
  LogOut01Icon,
} from '@wisemen/vue-core-icons'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'

import { UIAvatar } from '@/ui/avatar/index'
import { UICard } from '@/ui/card/index'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuGroup from '@/ui/dropdown-menu/DropdownMenuGroup.vue'
import DropdownMenuItem from '@/ui/dropdown-menu/DropdownMenuItem.vue'
import { UIRowLayout } from '@/ui/row-layout/index'
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'
import { UIText } from '@/ui/text/index'

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
  isSidebarOpen, variant,
} = useMainSidebar()
</script>

<template>
  <DropdownMenu
    popover-side="right"
    popover-align="end"
  >
    <template #trigger>
      <ClickableElement>
        <button
          v-if="variant === 'icons-only' && !isSidebarOpen"
          class="flex h-12 items-center justify-center"
        >
          <UIAvatar
            :name="props.name"
          />
        </button>
        <button
          v-else
          class="rounded-xl"
        >
          <UICard
            class="
              flex h-12 w-full flex-col overflow-hidden bg-primary-alt p-md
              py-sm text-left duration-100
              hover:bg-tertiary/50
            "
          >
            <UIRowLayout
              justify="between"
              class="overflow-hidden"
            >
              <UIRowLayout
                gap="md"
                class="overflow-hidden"
              >
                <UIAvatar
                  :src="props.avatarUrl"
                  :name="props.name"
                />
                <div class="flex w-full flex-col overflow-hidden">
                  <UIText
                    :text="props.name"
                    class="w-full text-xs font-semibold text-primary"
                  />
                  <UIText
                    :text="props.email"
                    class="w-full text-xs text-tertiary"
                  />
                </div>
              </UIRowLayout>

              <Component
                :is="ChevronDownIcon"
                class="size-4 shrink-0 text-quaternary"
              />
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
            @select="props.onSignOut()"
          />
        </DropdownMenuGroup>
      </div>
    </template>
  </DropdownMenu>
</template>
