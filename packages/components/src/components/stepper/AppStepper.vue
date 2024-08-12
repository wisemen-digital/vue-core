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
    >
      <StepperTrigger :class="triggerClasses">
        <StepperIndicator>
          <AppIcon
            :class="triggerIconClasses"
            :icon="item.icon"
          />
        </StepperIndicator>
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
