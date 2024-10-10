<script setup lang="ts">
import { CheckboxIndicator } from 'reka-ui'

import AppIcon from '@/components/icon/AppIcon.vue'

interface Props {
  isChecked: boolean
  isIndeterminate: boolean
  indicatorClasses: string
}

defineProps<Props>()
</script>

<template>
  <CheckboxIndicator>
    <slot
      v-if="isIndeterminate"
      name="icon-indeterminate"
    >
      <AppIcon
        :class="indicatorClasses"
        icon="minus"
      />
    </slot>
    <slot
      v-else-if="isChecked"
      name="icon-checked"
    >
      <AppIcon
        :class="indicatorClasses"
        icon="check"
      />
    </slot>
  </CheckboxIndicator>
</template>
