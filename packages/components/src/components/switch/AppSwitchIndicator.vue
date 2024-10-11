<script setup lang="ts">
import { SwitchThumb } from 'reka-ui'

interface Props {
  isChecked: boolean
  indicatorClasses: string
}

defineProps<Props>()
</script>

<template>
  <SwitchThumb :class="indicatorClasses" />
</template>
