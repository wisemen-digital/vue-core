<script setup lang="ts">
import {
  VcCheckbox,
  VcCheckboxIndicator,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <VcCheckbox
    v-model="model"
    class="
      disabled:bg-disabled-subtle disabled:border-disabled
      disabled:cursor-not-allowed
      data-[state=checked]:border-brand-primary-500
      border-secondary relative flex cursor-pointer flex-col rounded-lg border
      border-solid p-4 text-left duration-200
    "
  >
    <template #default>
      <VcCheckboxIndicator class="absolute top-1 right-1" />

      <span
        class="
          text-primary text-sm font-medium
          group-disabled:text-disabled
        "
      >
        I wanna use my promo code
      </span>

      <p
        class="
          text-tertiary text-xs leading-5
          group-disabled:text-disabled
        "
      >
        By using the promotion code saved in your profile, you can save 10% on your order.
      </p>
    </template>
  </VcCheckbox>
</template>
