<script setup lang="ts">
import { Primitive } from 'reka-ui'

import { useKeyboardShortcut } from '@/composables/keyboardShortcut.composable'
import { UIButton } from '@/ui/button/index'
import { useInjectFormContext } from '@/ui/form/form.context'

const props = withDefaults(defineProps<{
  disableKeyboardShortcut?: boolean
  label: string
  variant?: 'primary' | 'secondary'
}>(), {
  disableKeyboardShortcut: false,
  variant: 'primary',
})

const {
  formId, form,
} = useInjectFormContext()

useKeyboardShortcut({
  meta_enter: () => {
    if (props.disableKeyboardShortcut) {
      return
    }

    form.submit()
  },
})
</script>

<template>
  <Primitive
    :as-child="true"
    v-bind="props"
    :is-loading="form.isSubmitting.value"
    :form="formId"
    type="submit"
  >
    <slot>
      <UIButton
        :label="props.label"
        :form="formId"
        :variant="props.variant"
        :keyboard-shortcut-keys="props.disableKeyboardShortcut ? null : ['meta', 'enter']"
      />
    </slot>
  </Primitive>
</template>
