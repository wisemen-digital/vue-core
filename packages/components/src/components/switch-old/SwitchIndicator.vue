<script setup lang="ts">
import { SwitchThumb } from 'reka-ui'
import { computed } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import { switchStyle } from '@/components/switch-old/switch.style'
import type { Icon as IconType } from '@/icons/icons'

interface Props {
  isChecked: boolean
  iconChecked: IconType | null
  iconUnchecked: IconType | null
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
        <Icon
          :icon="props.iconChecked"
          :class="iconCheckedClasses"
        />
      </div>

      <div v-else-if="!props.isChecked && props.iconUnchecked !== null">
        <Icon
          :icon="props.iconUnchecked"
          :class="iconUncheckedClasses"
        />
      </div>
    </Transition>
  </SwitchThumb>
</template>
