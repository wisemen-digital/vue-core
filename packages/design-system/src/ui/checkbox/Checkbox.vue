<script setup lang="ts">
import type { BaseCheckboxProps } from '@/ui/checkbox/base/baseCheckbox.props'
import BaseCheckbox from '@/ui/checkbox/base/BaseCheckbox.vue'

const props = defineProps<Omit<BaseCheckboxProps, 'isIndeterminate'>>()

const emit = defineEmits<{
  blur: []
}>()

const modelValue = defineModel<boolean>({
  required: true,
})
</script>

<template>
  <BaseCheckbox
    v-bind="props"
    v-model="modelValue"
    @blur="emit('blur')"
  />
</template>
