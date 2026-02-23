<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core-components'
import type { Temporal } from 'temporal-polyfill'
import { ref } from 'vue'

const value = ref<Temporal.PlainDate | null>(null)
</script>

<template>
  <VcDateField
    v-model="value"
    class="w-62"
    label="Select a date"
    hint="Select a weekday for your delivery"
  />
</template>
