<script setup lang="ts">
import { Label } from 'radix-vue'
import { computed } from 'vue'

import { useFormLabelStyle } from '@/components/form-label/formLabel.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

const props = withDefaults(defineProps<{
  /**
   * Whether the label is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether the label is invalid.
   */
  isInvalid?: boolean
  /**
   * Whether the label is required.
   */
  isRequired?: boolean
  /**
   * The id of the form element.
   */
  for: string
  /**
   * The label of the form.
   */
  label: string
  /**
   * The tooltip of the label.
   */
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

const hasTooltip = computed<boolean>(() => props.tooltip !== undefined)
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
