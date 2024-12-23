<script setup lang="ts">
import SelectValueBasic from '@/components/select-v2/blocks/values/SelectValueBasic.vue'
import SelectValueMultiple from '@/components/select-v2/blocks/values/SelectValueMultiple.vue'
import { injectSelectContext } from '@/components/select-v2/select.context'

const selectContext = injectSelectContext()
</script>

<template>
  <SelectValueMultiple v-if="selectContext.isMultiple.value" />
  <SelectValueBasic v-else />
</template>
