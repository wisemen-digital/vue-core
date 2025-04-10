<script setup lang="ts">
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<any>({
  from: null,
  until: null,
})
</script>

<template>
  <VcDateRangePicker
    v-model="value"
    :show-two-months="true"
    label="Calendar"
  />
</template>
