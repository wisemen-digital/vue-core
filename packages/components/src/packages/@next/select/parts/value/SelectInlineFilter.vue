<script setup lang="ts">
import SelectFilter from '@/packages/@next/select/parts/SelectFilter.vue'
import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
</script>

<template>
  <SelectPopoverTrigger>
    <SelectFilter
      type="text"
      class="outline-none px-md text-sm"
    />
  </SelectPopoverTrigger>
</template>
