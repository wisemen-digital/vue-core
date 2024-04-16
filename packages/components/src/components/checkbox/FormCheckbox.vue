<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
  useId,
} from 'radix-vue'
import { computed } from 'vue'

import FormLabel from '../form-label/FormLabel.vue'
import AppIcon from '../icon/AppIcon.vue'

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
      :class="{
        'border-destructive focus-visible:ring-destructive data-[state=checked]:border-destructive data-[state=checked]:bg-destructive': props.isInvalid,
        'border-input-border focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:bg-primary': !props.isInvalid,
      }"
      class="flex size-5 items-center justify-center rounded border-[1.5px] border-solid outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
      @blur="onBlur"
    >
      <CheckboxIndicator>
        <AppIcon
          v-if="props.isIndeterminate"
          icon="minus"
          class="text-primary-foreground"
        />

        <AppIcon
          v-else-if="computedModel === true"
          icon="checkmark"
          class="text-primary-foreground"
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
