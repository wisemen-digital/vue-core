<script setup lang="ts">
import { Label } from 'radix-vue'
import { computed } from 'vue'

import { useFormLabelStyle } from '@/components/form-label/formLabel.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppInput from '@/components/input/AppInput.vue'
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
  tooltip?: null | string
}>(), {
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  tooltip: null,
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

const tooltipClasses = computed<string>(() => formLabelStyle.tooltip({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
}))

const hasTooltip = computed<boolean>(() => props.tooltip !== null && props.tooltip.trim() !== '')
</script>

<template>
  <Label :for="props.for">
    <AppTooltip
      :is-hidden="!hasTooltip"
      :content="props.tooltip"
      :disable-close-on-trigger-click="true"
      side="right"
    >
      <div class="flex w-fit flex-row items-center gap-x-1.5">
        <span :class="labelClasses">
          {{ label }}
        </span>

        <div
          v-if="hasTooltip"
          class="size-3.5"
        >
          <AppIcon
            :class="tooltipClasses"
            icon="alertCircle"
            size="full"
          />
        </div>
      </div>
    </AppTooltip>

    <AppInput :model-value="null" />

  </Label>
</template>
