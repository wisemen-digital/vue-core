<script setup lang="ts">
import type { Form } from 'formango'
import { useId } from 'vue'

import { useProvideFormContext } from '@/ui/form/form.context'

const props = withDefaults(defineProps<{
  id?: string | null
  form: Form<any>
  promptOnUnsavedChanges: boolean
}>(), {
  id: null,
})

const id = useId()

if (props.promptOnUnsavedChanges) {
  // TODO: implement prompt on unsaved changes when confirm dialog is ready
  // useUnsavedChanges(props.form.isDirty)
}

useProvideFormContext({
  formId: id,
  form: props.form,
})
</script>

<template>
  <form
    :id="props.id ?? id"
    :novalidate="true"
    @submit.prevent="props.form.submit()"
  >
    <slot />
  </form>
</template>
