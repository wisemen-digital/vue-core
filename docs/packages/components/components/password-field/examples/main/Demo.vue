<script setup lang="ts">
import { VcPasswordField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>

<template>
  <VcPasswordField
    v-model="value"
    label="Password"
    placeholder="Enter your password"
    class="w-72"
  />
</template>
