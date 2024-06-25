<script setup lang="ts">
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
  label: string
}>()

const comboboxStyle = useComboboxStyle()
const groupText = computed<string>(() => comboboxStyle.groupText())
</script>

<template>
  <ComboboxGroup>
    <ComboboxLabel class="px-2 py-1">
      <AppText
        :class="groupText"
        variant="caption"
      >
        {{ props.label }}
      </AppText>
    </ComboboxLabel>

    <div class="pl-2">
      <slot />
    </div>
  </ComboboxGroup>
</template>
