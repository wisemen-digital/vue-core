<script setup lang="ts">
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import type { Icon } from '@/icons/icons'

const props = defineProps<{
  icon?: Icon
  label: string
  size?: 'default' | 'lg' | 'sm'
}>()

const comboboxStyle = useComboboxStyle()
const groupText = computed<string>(() => comboboxStyle.groupText({
  size: props.size,
}))
</script>

<template>
  <ComboboxGroup>
    <ComboboxLabel class="px-2 py-1">
      <div class="flex items-center gap-2">
        <AppIcon
          v-if="props.icon"
          :icon="props.icon"
          :size="props.size"
        />
        <AppText
          :class="groupText"
          variant="caption"
        >
          {{ props.label }}
        </AppText>
      </div>
    </ComboboxLabel>

    <div class="pl-2">
      <slot />
    </div>
  </ComboboxGroup>
</template>
