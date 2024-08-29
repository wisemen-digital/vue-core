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

export function useStepper(activeStepId: Ref<number>, steps: StepItem[]): UseStepperReturnType {
  function nextStep(): void {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId.value)

    if (currentIndex >= 0 && currentIndex < steps.length - 1) {
      activeStepId.value = steps[currentIndex + 1].id
    }
  }

  function prevStep(): void {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId.value)

    if (currentIndex > 0) {
      activeStepId.value = steps[currentIndex - 1].id
    }
  }

  function goToStep(step: number): void {
    activeStepId.value = step
  }

  const isLastStep = computed<boolean>(() => {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId.value)

    return currentIndex === steps.length - 1
  })

  const isFirstStep = computed<boolean>(() => {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId.value)

    return currentIndex === 0
  })

  return {
    isFirstStep,
    isLastStep,
    goToStep,
    nextStep,
    prevStep,
  }
}
