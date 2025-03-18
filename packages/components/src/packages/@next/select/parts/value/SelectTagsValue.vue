<script setup lang="ts">
import Button from '@/packages/@next/button/button/Button.vue'
import PopoverTrigger from '@/packages/@next/popover/parts/PopoverTrigger.vue'
</script>

<template>
  <div>
    <div class="flex">
      tag
      <Button
        size="sm"
        class="z-10"
      >
        x
      </Button>
    </div>

    <PopoverTrigger>
      <button class="absolute inset-0" />
    </PopoverTrigger>
  </div>
</template>
