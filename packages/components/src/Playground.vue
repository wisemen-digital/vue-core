<script setup lang="ts">
import Checkbox from '@/components/checkbox/Checkbox.vue'
import Switch from '@/components/switch/Switch.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <div class="p-8xl">
    <Switch
      :model-value="true"
      label="test"
    />

    <Checkbox label="test" />
  </div>
</template>
