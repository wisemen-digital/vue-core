<script setup lang="ts">
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import AppCollapseTransition from '@/components/transitions/AppCollapseTransition.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = defineProps<{
  errors: FormFieldErrors
  isVisible: boolean
}>()
</script>

<template>
  <AppCollapseTransition :duration="0.2">
    <div v-if="props.errors !== undefined && props.isVisible">
      <div class="flex items-center gap-x-2">
        <AppIcon
          size="default"
          class="shrink-0 text-destructive"
          icon="warning"
        />

        <AppText
          variant="subtext"
          class="text-destructive"
        >
          {{ props.errors?._errors[0] }}
        </AppText>
      </div>
    </div>
  </AppCollapseTransition>
</template>
