<script setup lang="ts">
import { CheckboxIndicator } from 'reka-ui'

import Icon from '@/components/icon/Icon.vue'

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
      <Icon
        :class="indicatorClasses"
        icon="minus"
      />
    </slot>

    <slot
      v-else-if="isChecked"
      name="icon-checked"
    >
      <Icon
        :class="indicatorClasses"
        icon="check"
      />
    </slot>
  </CheckboxIndicator>
</template>
