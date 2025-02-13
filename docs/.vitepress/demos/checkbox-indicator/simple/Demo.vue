<script setup lang="ts">
import { VcCheckbox, VcCheckboxIndicator } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <VcCheckbox
    v-model="model"
    class="relative flex flex-col cursor-pointer disabled:cursor-not-allowed duration-200 disabled:bg-disabled-subtle disabled:border-disabled text-left p-4 data-[state=checked]:border-brand-primary-500 border border-solid border-secondary rounded-lg"
  >
    <template #default>
      <VcCheckboxIndicator class="absolute top-1 right-1" />

        <span class="text-sm font-medium text-primary group-disabled:text-disabled">
          I wanna use my promo code
        </span>

        <p class="text-xs leading-5 text-tertiary group-disabled:text-disabled">
          By using the promotion code saved in your profile, you can save 10% on your order.
        </p>
    </template>
  </VcCheckbox>
</template>
