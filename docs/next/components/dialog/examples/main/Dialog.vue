<script setup lang="ts">
import {
  VcButton,
  VcDialog,
  VcDialogCloseButton,
  VcDialogDescription,
  VcDialogTitle,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDialog class="max-w-[90vw] w-120 max-h-[90vh] p-3xl pt-5xl">
    <div class="flex justify-center">
      <div class="p-lg border border-solid border-primary rounded-2xl shadow-button bg-secondary">
        <div class="size-20 text-tertiary">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16M7.5 8V9.5M16.5 8V9.5M11 12.6001C11.8 12.6001 12.5 11.9001 12.5 11.1001V8M15.2002 15.2C13.4002 17 10.5002 17 8.7002 15.2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <VcDialogTitle>
      <h1 class="text-xl font-semibold text-primary text-center mt-3xl">
        Enable two-factor authentication
      </h1>
    </VcDialogTitle>

    <VcDialogDescription>
      <p class="text-secondary text-center mt-xl">
        For more security, we recommend enabling two-factor authentication.
      </p>
    </VcDialogDescription>

    <div class="mt-3xl pt-3xl flex justify-between border-t border-solid border-tertiary">
      <VcDialogCloseButton>
        <VcButton
          :class-config="{
            root: 'rounded-xl',
          }"
          variant="tertiary"
        >
          Skip for now
        </VcButton>
      </VcDialogCloseButton>

      <VcButton
        :class-config="{
          root: 'rounded-xl',
        }"
        variant="primary"
        icon-left="check"
      >
        Enable
      </VcButton>
    </div>
  </VcDialog>
</template>
