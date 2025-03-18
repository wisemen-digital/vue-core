<script setup lang="ts">
import Icon from '@/packages/@next/icon/Icon.vue'
import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { modelValue } = useInjectSelectContext()
</script>

<template>
  <SelectPopoverTrigger>
    <button class="size-full text-left px-md flex items-center justify-between">
      <span>
        {{ modelValue }}
      </span>

      <Icon
        icon="selectIconRight"
        class="size-4"
      />
    </button>
  </SelectPopoverTrigger>
</template>
