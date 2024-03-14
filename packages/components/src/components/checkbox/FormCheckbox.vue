<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '../icon/AppIcon.vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isIndeterminate?: boolean
  isInvalid?: boolean
}>(), {
  id: null,
  isDisabled: false,
  isIndeterminate: false,
  isInvalid: false,
})

const model = defineModel<boolean>({
  required: true,
})

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
</script>

<template>
  <CheckboxRoot
    v-model:checked="computedModel"
    :disabled="props.isDisabled"
    :class="{
      'border-destructive focus-visible:ring-destructive data-[state=checked]:border-destructive data-[state=checked]:bg-destructive': props.isInvalid,
      'border-input-border focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:bg-primary': !props.isInvalid,
    }"
    class="flex size-5 items-center justify-center rounded border-[1.5px] border-solid outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <CheckboxIndicator>
      <AppIcon
        v-if="props.isIndeterminate"
        icon="minus"
        size="sm"
        class="text-primary-foreground"
      />

      <AppIcon
        v-else-if="computedModel === true"
        icon="checkmark"
        size="sm"
        class="text-primary-foreground"
      />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
