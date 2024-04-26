<script setup lang="ts">
import FormInput from '@components/components/input/FormInput.vue'

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
    />
  </div>
</template>
