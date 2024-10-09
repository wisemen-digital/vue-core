<script setup lang="ts" generic="TItem extends AcceptableValue">
// import type { AcceptableValue } from '@wisemen/vue-core'
// import { FormLabel, FormSwitch } from '@wisemen/vue-core'

interface Props {

  label: string
}

const props = defineProps<Props>()

const model = defineModel<boolean>({
  required: true,
})
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- <FormSwitch
      v-model="model"
      :is-touched="false"
      :label="props.label"
      :errors="{ _errors: [] }"
    />
    <FormLabel
      :label="props.label"
      for=""
    /> -->
    <input
      v-model="model"
      type="checkbox"
    >
  </div>
</template>
