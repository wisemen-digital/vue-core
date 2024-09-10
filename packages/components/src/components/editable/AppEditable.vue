<script setup lang="ts">
import { EditableRoot } from 'radix-vue'
import { computed } from 'vue'

import AppEditableArea from './AppEditableArea.vue'
import AppEditableCancel from './AppEditableCancel.vue'
import AppEditableSubmit from './AppEditableSubmit.vue'
import AppEditableTrigger from './AppEditableTrigger.vue'
import { useEditableStyle } from './editable.style'

const props = withDefaults(defineProps<{
  /**
   * The ID of the field.
   */
  id?: string
  /**
   * Whether the editable field is disabled or not.
   */
  isDisabled?: boolean
  /**
   * The default value of the editable field.
   */
  default?: string
  /**
   * The maximum number of characters allowed.
   */
  maxLength?: number
  /**
   * The placeholder value of the editable field.
   */
  placeholder?: string
}>(), {
  isDisabled: false,
})

defineSlots<{
  /** Override the rendering of the editable field's cancel action */
  cancel: () => any
  /** Override the rendering of the editable field's editable area */
  editableArea: (props: {
    isEditing: boolean
  }) => any
  /** Override the rendering of the editable field's submit action */
  submit: () => any
  /** Override the rendering of the editable field's trigger */
  trigger: () => any
}>()

const model = defineModel<string>({
  required: true,
})

const edditableStyle = useEditableStyle()

const rootClasses = computed<string>(() => edditableStyle.root())
const actionsClasses = computed<string>(() => edditableStyle.actions())
</script>

<template>
  <div>
    <EditableRoot
      :id="props.id"
      v-slot="{ isEditing }"
      v-model="model"
      :default-value="props.default"
      :placeholder="props.placeholder"
      :disabled="props.isDisabled"
      :class="rootClasses"
      submit-mode="both"
      auto-resize
    >
      <slot
        :is-editing="isEditing"
        name="editableArea"
      >
        <AppEditableArea />
      </slot>
      <div v-if="!isEditing">
        <AppEditableTrigger>
          <slot name="trigger" />
        </AppEditableTrigger>
      </div>
      <div
        v-else
        :class="actionsClasses"
      >
        <AppEditableSubmit>
          <slot
            name="submit"
          />
        </AppEditableSubmit>
        <AppEditableCancel>
          <slot
            name="cancel"
          />
        </AppEditableCancel>
      </div>
    </EditableRoot>
  </div>
</template>
