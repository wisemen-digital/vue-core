<script setup lang="ts">
import Button from '@/components/button/default-button/Button.vue'
import { useInjectToastContext } from '@/components/toast/toast.context'

const {
  actions,
  customClassConfig,
  style,
} = useInjectToastContext()
</script>

<template>
  <div
    :class="style.actions({
      class: customClassConfig.actions,
    })"
  >
    <Button
      v-for="action of actions"
      :key="action.label"
      v-bind="action"
      :size="action.size ?? 'sm'"
    >
      {{ action.label }}
    </Button>
  </div>
</template>
