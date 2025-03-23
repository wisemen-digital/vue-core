<script setup lang="ts">
import { ListboxItemIndicator as RekaListboxItemIndicator } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import Icon from '@/packages/@next/icon/Icon.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()
</script>

<template>
  <RekaListboxItemIndicator>
    <slot>
      <Icon
        :class="style.itemIndicator({
          class: mergeClasses(customClassConfig.itemIndicator, classConfig?.itemIndicator),
        })"
        icon="check"
      />
    </slot>
  </RekaListboxItemIndicator>
</template>
