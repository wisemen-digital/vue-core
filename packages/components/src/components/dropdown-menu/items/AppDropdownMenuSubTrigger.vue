<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'
import AppIcon from '@/components/icon/AppIcon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { DropdownMenuSubMenu } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: DropdownMenuSubMenu
}>()

const themeProviderContext = injectThemeProviderContext()

const style = dropdownMenuStyle()

const itemClasses = computed<string>(() => style.item())
const itemIconClasses = computed<string>(() => style.itemIcon())
const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())
</script>

<template>
  <DropdownMenuSub>
    <DropdownMenuSubTrigger
      :class="itemClasses"
      :data-test-id="props.item.testId"
    >
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="itemIconClasses"
      />

      <slot name="sub-menu-trigger-content">
        {{ props.item.label }}
      </slot>

      <AppIcon
        icon="chevronRight"
        class="ml-auto"
      />
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent
        :class="[dropdownClasses, dropdownContentClasses, themeProviderContext.theme.value]"
        :side-offset="10"
        class="dropdown-menu-variant-default"
      >
        <slot />
      </DropdownMenuSubContent>
    </dropdownmenuportal>
  </DropdownMenuSub>
</template>
