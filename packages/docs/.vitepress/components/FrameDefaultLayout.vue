<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createApp } from 'whyframe:app'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  createApp(el.value)
})
</script>

<template>
  <div ref="el" />
</template>
