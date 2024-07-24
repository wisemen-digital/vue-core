<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppCollapseTransition,
  AppText,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  duration: {
    default: '0.5',
    cols: 2,
    label: 'Duration',
    type: 'text',
  },
})

const show = ref<boolean>(false)

function toggleShow(): void {
  show.value = !show.value
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex flex-col items-center">
        <AppButton @click="toggleShow">
          Click to toggle content
        </AppButton>
        <AppCollapseTransition :duration="+values.duration">
          <AppText
            v-if="show"
            variant="body"
          >
            Content inside the transition
          </AppText>
        </AppCollapseTransition>
      </div>
    </template>
  </ComponentPlayground>
</template>
