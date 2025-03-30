<script setup lang="ts">
import { VcDatePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const now = new Date()
const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
const twoWeeksFromNow = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)

const value = ref<Date | null>(null)
</script>

<template>
  <VcDatePicker
    v-model="value"
    :min-date="twoWeeksAgo"
    :max-date="twoWeeksFromNow"
    label="Example"
    class="w-84"
  />
</template>
