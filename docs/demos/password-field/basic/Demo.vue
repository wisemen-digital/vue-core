<script setup lang="ts">
import { VcPasswordField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcPasswordField
    v-model="value"
    class="w-72"
  />
</template>
