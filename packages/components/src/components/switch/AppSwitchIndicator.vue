<script setup lang="ts">
import { SwitchThumb } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { switchStyle } from '@/components/switch/switch.style.js'
import type { Icon } from '@/icons/icons.js'

interface Props {
  isChecked: boolean
  iconChecked: Icon | null
  iconUnchecked: Icon | null
  indicatorClasses: string
}

const props = defineProps<Props>()

const style = switchStyle()

const iconCheckedClasses = computed<string>(() => style.iconChecked())
const iconUncheckedClasses = computed<string>(() => style.iconUnchecked())

const enterFromClass = computed<string>(() => {
  if (props.isChecked) {
    return 'opacity-0 -translate-x-1/4 scale-85'
  }

  return 'opacity-0 translate-x-1/4 scale-85'
})

const leaveToClass = computed<string>(() => {
  if (props.isChecked) {
    return 'opacity-0 translate-x-1/4 scale-85'
  }

  return 'opacity-0 -translate-x-1/4 scale-85'
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
      <div v-if="props.isChecked && props.iconChecked !== null">
        <AppIcon
          :icon="props.iconChecked"
          :class="iconCheckedClasses"
        />
      </div>

      <div v-else-if="!props.isChecked && props.iconUnchecked !== null">
        <AppIcon
          :icon="props.iconUnchecked"
          :class="iconUncheckedClasses"
        />
      </div>
    </Transition>
  </SwitchThumb>
</template>
