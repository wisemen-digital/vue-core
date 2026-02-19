<script setup lang="ts">
const props = defineProps<{
  name: string
  src?: string | null
}>()

function getInitials(name: string): string {
  const nameParts = name.split(' ')
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase())

  return initials.join('')
}
</script>

<template>
  <img
    v-if="props.src"
    :src="props.src"
    alt="Avatar"
    class="
      flex aspect-square size-6 shrink-0 rounded-full border border-secondary
      bg-tertiary object-contain text-quaternary
    "
  >
  <div
    v-else
    class="
      flex aspect-square size-6 shrink-0 items-center justify-center
      rounded-full border border-secondary bg-tertiary text-xs font-semibold
      text-quaternary
    "
  >
    {{ getInitials(props.name) }}
  </div>
</template>
