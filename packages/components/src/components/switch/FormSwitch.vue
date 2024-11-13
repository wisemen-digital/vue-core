<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { computed } from 'vue'

import { useSwitchStyle } from '@/components/switch/switch.style'

const props = withDefaults(defineProps<{
  /**
   * The ID of the item.
   */
  id?: string | null
  /**
   * Whether the switch is disabled or not.
   */
  isDisabled?: boolean
  /**
   * Whether the switch is invalid or not.
   */
  isInvalid?: boolean
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
})

const model = defineModel<boolean>({
  required: true,
})

const switchStyle = useSwitchStyle()

const containerClasses = computed<string>(() => switchStyle.container({
  isInvalid: props.isInvalid,
}))
const thumbClasses = computed<string>(() => switchStyle.thumb())
</script>

<template>
  <SwitchRoot
    :id="props.id ?? undefined"
    v-model:checked="model"
    :disabled="props.isDisabled"
    :class="containerClasses"
  >
    <SwitchThumb :class="thumbClasses" />
  </SwitchRoot>
</template>
