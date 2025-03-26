<script setup lang="ts">
import { ListboxItemIndicator as RekaListboxItemIndicator } from 'reka-ui'

import Icon from '@/components/icon/Icon.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

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
