<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'

const props = defineProps<{
  label: string
}>()

const model = defineModel<null | string>({
  required: true,
})
</script>

<template>
  <div>
    <FormInput
      v-model="model"
      :label="props.label"
      :errors="{ _errors: [] }"
      :is-touched="false"
    />
  </div>
</template>
