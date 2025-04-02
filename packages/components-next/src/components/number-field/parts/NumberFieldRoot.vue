<script setup lang="ts">
import { NumberFieldRoot as RekaNumberFieldRoot } from 'reka-ui'
import { computed } from 'vue'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import { useProvideNumberFieldContext } from '@/components/number-field/numberField.context'
import type { NumberFieldEmits } from '@/components/number-field/numberField.emits'
import type { NumberFieldProps } from '@/components/number-field/numberField.props'
import type { CreateNumberFieldStyle } from '@/components/number-field/numberField.style'
import { createNumberFieldStyle } from '@/components/number-field/numberField.style'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<NumberFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  autocomplete: 'off',
  classConfig: null,
  errors: () => [],
  formatOptions: null,
  hideControls: false,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  max: null,
  min: null,
  placeholder: null,
  step: 1,
  variant: null,
})

const emit = defineEmits<NumberFieldEmits>()

const modelValue = defineModel<number | null>({ required: true })

const delegatedModel = computed<number | undefined>({
  get: () => modelValue.value ?? undefined,
  set: (value: number | undefined) => {
    if (Number.isNaN(value)) {
      modelValue.value = null

      return
    }

    modelValue.value = value ?? null
  },
})

const { locale } = useInjectConfigContext()

const numberFieldStyle = computed<CreateNumberFieldStyle>(
  () => createNumberFieldStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('numberField', { variant: props.variant ?? undefined })

function onBlur(event: FocusEvent): void {
  emit('blur', event)
}

function onFocus(event: FocusEvent): void {
  emit('focus', event)
}

useProvideNumberFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: numberFieldStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <InteractableElement :is-disabled="props.isDisabled">
    <RekaNumberFieldRoot
      v-model="delegatedModel"
      :class="numberFieldStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      :data-icon-left="props.iconLeft !== null || undefined"
      :data-icon-right="props.iconRight !== null || undefined"
      :data-invalid="(props.errors.length > 0 && props.isTouched) || undefined"
      :data-controls="!props.hideControls || undefined"
      :required="props.isRequired"
      :min="props.min ?? undefined"
      :max="props.max ?? undefined"
      :step="props.step"
      :format-options="props.formatOptions ?? undefined"
      :locale="locale"
    >
      <slot />
    </RekaNumberFieldRoot>
  </InteractableElement>
</template>
