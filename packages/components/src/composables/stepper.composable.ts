import {
  computed,
  type ComputedRef,
  type Ref,
} from 'vue'

import type { StepItem } from '@/types/stepper.type'

interface UseStepperReturnType {
  isFirstStep: ComputedRef<boolean>
  isLastStep: ComputedRef<boolean>
  goToStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
}

export function useStepper(activeStep: Ref<number>, steps: StepItem[]): UseStepperReturnType {
  function nextStep(): void {
    if (activeStep.value < steps.length) {
      activeStep.value++
    }
  }

  function prevStep(): void {
    if (activeStep.value > 1) {
      activeStep.value--
    }
  }

  function goToStep(step: number): void {
    activeStep.value = step
  }

  const isLastStep = computed<boolean>(() => activeStep.value === steps[steps.length - 1]?.stepId)
  const isFirstStep = computed<boolean>(() => activeStep.value === steps[0]?.stepId)

  return {
    isFirstStep,
    isLastStep,
    goToStep,
    nextStep,
    prevStep,
  }
}
