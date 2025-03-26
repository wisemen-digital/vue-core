<script setup lang="ts">
import SelectBaseInlineSearch from '@/components/select/parts/SelectBaseInlineSearch.vue'
import SelectBaseMultiple from '@/components/select/parts/SelectBaseMultiple.vue'
import SelectBaseSingle from '@/components/select/parts/SelectBaseSingle.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

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
