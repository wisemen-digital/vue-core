<script setup lang="ts">
import AppInput from '@components/components/input/AppInput.vue'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppInput v-model="value" />
</template>
