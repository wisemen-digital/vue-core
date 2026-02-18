<script setup lang="ts">
import {
  ChevronDownIcon,
  LogOut01Icon,
} from '@wisemen/vue-core-icons'
import type { Component } from 'vue'

import { UIAvatar } from '@/ui/avatar/index'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuGroup from '@/ui/dropdown-menu/DropdownMenuGroup.vue'
import DropdownMenuItem from '@/ui/dropdown-menu/DropdownMenuItem.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'
import Text from '@/ui/text/Text.vue'

export interface MenuOption {
  icon: Component
  keyboardShortcut?: string
  label: string
  onSelect: () => void
}

const props = defineProps<{
  name: string
  email: string
  menuOptions: MenuOption[]
  onSignOut: () => void
}>()

const {
  variant,
} = useSidebar()
</script>

<template>
  <DropdownMenu
    popover-side="right"
    popover-align="end"
  >
    <template #trigger>
      <ClickableElement>
        <button
          v-if="variant === 'default'"
          class="
            flex w-full flex-col overflow-hidden rounded-xl border
            border-secondary bg-primary-alt p-md text-left duration-100
            hover:bg-tertiary/50
          "
        >
          <RowLayout
            justify="between"
            class="overflow-hidden"
          >
            <RowLayout
              gap="md"
              class="overflow-hidden"
            >
              <UIAvatar
                :name="props.name"
              />
              <div class="flex w-full flex-col overflow-hidden">
                <Text
                  :text="props.name"
                  class="w-full text-xs font-semibold text-primary"
                />
                <Text
                  :text="props.email"
                  class="w-full text-xs text-tertiary"
                />
              </div>
            </RowLayout>

            <Component
              :is="ChevronDownIcon"
              class="size-4 shrink-0 text-quaternary"
            />
          </RowLayout>
        </button>
        <button
          v-else
          class="flex justify-center"
        >
          <UIAvatar
            :name="props.name"
          />
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
            label="Sign out"
            @select="props.onSignOut()"
          />
        </DropdownMenuGroup>
      </div>
    </template>
  </DropdownMenu>
</template>
