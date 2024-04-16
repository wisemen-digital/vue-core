<script setup lang="ts">
import { ref } from 'vue'

import AppInput from '../../../components/src/components/input/AppInput.vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppInput v-model="value" />
</template>
