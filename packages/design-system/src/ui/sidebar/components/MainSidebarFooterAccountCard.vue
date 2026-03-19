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
import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuGroup from '@/ui/dropdown-menu/DropdownMenuGroup.vue'
import DropdownMenuItem from '@/ui/dropdown-menu/DropdownMenuItem.vue'
import { UIRowLayout } from '@/ui/row-layout/index'
import MainSidebarLabelTransition from '@/ui/sidebar/components/MainSidebarLabelTransition.vue'
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
  isSidebarOpen,
  sidebarIconCellSize,
  variant,
} = useMainSidebar()

const accountCardGridTemplateColumns = `${sidebarIconCellSize} 1fr`

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
                bg-primary-alt p-md py-sm pl-xs
                hover:bg-tertiary/50
              `
            "
            :style="{
              gridTemplateColumns: accountCardGridTemplateColumns,
            }"
            class="grid w-full gap-xs overflow-hidden text-left duration-100"
          >
            <UIRowLayout

              align="center"
              justify="center"
              class="h-full"
            >
              <UIAvatar
                :src="props.avatarUrl"
                :name="props.name"
              />
            </UIRowLayout>

            <MainSidebarLabelTransition>
              <UIRowLayout
                justify="between"
                align="center"
                gap="xxs"
                class="overflow-hidden"
              >
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
                <ColumnLayout
                  align="start"
                  class="h-full"
                >
                  <ChevronDownIcon
                    class="mt-xxs size-4 shrink-0 text-quaternary"
                  />
                </ColumnLayout>
              </UIRowLayout>
            </MainSidebarLabelTransition>
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
