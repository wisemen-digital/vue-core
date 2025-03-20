<script setup lang="ts">
import { useId } from 'vue'

import { mergeClasses } from '@/customClassVariants'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'
import { useInjectSelectGroupContext } from '@/packages/@next/select/selectGroup.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()

const groupContext = useInjectSelectGroupContext()

const id = useId()

groupContext.labelId = id
</script>

<template>
  <span
    :id="groupContext.labelId"
    :class="style.groupLabel({
      class: mergeClasses(customClassConfig.groupLabel, classConfig?.groupLabel),
    })"
  >
    <slot />
  </span>
</template>
