<script setup lang="ts">
import {
  VcCheckboxControl,
  VcCheckboxRoot,
} from '@wisemen/vue-core-components'
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <VcCheckboxRoot
    v-model="value"
    :is-disabled="false"
  >
    <div
      class="
        border-primary py-lg px-xl gap-xl flex w-96 overflow-hidden rounded-md
        border border-solid duration-200
        group-data-[state=checked]/checkbox:border-brand
        group-data-[state=checked]/checkbox:bg-brand-primary
        dark:group-data-[state=checked]/checkbox:bg-brand-950/50
      "
    >
      <div class="flex h-lh items-center">
        <VcCheckboxControl class="shrink-0" />
      </div>

      <div>
        <span
          class="
            text-primary block text-left text-sm font-medium duration-200
            group-data-[state=checked]/checkbox:text-brand-secondary
          "
        >
          Receive updates and special offers
        </span>

        <AnimatePresence :initial="false">
          <Motion
            v-if="value"
            :initial="{
              height: 0,
              opacity: 0,
              y: -8,
              scale: 0.95,
            }"
            :animate="{
              height: 'auto',
              opacity: 1,
              y: 0,
              scale: 1,
            }"
            :exit="{
              height: 0,
              opacity: 0,
              y: -8,
              scale: 0.95,
            }"
            :transition="{
              type: 'spring',
              bounce: 0,
              duration: 0.4,
            }"
            class="origin-top-left"
          >
            <span
              class="
                text-tertiary block text-left text-xs
                group-data-[state=checked]/checkbox:text-brand-primary
              "
            >
              You will receive a confirmation email and a link to manage your
              preferences.
            </span>
          </Motion>
        </AnimatePresence>
      </div>
    </div>
  </VcCheckboxRoot>
</template>
