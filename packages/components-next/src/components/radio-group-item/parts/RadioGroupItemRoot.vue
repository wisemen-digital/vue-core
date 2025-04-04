<script setup lang="ts">
import { RadioGroupItem as RekaRadioGroupItem } from 'reka-ui'
import { computed } from 'vue'

import { useProvideRadioGroupItemContext } from '@/components/radio-group-item/radioGroupItem.context'
import type { RadioGroupItemEmits } from '@/components/radio-group-item/radioGroupItem.emits'
import type { RadioGroupItemProps } from '@/components/radio-group-item/radioGroupItem.props'
import type { CreateRadioGroupItemStyle } from '@/components/radio-group-item/radioGroupItem.style'
import { createRadioGroupItemStyle } from '@/components/radio-group-item/radioGroupItem.style'
import FormControl from '@/components/shared/FormControl.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isIndeterminate: false,
  isRequired: false,
  isTouched: false,
  classConfig: null,
  errorMessage: null,
  hint: null,
  label: null,
  value: null,
  variant: null,
})

const emit = defineEmits<RadioGroupItemEmits>()

const radioGroupItemStyle = computed<CreateRadioGroupItemStyle>(
  () => createRadioGroupItemStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('radioGroupItem', { variant: props.variant ?? undefined })

useProvideRadioGroupItemContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: radioGroupItemStyle,
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
      <RekaRadioGroupItem
        :value="props.value"
        :data-invalid="(errorMessage !== null && props.isTouched) || undefined"
        :class="radioGroupItemStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
        @focus="emit('focus')"
        @blur="emit('blur')"
      >
        <slot />
      </RekaRadioGroupItem>
    </FormControl>
  </PrimitiveElement>
</template>
