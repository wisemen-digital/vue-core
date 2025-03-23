<script setup lang="ts">
import { Motion } from 'motion-v'
import { computed, ref } from 'vue'

import ButtonContentContainer from '@/packages/@next/button/button/parts/ButtonContentContainer.vue'
import ButtonIconLeft from '@/packages/@next/button/button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/packages/@next/button/button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/packages/@next/button/button/parts/ButtonLoader.vue'
import ButtonRoot from '@/packages/@next/button/button/parts/ButtonRoot.vue'

const selectedTarget = ref<HTMLElement | null>(null)

const targets = [
  'button-root',
  'button-content-container',
  'button-icon-left',
  'button-icon-right',
  'button-loader',
]

const selectedTargetRect = computed(() => {
  if (!selectedTarget.value) {
    return null
  }

  return selectedTarget.value.getBoundingClientRect()
})

function selectTarget(target: string): void {
  selectedTarget.value = document.getElementById(target)
}
</script>

<template>
  <div class="grid grid-cols-2">
    <Motion
      v-if="selectedTargetRect"
      :animate="{
        left: selectedTargetRect.left,
        top: selectedTargetRect.top,
        width: selectedTargetRect.width,
        height: selectedTargetRect.height,
      }"
      class="absolute border-2 border-solid border-error-500"
    />
    <ButtonRoot
      id="button-root"
      icon-left="search"
      icon-right="search"
    >
      <ButtonContentContainer id="button-content-container">
        <slot name="icon-left">
          <ButtonIconLeft id="button-icon-left" />
        </slot>

        Button content

        <slot name="icon-right">
          <ButtonIconRight id="button-icon-right" />
        </slot>
      </ButtonContentContainer>

      <slot name="loader">
        <ButtonLoader id="button-loader" />
      </slot>
    </ButtonRoot>

    <div>
      <ul>
        <li
          v-for="target in targets"
          :key="target"
        >
          <button
            @click="selectTarget(target)"
          >
            {{ target }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
