<script setup lang="ts">
import { AppTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppTextField
    v-model="value"
    class="w-72"
  />
</template>
