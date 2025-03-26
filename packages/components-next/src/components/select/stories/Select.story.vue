<script setup lang="ts">
import { ref } from 'vue'

import Select from '@/components/select/Select.vue'

const value = ref<string | null>(null)
const items = Array.from(Array.from({ length: 2000 }), (_, i) => `${i + 1}`)
</script>

<template>
  <Story title="Select">
    <Select
      v-model="value"
      :display-fn="(v) => v"
      :filter="{
        isEnabled: true,
        isInline: true,
      }"
      :virtual-list="{
        isEnabled: true,
        items,
      }"
      class="w-72"
    >
      <!-- <SelectItem value="First item">
        First item
      </SelectItem>

      <SelectItem value="Second item">
        Second item
      </SelectItem>

      <SelectItem value="Third item">
        Third item
      </SelectItem> -->
    </Select>
  </Story>
</template>
