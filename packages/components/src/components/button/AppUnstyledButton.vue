<script setup lang="ts">
import { computed } from 'vue'

import { useButtonStyle } from '@/components/button/button.style'

const buttonStyle = useButtonStyle()
const unstyledButtonClasses = computed<string>(() => buttonStyle.unstyledButton())
</script>

<template>
  <button
    :class="unstyledButtonClasses"
    type="button"
  >
    <slot />
  </button>
</template>
