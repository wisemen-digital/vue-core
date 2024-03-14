<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isInvalid?: boolean
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
})

const model = defineModel<boolean>({
  required: true,
})
</script>

<template>
  <SwitchRoot
    :id="props.id ?? undefined"
    v-model:checked="model"
    :disabled="props.isDisabled"
    :class="{
      'focus-visible:ring-ring data-[state=checked]:bg-primary': !props.isInvalid,
      'bg-destructive focus-visible:ring-destructive': props.isInvalid,
    }"
    class="w-10 rounded-2xl bg-switch-background p-0.5 outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <SwitchThumb class="block size-5 rounded-full bg-switch-foreground shadow-sm duration-200 data-[state=checked]:translate-x-4" />
  </SwitchRoot>
</template>
