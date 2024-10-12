<script setup lang="ts">
import { SwitchThumb } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'

interface Props {
  isChecked: boolean
  indicatorClasses: string
}

const props = defineProps<Props>()

const enterFromClass = computed<string>(() => {
  if (props.isChecked) {
    return 'opacity-0 -translate-x-full'
  }

  return 'opacity-0 translate-x-full'
})

const leaveToClass = computed<string>(() => {
  if (props.isChecked) {
    return 'opacity-0 translate-x-full'
  }

  return 'opacity-0 -translate-x-full'
})
</script>

<template>
  <SwitchThumb :class="indicatorClasses">
    <Transition
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
      enter-active-class="duration-200 absolute"
      leave-active-class="duration-200 absolute"
    >
      <div v-if="props.isChecked">
        <AppIcon icon="check" />
      </div>

      <div v-else>
        <AppIcon icon="xClose" />
      </div>
    </Transition>
  </SwitchThumb>
</template>
