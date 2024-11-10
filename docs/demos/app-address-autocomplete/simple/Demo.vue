<script setup lang="ts">
import { AppAddressAutocomplete } from '@wisemen/vue-core'
import { ref } from 'vue'

const address = ref<any | null>(null)
</script>

<template>
  <AppAddressAutocomplete
    v-model="address"
    placeholder="Search for an address"
    icon-left="search"
    class="w-72"
  />
</template>
