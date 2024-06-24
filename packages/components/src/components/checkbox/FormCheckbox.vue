<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
  useId,
} from 'radix-vue'
import { computed } from 'vue'

import { useCheckboxStyle } from '@/components/checkbox/checkbox.style'
import FormLabel from '@/components/form-label/FormLabel.vue'
import AppIcon from '@/components/icon/AppIcon.vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isIndeterminate?: boolean
  isInvalid?: boolean
  label?: null | string
}>(), {
  id: null,
  isDisabled: false,
  isIndeterminate: false,
  isInvalid: false,
  label: null,
})

const emit = defineEmits<{
  blur: []
}>()

const model = defineModel<boolean>({
  required: true,
})

const checkboxStyle = useCheckboxStyle()

const checkboxRootClasses = computed<string>(() => checkboxStyle.root({
  isInvalid: props.isInvalid,
}))
const checkboxIndicatorClasses = computed<string>(() => checkboxStyle.indicator())

const id = props.id ?? useId()

const computedModel = computed<'indeterminate' | boolean>({
  get() {
    if (model.value) {
      return true
    }

    if (props.isIndeterminate) {
      return 'indeterminate'
    }

    return false
  },
  set(value) {
    model.value = value === 'indeterminate' ? false : value
  },
})

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <div class="flex items-center gap-x-2">
    <CheckboxRoot
      :id="id"
      v-model:checked="computedModel"
      :disabled="props.isDisabled"
      :class="checkboxRootClasses"
      @blur="onBlur"
    >
      <CheckboxIndicator>
        <AppIcon
          v-if="props.isIndeterminate"
          :class="checkboxIndicatorClasses"
          icon="minus"
        />

        <AppIcon
          v-else-if="computedModel === true"
          :class="checkboxIndicatorClasses"
          icon="checkmark"
        />
      </CheckboxIndicator>
    </CheckboxRoot>

    <FormLabel
      v-if="props.label !== null"
      :for="id"
      :is-invalid="props.isInvalid"
      :label="props.label"
    />
  </div>
</template>
