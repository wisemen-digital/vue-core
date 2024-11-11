<script setup lang="ts">
import { VcTextarea } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcTextarea
    v-model="value"
    class="w-72"
  />
</template>
