<script setup lang="ts">
import {
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperRoot,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import type { StepItem } from '@/types/stepper.type'

import type { StepperStyleProps } from './stepper.style'
import { useStepperStyle } from './stepper.style'

const props = withDefaults(
  defineProps<{
    /**
     * An array of steps to display in the stepper
     */
    steps: StepItem[]
    /**
     * The size of the stepper trigger, containing the icon
     */
    triggerSize?: StepperStyleProps['triggerSize']
  }>(),
  {
    triggerSize: 'default',
  },
)

defineSlots<{
  /** Override the rendering of the step trigger. Ex: render something else than the step icon */
  trigger: (props: { isCompleted?: boolean, isDisabled?: boolean, isInvalid?: boolean }) => any
  /** Override the rendering of the validation indications */
  validation: (props: { isCompleted?: boolean, isInvalid?: boolean }) => any
}>()

const activeStepId = defineModel<number>({
  required: true,
})

const stepperStyle = useStepperStyle()

const rootClasses = computed<string>(() => stepperStyle.root())
const itemClasses = computed<string>(() => stepperStyle.item())
const triggerClasses = computed<string>(() => stepperStyle.trigger({
  triggerSize: props.triggerSize,
}))
const triggerIconClasses = computed<string>(() => stepperStyle.triggerIcon({
  triggerSize: props.triggerSize,
}))
const separatorClasses = computed<string>(() => stepperStyle.separator({
  triggerSize: props.triggerSize,
}))
const stepTextContainerClasses = computed<string>(() => stepperStyle.stepTextContainer())
const stepTitleClasses = computed<string>(() => stepperStyle.stepTitle())
const stepDescriptionClasses = computed<string>(() => stepperStyle.stepDescription())
const validationIconsClasses = computed<string>(() => stepperStyle.validationIcons())
</script>

<template>
  <StepperRoot
    v-model="activeStepId"
    :class="rootClasses"
  >
    <StepperItem
      v-for="item in props.steps"
      :key="item.stepId"
      :step="item.stepId"
      :class="itemClasses"
      :disabled="item.isDisabled"
      :completed="item.isCompleted"
    >
      <StepperTrigger :class="triggerClasses">
        <slot
          :is-disabled="item.isDisabled"
          :is-completed="item.isCompleted"
          :is-invalid="item.isInvalid"
          name="trigger"
        >
          <StepperIndicator>
            <AppIcon
              v-if="item.icon"
              :class="triggerIconClasses"
              :icon="item.icon"
            />
            <slot
              :is-invalid="item.isInvalid"
              :is-completed="item.isCompleted"
              name="validation"
            >
              <div
                v-if="item.isInvalid"
                :class="validationIconsClasses"
              >
                <AppIcon
                  class="text-destructive"
                  icon="close"
                  size="sm"
                />
              </div>
              <div
                v-else-if="item.isCompleted"
                :class="validationIconsClasses"
              >
                <AppIcon
                  class="text-success"
                  icon="checkmark"
                  size="sm"
                />
              </div>
            </slot>
          </StepperIndicator>
        </slot>
      </StepperTrigger>

      <StepperSeparator
        v-if="item.stepId !== steps[steps.length - 1].stepId"
        :class="separatorClasses"
      />

      <div :class="stepTextContainerClasses">
        <StepperTitle :class="stepTitleClasses">
          {{ item.title }}
        </StepperTitle>
        <StepperDescription
          v-if="item.description"
          :class="stepDescriptionClasses"
        >
          {{ item.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </StepperRoot>
</template>
