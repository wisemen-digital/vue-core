<script setup lang="ts">
import { computed } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = defineProps<{
  inputId: string
  isRequired: boolean
  isTouched: boolean
  errors: FormFieldErrors | null
  hint: string | null
  label: string | null
}>()

const hasError = computed<boolean>(() => props.errors !== undefined && props.errors !== null && props.isTouched)
</script>

<template>
  <div>
    <slot
      :label="label"
      name="label"
    >
      <InputFieldLabel
        :for="inputId"
        :label="label"
        :is-required="isRequired"
      />
    </slot>

    <slot />

    <slot
      :errors="errors"
      :hint="hint"
      name="bottom"
    >
      <Collapsable>
        <div v-if="hasError">
          <slot
            :errors="errors"
            name="error"
          >
            <InputFieldError
              :errors="errors"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="hint !== null">
          <slot
            :hint="hint"
            name="hint"
          >
            <InputFieldHint
              :input-id="inputId"
              :hint="hint"
            />
          </slot>
        </div>
      </Collapsable>
    </slot>
  </div>
</template>
