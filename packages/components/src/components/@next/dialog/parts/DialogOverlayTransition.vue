<script setup lang="ts">
const props = withDefaults(defineProps<{
  enterActiveClass?: string
  enterFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}>(), {
  enterActiveClass: 'duration-200',
  enterFromClass: 'opacity-0',
  leaveActiveClass: 'duration-200',
  leaveToClass: 'opacity-0',
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
