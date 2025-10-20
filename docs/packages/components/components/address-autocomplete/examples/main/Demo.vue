<script setup lang="ts">
import type { Address } from '@wisemen/vue-core-components'
import { VcAddressAutocomplete } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const address = ref<Address | null>(null)
</script>

<template>
  <div>
    <VcAddressAutocomplete
      v-model="address"
      label="Address"
      placeholder="Search for an address"
      class="w-72"
    />
  </div>
</template>
