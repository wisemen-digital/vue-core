<script setup lang="ts">
import {
  DatePickerField,
  DatePickerInput,
  DatePickerTrigger,
} from 'radix-vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
}>()

const emit = defineEmits<{
  dateClick: []
}>()

const { classAttr } = useComponentAttrs()

function onTriggerClick(): void {
  emit('dateClick')
}
</script>

<template>
  <DatePickerField
    v-slot="{ segments }"
    :class="[
      classAttr,
      {
        'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
        'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
      },
    ]"
    class="relative flex h-10 w-full items-center rounded-input border border-solid bg-input pl-3 pr-1 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <div class="flex items-center">
      <template
        v-for="item in segments"
        :key="item.part"
      >
        <DatePickerInput
          v-if="item.part === 'literal'"
          :part="item.part"
        >
          {{ item.value }}
        </DatePickerInput>
        <DatePickerInput
          v-else
          :part="item.part"
          class="rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none data-[placeholder]:text-input-placeholder"
        >
          {{ item.value }}
        </DatePickerInput>
      </template>
    </div>

    <DatePickerTrigger
      as-child
      @click="onTriggerClick"
    >
      <AppIconButton
        label="calendar"
        class="ml-auto"
        variant="ghost"
        size="sm"
        icon="calendar"
      />
    </DatePickerTrigger>
  </DatePickerField>
</template>
