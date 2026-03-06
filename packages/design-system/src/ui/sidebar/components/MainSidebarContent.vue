<script setup lang="ts">

</script>

<template>
  <div
    class="flex h-full flex-col justify-between overflow-hidden text-primary"
  >
    <div class="p-lg">
      <slot name="header" />
    </div>
    <nav
      class="flex h-full flex-col gap-2xl overflow-y-auto p-md"
    >
      <slot name="navigation" />
    </nav>
    <div
      class="flex flex-col gap-sm p-md"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
