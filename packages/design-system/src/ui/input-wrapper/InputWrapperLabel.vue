<script setup lang="ts">
import { UIRowLayout } from '@/ui/row-layout/index'
import { UIText } from '@/ui/text/index'

const props = defineProps<{
  isHorizontal?: boolean
  isRequired: boolean
  for: string | null
  label: string | null
}>()
</script>

<template>
  <UIRowLayout
    v-if="props.label !== null"
    :class="{
      'pb-xs': !props.isHorizontal,
    }"
    gap="none"
  >
    <slot name="left" />

    <UIText
      :for="props.for ?? undefined"
      :text="props.label"
      :class="{
        'after:pl-xxs after:text-error-primary': props.isRequired,
      }"
      :data-label-required="props.isRequired ? '' : null"
      as="label"
      class="text-xs font-medium text-secondary"
    />

    <slot name="right" />
  </UIRowLayout>
</template>

<style scoped>
:deep([data-label-required]::after) {
  content: '*';
}
</style>
