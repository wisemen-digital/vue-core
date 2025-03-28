<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
  VcPopoverCloseButton,
  VcTextField
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
      <div class="w-96 p-3xl pb-2xl">
        <p class="text-md font-semibold text-primary">
          Subscribe to our newsletter
        </p>

        <VcTextField 
          :model-value="null"
          label="Email"
          placeholder="example@example.com"
          class="mt-xl"
        />

        <div class="grid grid-cols-2 gap-md mt-3xl">
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

      <VcPopoverCloseButton class="!absolute top-2 right-2" />
    </template>
  </VcPopover>
</template>