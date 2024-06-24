<script setup lang="ts">
import { computed } from 'vue'

import { useFormGroupStyle } from '@/components/form-group/formGroup.style'

const formGroupStyle = useFormGroupStyle()

const groupClasses = computed<string>(() => formGroupStyle.group())
</script>

<template>
  <div :class="groupClasses">
    <slot />
  </div>
</template>
