<script setup lang="ts">
const props = withDefaults(defineProps<{
  enterActiveClass?: string
  enterFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}>(), {
  enterActiveClass: 'duration-300 ease-dialog',
  enterFromClass: 'opacity-0 not-motion-reduce:scale-110',
  leaveActiveClass: 'duration-300 ease-dialog',
  leaveToClass: 'opacity-0 not-motion-reduce:scale-110',
})
</script>

<template>
  <Transition
    :enter-active-class="props.enterActiveClass"
    :enter-from-class="props.enterFromClass"
    :leave-active-class="props.leaveActiveClass"
    :leave-to-class="props.leaveToClass"
  >
    <slot />
  </Transition>
</template>
