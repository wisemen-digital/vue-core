<script setup lang="ts">
import { AppCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
const isIndeterminate = ref<boolean>(true)
</script>

<template>
  <div>
    <AppCheckbox
      v-model="model"
      :is-required="true"
      :is-indeterminate="isIndeterminate"
      label="Checkbox"
      hint="This is a checkbox."
    />
  </div>
</template>
