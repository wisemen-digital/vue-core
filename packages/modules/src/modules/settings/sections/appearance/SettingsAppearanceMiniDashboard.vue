<template>
  <div
    class="
      border-secondary bg-primary w-full min-w-80 rounded-xl border border-solid
    "
  >
    <!-- macOS top bar -->
    <div
      class="
        gap-x-xs border-secondary p-md flex items-center border-b border-solid
      "
    >
      <div class="bg-error-400 size-2.5 rounded-full" />
      <div class="bg-warning-400 size-2.5 rounded-full" />
      <div class="bg-success-400 size-2.5 rounded-full" />
    </div>

    <div class="p-md grid grid-cols-[5rem_auto]">
      <div class="py-xs">
        <!-- Profile -->
        <div class="gap-x-md flex items-center">
          <div class="bg-quaternary size-4 rounded-full" />
          <div class="bg-quaternary h-2.5 w-12 rounded-lg" />
        </div>

        <!-- Navigation -->
        <div class="my-xl gap-y-md flex flex-col">
          <div
            v-for="i in 5"
            :key="i"
            class="bg-quaternary h-2.5 w-12 rounded-lg"
          />
        </div>
      </div>

      <!-- Page content -->
      <div class="px-md py-xxs">
        <div class="flex items-center justify-between">
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          <span class="text-tertiary text-xs font-bold">
            Dashboard
          </span>

          <slot name="action">
            <div class="bg-quaternary h-2.5 w-8 rounded-2xl" />
          </slot>
        </div>

        <div class="mt-md bg-tertiary h-28 w-full rounded-xl" />
      </div>
    </div>
  </div>
</template>
