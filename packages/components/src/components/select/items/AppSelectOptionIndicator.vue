<script setup lang="ts">
import { ListboxItemIndicator } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { selectStyle } from '@/components/select/select.style.js'
import { injectSelectOptionContext } from '@/components/select/selectOption.context.js'

const selectOptionContext = injectSelectOptionContext()

const style = selectStyle()

const optionIndicatorClasses = computed<string>(() => style.optionIndicator())
</script>

<template>
  <div
    v-if="!selectOptionContext.isSelected.value"
    class="opacity-0"
  >
    <slot>
      <AppIcon
        :class="optionIndicatorClasses"
        icon="check"
      />
    </slot>
  </div>

  <ListboxItemIndicator>
    <slot>
      <AppIcon
        :class="optionIndicatorClasses"
        icon="check"
      />
    </slot>
  </ListboxItemIndicator>
</template>
