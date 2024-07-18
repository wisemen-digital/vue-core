<script setup lang="ts">
import { Label } from 'radix-vue'
import { computed } from 'vue'

import { useFormLabelStyle } from '@/components/form-label/formLabel.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  for: string
  label: string
  tooltip?: string
}>(), {
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
})

const label = computed<string>(() => {
  if (props.isRequired) {
    return `${props.label} *`
  }

  return props.label
})

const formLabelStyle = useFormLabelStyle()

const labelClasses = computed<string>(() => formLabelStyle.label({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
}))

const hasTooltip = computed<boolean>(() => props.tooltip !== undefined && props.tooltip !== '')
</script>

<template>
  <Label :for="props.for">
    <AppTooltip
      :is-hidden="!hasTooltip"
      :content="props.tooltip ?? ''"
      :disable-close-on-trigger-click="true"
      side="right"
    >
      <div class="flex w-fit flex-row items-center gap-2">
        <span :class="labelClasses">
          {{ label }}
        </span>

        <AppIcon
          v-if="hasTooltip"
          class="text-muted-foreground"
          icon="alertCircle"
          size="sm"
        />
      </div>
    </AppTooltip>

  </Label>
</template>
