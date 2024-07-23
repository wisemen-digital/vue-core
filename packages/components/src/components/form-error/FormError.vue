<script setup lang="ts">
import { computed } from 'vue'

import { useFormErrorStyle } from '@/components/form-error/formError.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import AppCollapseTransition from '@/components/transitions/AppCollapseTransition.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = defineProps<{
  /**
   *  Whether the error is visible
   */
  isVisible: boolean
  /**
   *  The errors to display
   */
  errors: FormFieldErrors
}>()

const formErrorStyle = useFormErrorStyle()

const textClasses = computed<string>(() => formErrorStyle.text())
const iconClasses = computed<string>(() => formErrorStyle.icon())
const containerClasses = computed<string>(() => formErrorStyle.container())
</script>

<template>
  <AppCollapseTransition :duration="0.2">
    <div v-if="props.errors !== undefined && props.isVisible">
      <div :class="containerClasses">
        <AppIcon
          :class="iconClasses"
          size="default"
          icon="warning"
        />

        <AppText
          :class="textClasses"
          variant="subtext"
        >
          {{ props.errors?._errors[0] }}
        </AppText>
      </div>
    </div>
  </AppCollapseTransition>
</template>
