<script setup lang="ts">
import { SwitchRoot as RekaSwitchRoot } from 'reka-ui'
import { computed } from 'vue'

import FormControl from '@/components/shared/FormControl.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useProvideSwitchContext } from '@/components/switch/switch.context'
import type { SwitchEmits } from '@/components/switch/switch.emits'
import type { SwitchProps } from '@/components/switch/switch.props'
import type { CreateSwitchStyle } from '@/components/switch/switch.style'
import { createSwitchStyle } from '@/components/switch/switch.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<SwitchProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  classConfig: null,
  errors: () => [],
  hint: null,
  label: null,
  size: 'md',
  variant: null,
})

const emit = defineEmits<SwitchEmits>()

const modelValue = defineModel<boolean>({ required: true })

const switchStyle = computed<CreateSwitchStyle>(() => createSwitchStyle({
  size: props.size,
  variant: props.variant ?? undefined,
}))

const customClassConfig = useComponentClassConfig('switch', {
  size: props.size,
  variant: props.variant ?? undefined,
})

useProvideSwitchContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: switchStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <FormControl
      :is-disabled="isDisabled"
      :is-invalid="errorMessage !== null"
      :is-required="isRequired"
      :described-by="`${id}-error ${id}-hint`"
      :is-loading="false"
    >
      <RekaSwitchRoot
        v-model="modelValue"
        :data-invalid="(errorMessage !== null && props.isTouched) || undefined"
        :class="switchStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
        @focus="emit('focus')"
        @blur="emit('blur')"
      >
        <slot />
      </RekaSwitchRoot>
    </FormControl>
  </PrimitiveElement>
</template>
