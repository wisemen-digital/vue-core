<script setup lang="ts">
import { UIRowLayout } from '@/ui/row-layout/index'
import { UIText } from '@/ui/text/index'
import { twMerge } from '@/utils/twMerge.util'

const props = defineProps<{
  isHorizontal?: boolean
  isLabelHidden?: boolean
  isRequired: boolean
  for: string | null
  label: string | null
}>()
</script>

<template>
  <UIRowLayout
    v-if="props.label !== null"
    :class="[
      {
        'pb-xs': !props.isHorizontal,
      },
      props.isLabelHidden && 'sr-only',
    ]"
    gap="none"
  >
    <slot name="left" />

    <UIText
      :for="props.for ?? undefined"
      :text="props.label"
      :class="twMerge(
        'text-xs font-medium text-secondary',
        props.isRequired ? 'after:pl-xxs after:text-error-primary' : '',
      )"
      :data-label-required="props.isRequired ? '' : null"

      as="label"
    />

    <slot name="right" />
  </UIRowLayout>
</template>

<style scoped>
:deep([data-label-required]::after) {
  content: '*';
}
</style>
