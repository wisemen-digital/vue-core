<script setup lang="ts">
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import type {
  DropdownMenuRoute,
} from '@/types/dropdownMenu.type'

const props = defineProps<{
  item: DropdownMenuRoute
}>()

const style = dropdownMenuStyle()

const itemClasses = computed<string>(() => style.item({
  isDestructive: props.item.isDestructive,
}))

const itemIconClasses = computed<string>(() => style.itemIcon({
  isDestructive: props.item.isDestructive,
}))
</script>

<template>
  <RekaDropdownMenuItem
    :as-child="true"
    :disabled="props.item.isDisabled"
    :data-test-id="props.item.testId"
  >
    <RouterLink
      :class="itemClasses"
      :to="props.item.to"
    >
      <div class="flex items-center truncate">
        <AppIcon
          v-if="props.item.icon !== undefined"
          :class="itemIconClasses"
          :icon="props.item.icon"
        />

        <slot name="option-content">
          {{ props.item.label }}
        </slot>
      </div>

      <AppKeyboardShortcut
        v-if="props.item.keyboardKeys !== undefined"
        :keyboard-keys="props.item.keyboardKeys"
        :keyboard-classes="props.item.isDestructive ? 'border-error-50 bg-error-50' : 'border-transparent bg-secondary'"
        class="ml-4"
      />
    </RouterLink>
  </RekaDropdownMenuItem>
</template>
