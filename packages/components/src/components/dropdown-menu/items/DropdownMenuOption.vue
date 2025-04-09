<script setup lang="ts">
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import Icon from '@/components/icon/Icon.vue'
import KeyboardShortcut from '@/components/keyboard/KeyboardShortcut.vue'
import type { DropdownMenuOption } from '@/types/dropdownMenu.type'

const props = defineProps<{
  item: DropdownMenuOption
}>()

const style = dropdownMenuStyle()

const itemClasses = computed<string>(() => style.item({ isDestructive: props.item.isDestructive }))

const itemIconClasses = computed<string>(() => style.itemIcon({ isDestructive: props.item.isDestructive }))
</script>

<template>
  <RekaDropdownMenuItem
    :class="itemClasses"
    :disabled="props.item.isDisabled"
    :data-test-id="props.item.testId"
    @select="props.item.onSelect"
  >
    <div class="flex items-center truncate">
      <Icon
        v-if="props.item.icon !== undefined"
        :class="itemIconClasses"
        :icon="props.item.icon"
      />

      <slot name="option-content">
        {{ props.item.label }}
      </slot>
    </div>

    <KeyboardShortcut
      v-if="props.item.keyboardKeys !== undefined"
      :keyboard-keys="props.item.keyboardKeys"
      :keyboard-classes="props.item.isDestructive ? 'border-error-50 bg-error-50' : 'border-transparent bg-secondary'"
      class="ml-4"
    />
  </RekaDropdownMenuItem>
</template>
