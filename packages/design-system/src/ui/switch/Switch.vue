<script setup lang="ts">
import {
  SwitchRoot as RekaSwitchRoot,
  SwitchThumb as RekaSwitchThumb,
} from 'reka-ui'
import type { Component } from 'vue'
import {
  computed,
  useId,
} from 'vue'

import {
  INPUT_DEFAULTS,
  INPUT_META_DEFAULTS,
} from '@/types/input.type'
import InputWrapper from '@/ui/input-wrapper/InputWrapper.vue'
import { useProvideSwitchContext } from '@/ui/switch/switch.context'
import type { SwitchProps } from '@/ui/switch/switch.props'
import type { SwitchStyle } from '@/ui/switch/switch.style'
import { createSwitchStyle } from '@/ui/switch/switch.style'
import SwitchThumbIcon from '@/ui/switch/SwitchThumbIcon.vue'

const props = withDefaults(defineProps<SwitchProps>(), {
  ...INPUT_DEFAULTS,
  ...INPUT_META_DEFAULTS,
  iconChecked: null,
  iconUnchecked: null,
  size: 'md',
})

const emit = defineEmits<{
  blur: []
}>()

const modelValue = defineModel<boolean>({
  required: true,
})

const id = props.id ?? useId()

const switchStyle = computed<SwitchStyle>(() => createSwitchStyle({
  size: props.size,
}))

useProvideSwitchContext({
  isChecked: computed<boolean>(() => modelValue.value),
  iconChecked: computed<Component | null>(() => props.iconChecked ?? null),
  iconUnchecked: computed<Component | null>(() => props.iconUnchecked ?? null),
  switchStyle,
})
</script>

<template>
  <InputWrapper
    :error-message="props.errorMessage"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
    :hint="props.hint"
    :label="props.label"
    :is-horizontal="true"
    :class="props.class"
    :style="props.style"
    :for="id"
    :is-label-hidden="props.isLabelHidden"
    horizontal-align="center"
  >
    <RekaSwitchRoot
      :id="id"
      v-model="modelValue"
      :disabled="props.isDisabled"
      :data-invalid="(errorMessage !== null && errorMessage !== undefined) || undefined"
      :class="switchStyle.root()"
      @blur="emit('blur')"
    >
      <RekaSwitchThumb :class="switchStyle.thumb()">
        <SwitchThumbIcon />
      </RekaSwitchThumb>
    </RekaSwitchRoot>
  </InputWrapper>
</template>
