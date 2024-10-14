<script setup lang="ts">
import AppCheckbox from '@/components/checkbox/AppCheckbox.vue'
import AppTableCell from '@/components/table/AppTableCell.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <AppTableCell
    :is-primary-cell="true"
    class="flex items-center gap-x-1"
  >
    <AppCheckbox :model-value="false" />
    {{ props.label }}
  </AppTableCell>
</template>
