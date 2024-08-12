---
sidebar: auto
---


# AppStepper

<!-- @include: ./app-stepper-meta.md -->

## Types

::: code-group
```js [StepItem]
export interface StepItem {
  stepId: number
  title: string
  description?: string
  icon: Icon
}

```
::: 

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type { StepItem } from '@wisemen/vue-core'
import { AppStepper } from '@wisemen/vue-core'
import { ref } from 'vue'

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
</script>
  
<template>
  <AppBadge>
    <AppStepper
      v-model="activeStepId"
      :steps="steps"
    />
  </AppBadge>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/stepper/AppStepper.vue).