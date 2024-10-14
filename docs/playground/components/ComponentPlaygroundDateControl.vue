<script setup lang="ts">
// import { FormDatePicker } from '@wisemen/vue-core'

const _props = defineProps<{
  label: string
}>()

const _model = defineModel<Date | null>({
  required: true,
})
</script>

<template>
  <div>
    <!-- <FormDatePicker
      v-model="model"
      :label="props.label"
      :errors="{ _errors: [] }"
      :is-touched="false"
      :has-clear-button="true"
    /> -->
  </div>
</template>
