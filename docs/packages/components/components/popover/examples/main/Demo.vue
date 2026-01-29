<script setup lang="ts">
import {
  VcButton,
  VcPopover,
  VcPopoverCloseButton,
  VcTextField,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopover>
    <template #trigger>
      <VcButton variant="secondary">
        Subscribe
      </VcButton>
    </template>

    <template #content>
      <div class="p-3xl pb-2xl w-96">
        <p class="text-md text-primary font-semibold">
          Subscribe to our newsletter
        </p>

        <VcTextField
          :model-value="null"
          label="Email"
          placeholder="example@example.com"
          class="mt-xl"
        />

        <div class="mt-3xl flex justify-between">
          <VcPopoverCloseButton>
            <VcButton variant="tertiary">
              Cancel
            </VcButton>
          </VcPopoverCloseButton>

          <VcButton>
            Subscribe
          </VcButton>
        </div>
      </div>

      <VcPopoverCloseButton class="absolute! top-2 right-2" />
    </template>
  </VcPopover>
</template>
