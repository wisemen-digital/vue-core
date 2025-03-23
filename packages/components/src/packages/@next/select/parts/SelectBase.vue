<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import SelectBaseInlineSearch from '@/packages/@next/select/parts/SelectBaseInlineSearch.vue'
import SelectBaseMultiple from '@/packages/@next/select/parts/SelectBaseMultiple.vue'
import SelectBaseSingle from '@/packages/@next/select/parts/SelectBaseSingle.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  hasInlineSearchInput,
  isMultiple,
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()
</script>

<template>
  <div
    :class="style.base({
      class: mergeClasses(customClassConfig.base, classConfig?.base),
    })"
  >
    <slot>
      <SelectBaseInlineSearch v-if="hasInlineSearchInput" />
      <SelectBaseMultiple v-else-if="isMultiple" />
      <SelectBaseSingle v-else />
    </slot>
  </div>
</template>
