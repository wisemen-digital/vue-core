<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'

interface Props {
  indicatorClasses: string
}

defineProps<Props>()
</script>

<template>
  <RadioGroupIndicator
    :class="indicatorClasses"
    force-mount
  />
</template>
