<script setup lang="ts">
import { DropdownMenuItem as RadixDropdownMenuItem } from 'radix-vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import AppText from '@/components/text/AppText.vue'
import type { DropdownMenuRouteOption } from '@/types/dropdownMenuItem.type'

const props = defineProps<{
  item: DropdownMenuRouteOption
}>()

const dropdownMenuStyle = useDropdownMenuStyle()

const containerClasses = computed<string>(() => dropdownMenuStyle.itemContainer())
const contentClasses = computed<string>(() => dropdownMenuStyle.itemContent())
const iconClasses = computed<string>(() => dropdownMenuStyle.itemOptionIcon({
  variant: props.item.variant,
}))
const textClasses = computed<string>(() => dropdownMenuStyle.itemText({
  variant: props.item.variant,
}))
</script>

<template>
  <RadixDropdownMenuItem
    v-if="props.item.isHidden !== true"
    :as-child="true"
    :data-test-id="props.item.testId"
    :disabled="props.item.isDisabled"
  >
    <RouterLink
      :to="props.item.to"
      :class="containerClasses"
    >
      <div :class="contentClasses">
        <AppIcon
          v-if="props.item.icon !== undefined"
          :icon="props.item.icon"
          :class="iconClasses"
          size="default"
        />

        <AppText
          :class="textClasses"
          variant="subtext"
        >
          {{ props.item.label }}
        </AppText>
      </div>

      <AppKeyboardShortcut
        v-if="props.item.keyboardShortcutKeys !== undefined"
        :keys="props.item.keyboardShortcutKeys"
        class="ml-4"
      />
    </RouterLink>
  </RadixDropdownMenuItem>
</template>
