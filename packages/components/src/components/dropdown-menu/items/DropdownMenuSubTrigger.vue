<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import Icon from '@/components/icon/Icon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { DropdownMenuSubMenu } from '@/types/dropdownMenu.type'
import { ThemeUtil } from '@/utils/theme.util'

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
      :item="props.item"
      :class="itemClasses"
      :data-test-id="props.item.testId"
    >
      <Icon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="itemIconClasses"
      />

      <slot name="sub-menu-trigger-content">
        {{ props.item.label }}
      </slot>

      <Icon
        icon="chevronRight"
        class="text-tertiary ml-auto size-4"
      />
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent
        :class="[
          dropdownClasses,
          dropdownContentClasses,
          ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
        ]"
        :side-offset="10"
        class="dropdown-menu-default"
      >
        <slot />
      </DropdownMenuSubContent>
    </dropdownmenuportal>
  </DropdownMenuSub>
</template>
