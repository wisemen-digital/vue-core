<script setup lang="ts">
import { SelectGroup, SelectLabel } from 'radix-vue'
import { computed } from 'vue'

import { useSelectStyle } from '@/components/select/select.style'
import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
  label: string
}>()

const selectStyle = useSelectStyle()

const groupLabelContainerClasses = computed<string>(() => selectStyle.groupLabelContainer())
const groupLabelSlotClasses = computed<string>(() => selectStyle.groupLabelSlot())
const groupLabelTextClasses = computed<string>(() => selectStyle.groupLabelText())
</script>

<template>
  <SelectGroup>
    <SelectLabel :class="groupLabelContainerClasses">
      <AppText
        :class="groupLabelTextClasses"
        variant="caption"
      >
        {{ props.label }}
      </AppText>
    </SelectLabel>

    <div :class="groupLabelSlotClasses">
      <slot />
    </div>
  </SelectGroup>
</template>
