<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { StepItem } from '@wisemen/vue-core'
import {
  AppButton,
  AppStepper,
  AppText,
  useStepper,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  triggerSize: {
    default: 'default',
    cols: 2,
    label: 'Trigger size',
    items: [
      'default',
      'sm',
      'lg',
    ],
    type: 'select',
  },
})

const steps: StepItem[] = [
  {
    title: 'Step 1',
    stepId: 1,
    description: 'Description for step 1',
    icon: 'checkmark',
  },
  {
    title: 'Step 2',
    stepId: 2,
    description: 'Description for step 2',
    icon: 'search',
  },
  {
    title: 'Step 3',
    stepId: 3,
    description: 'Description for step 3',
    icon: 'calendar',
  },
]

const activeStepId = ref<number>(steps[0].stepId)

const stepper = useStepper(activeStepId, steps)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex w-full flex-col gap-4">
        <AppStepper
          v-bind="values"
          v-model="activeStepId"
          :steps="steps"
        />
        <AppText variant="caption">
          Using UseStepper composable:
        </AppText>
        <div class="flex items-center gap-2">
          <AppButton
            size="xs"
            @click="stepper.goToStep(1)"
          >
            Go to step 1
          </AppButton>
          <AppButton
            size="xs"
            @click="stepper.nextStep()"
          >
            Next step
          </AppButton>
          <AppButton
            size="xs"
            @click="stepper.prevStep()"
          >
            Previous step
          </AppButton>
          <AppText variant="caption">
            isFirstStep: {{ stepper.isFirstStep }}
          </AppText>
          <AppText variant="caption">
            isLastStep: {{ stepper.isLastStep }}
          </AppText>
        </div>
      </div>
    </template>
  </ComponentPlayground>
</template>
